import React, { useState, useEffect } from 'react'
import './components/Col2.css';
import Chart from './Chart'
import axios from 'axios'



const Col2 = () => {
  const [priceData, setpriceData] = useState([])
  const [popData, setpopData] = useState([])
  const priceURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum-classic&order=market_cap_desc&per_page=100&page=1&sparkline=true"
  const popularityURL = "https://api.lunarcrush.com/v2?data=assets&key=ohn8lh0mi3aor1y5r0ve&symbol=ETC&data_points=168&time_series_indicators=social_score"
  //coinbase provides 'every hour' data for one week which is 168 data points
  // lunarcrush unix time math get the unix time then minus 604800 for one week ago
  
  const getPriceData = () =>
    fetch(`${priceURL}`)
      .then((res) => res.json())
        .catch((error) =>{
          console.log(error)
      })

  const getPopData = () =>
      fetch(`${popularityURL}`)
        .then((res) => res.json())
          .catch((error) =>{
            console.log(error)
        })

  
  useEffect(() => {
    getPriceData().then((priceData) => setpriceData(priceData))
    getPopData().then((popData) => setpopData(popData))
  }, [])

  function reload() {
    window.location.reload(false);
  }
  let array = []

    // for(let i=0;i < 169; i++){
    //   array.push(popData.data[0].timeSeries[i].social_score)
    // }

  console.log(array)
  console.log(priceData)
  return (
    
    <div class="col-2">
      {priceData.map((item) =>
        <div>
          <div class="header">
            <div class="title">Dashboard</div>
            <div class="search">
              <i class="fas fa-search"></i>
              <input type="text" name="name" placeholder='search for crypto..' required id="name" />
            </div>
          </div>
          <div class="chartBoard">
            <div class="chartTitle">Price vs Popularity</div>
            <div class="coin">{item.name} <button class="reloadButton" onClick={reload}><i class="fas fa-sync-alt"></i></button></div>
            <div class="price">
              <h2>${item.current_price.toFixed(2)}/<i class="fab fa-bitcoin"></i></h2>
              <div class="index"><i class="fas fa-chart-line"></i> {item.price_change_24h < 0 ? (<span class="orange">{item.price_change_24h.toFixed(2)}%</span>) : (<span class="blue">+{item.price_change_24h.toFixed(2)} %</span>)} change in 24hrs</div>
              <div class="chartKey">
                <p class="key1"><i class="fas fa-circle"></i>Popularity</p>
                <p class="key2"><i class="fas fa-circle"></i>Price</p>
              </div>
            </div>
            <div class="chart"><Chart datablock={item.sparkline_in_7d.price} poparray={array} /></div>
          </div>
          <div class="summaryBoard">
            <h3>Your Store Summary<p>Latest Orders for Today</p>
            </h3>
            <div class="summaryCharts">
              <div class="charts1"></div>
              <div class="charts2"></div>
              <div class="charts3"></div>
            </div>
          </div>
        </div>
      )}

    </div>

  )
}

export default Col2
