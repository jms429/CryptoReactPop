import React from 'react'
import './components/Col3.css';

const Col3 = () => {
    return (
<div className="col-3">
  <div className="user">
    <div id="notifications">
      <a href="#">
        <i className="far fa-bell">
          <i className="fas fa-circle" />
        </i>
      </a>
      <ul className="dropdown">
        <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>Today 14:03</p>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>Yesterday 11:41</p>
        </li>            <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>12/23/21 5:13</p>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>12/4/21 22:53</p>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>10/23/21 6:33</p>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user" /> lorem ipsum</a>
          <p>2/13/20 1:22</p>
        </li>
      </ul>
    </div>
    <div id="user">
    <img src="https://picsum.photos/25?Random=6" alt="" />
      <ul className="dropdown">
        <li><a href="#">Profile</a></li>
        <li><a href="#">Sign-Out <i className="fas fa-sign-out-alt" /></a></li>
      </ul>
    </div>
  </div>
  <div className="recent">
    <h5>Recent Transactions</h5>
    <ul>
      <li>
        <div className="transactPhoto"><img src="https://picsum.photos/25?Random=5" alt="" /></div>
        <div className="transactName">Jesse Pinkmin <p>2 Minutes Ago</p></div>
        <div className="transactAmt">+$74.00</div>
      </li>
      <li>
        <div className="transactPhoto"><img src="https://picsum.photos/25?Random=4" alt="" /></div>
        <div className="transactName">Antony Starr <p>2 Minutes Ago</p></div>
        <div className="transactAmt negative">-$72.00</div>
      </li>
      <li>
        <div className="transactPhoto"><img src="https://picsum.photos/25?Random=3" alt="" /></div>
        <div className="transactName">Walter White <p>2 Minutes Ago</p></div>
        <div className="transactAmt">+$74.00</div>
      </li>
      <li>
        <div className="transactPhoto"><img src="https://picsum.photos/25?Random=2" alt="" /></div>
        <div className="transactName">Bessie Cooper <p>2 Minutes Ago</p></div>
        <div className="transactAmt">+$80.00</div>
      </li>
      <li>
        <div className="transactPhoto"><img src="https://picsum.photos/25?Random=1" alt="" /></div>
        <div className="transactName">Floyd Miles <p>2 Minutes Ago</p></div>
        <div className="transactAmt">+$42.00</div>
      </li>
    </ul>
    <div className="pagination">
      <div />
      <div className="active" />
      <div />
    </div>
    <div className="top">
      <h5>Top Customers</h5>
      <ul>
        <li>
          <div className="transactPhoto"><h2>LA</h2></div>
          <div className="transactName">Leslie Alexander <p>Los Angeles, CA</p></div>
        </li>
        <li>
          <div className="transactPhoto"><h2>LV</h2></div>
          <div className="transactName">Mike Taylor <p>Las Vegas, NV</p></div>
        </li>
        <li>
          <div className="transactPhoto"><h2>CI</h2></div>
          <div className="transactName">Diane Russell <p>Cinncenati, OH</p></div>
        </li>
      </ul>
    </div>
  </div>
</div>

    )
}

export default Col3
