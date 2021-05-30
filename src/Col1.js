import React from 'react'
import './components/Col1.css';


const Col1 = () => {
    return (
        <div class="col-1">
        <div class="logo">
          <div class="logoPic"><i class="fab fa-bitcoin"></i></div>
          <div class="profileName">LogoName</div>
        </div>
        <nav>
            <li><a href="#"><i class="fas fa-th-large"></i>Dashboard</a></li>
            <li><a href="#"><i class="fas fa-chart-bar"></i>Charts</a></li>
            <li><a href="#"><i class="fas fa-clipboard-list"></i>Catagories</a></li>
            <li><a href="#"><i class="fas fa-box"></i>Products</a></li>
            <li><a href="#"><i class="fas fa-money-check-alt"></i>Money</a></li>
            <li><a href="#"><i class="fas fa-receipt"></i>Transactions</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
            <li><a href="#"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
        </nav>
        <div class="help">
          <li><a href=""><i class="fas fa-question-circle"></i>Help Center</a></li>
        </div>
      </div>
    )
}

export default Col1
