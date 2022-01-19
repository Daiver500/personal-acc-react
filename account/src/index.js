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
    <main>
      <Header></Header>
      <UserPersonalInfo></UserPersonalInfo>
      <UserAddressInfo></UserAddressInfo>
      <UserBankInfo></UserBankInfo>
      <ProducItem></ProducItem>
      <Footer></Footer>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);
