import React, { useEffect, useState } from 'react'

const Api = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum-classic&order=market_cap_desc&per_page=100&page=1&sparkline=true"
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div>
      {data?.map((item) => 
        <ul>
          <li>{item.id}</li>
        </ul>
      )}
    </div>
  )
}

export default Api;
