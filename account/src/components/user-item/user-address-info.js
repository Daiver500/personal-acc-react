import { Component } from "react"
import "./user.css"
import GetData from "../services/server";

class UserAddressInfo extends Component {
    constructor(props) {
      super(props);
      this.updateUser();
    }

   state = {      
      address: {
        city: null,
        street_name: null,
        street_address: null,
        zip_code: null,
        state: null,
        country: null,
      }
    }

    getData = new GetData();

    updateUser = () => {
      this.getData.getCharacterInformation().then(res => {
          this.setState ({
            address: {
              city: res.address.city,
              street_name: res.address.street_name,
              street_address: res.address.street_address,
              zip_code: res.address.zip_code,
              state: res.address.state,
              country: res.address.country,
            }
          })
      });
    }
    
    render() {
        const {city, street_name, street_address, zip_code, state, country} = this.state.address;

        return (
            <ul className="user__list">
                <h2 className="user__list-header">Адрес:</h2>
                <li className="user__item">
                   <p className="user__title"><span className="user__text">Город: {city}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Улица: {street_name}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Адрес:{street_address}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Индекс: {zip_code}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Штат: {state}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Страна: {country}</span></p>
               </li>
            </ul>
        )
    }
}

export default UserAddressInfo