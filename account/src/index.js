import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProducItem from "./components/product/product-item"
import UserPersonalInfo from "./components/user-item/user-personal-info";
import UserAddressInfo from "./components/user-item/user-address-info";
import UserBankInfo from "./components/user-item/user-bank-info";

ReactDOM.render(
  <React.StrictMode>
    
      <section className="header">
        <Header></Header>
      </section>
      <section className="user">
        <div className="user__inner container">
          <UserPersonalInfo></UserPersonalInfo>
          <UserAddressInfo></UserAddressInfo>
          <UserBankInfo></UserBankInfo>
        </div>
      </section>
      <section className="product">
        <div className="product__inner container">
          <ProducItem></ProducItem>
        </div>
      </section>
      <section className="footer">
        <Footer></Footer>
      </section>
   
  </React.StrictMode>,
  document.getElementById('root')
  
);
