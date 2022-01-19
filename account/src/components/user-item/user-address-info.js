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
                <h2>Адрес</h2>
                <li className="user__item">
                   <p className="user__title"><span className="user__text">{city}</span></p>
               </li>
               <li>
                   <p>{street_name}</p>
               </li>
               <li>
                   <p>{street_address}</p>
               </li>
               <li>
                   <p>{zip_code}</p>
               </li>
               <li>
                   <p>{state}</p>
               </li>
               <li>
                   <p>{country}</p>
               </li>
            </ul>
        )
    }
}

export default UserAddressInfo