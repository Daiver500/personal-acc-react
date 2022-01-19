import { Component } from "react"
import "./user.css"
import GetData from "../services/server";

class UserPersonalInfo extends Component {
    constructor(props) {
      super(props);
      this.updateUser();
    }

   state = {      
      id: null,    
      first_name: null,
      last_name: null,     
      username: null,            
      email: null,
      avatar: null,
      gender: null,
      phone_number: null,
      social_insurance_number: null,
      date_of_birth: null,
      employment: {
        title: null,
        key_skill: null
      }
    }

    getData = new GetData();

    updateUser = () => {
      this.getData.getCharacterInformation().then(res => {
          this.setState ({
            id: res.id,    
            first_name: res.first_name,
            last_name: res.last_name,     
            username: res.username,            
            email: res.email,
            avatar: res.avatar,
            gender: res.gender,
            phone_number: res.phone_number,
            social_insurance_number: res.social_insurance_number,
            date_of_birth: res.date_of_birth,
            employment: {
              title: res.employment.title,
              key_skill: res.employment.key_skill
            }
          })
      });
    }
    
    render() {
        const {id, first_name, last_name, username, email, avatar, gender, phone_number, social_insurance_number, date_of_birth} = this.state;
        const {title, key_skill} = this.state.employment;

        return (
            <ul className="user__list">
                <h2>Персональные данные</h2>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">{id}</span></p>
               </li>
               <li>
                   <p>{first_name}</p>
               </li>
               <li>
                   <p>{last_name}</p>
               </li>
               <li>
                   <p>{username}</p>
               </li>
               <li>
                   <p>{email}</p>
               </li>
               <li>
                   <p>{avatar}</p>
               </li>
               <li>
                   <p>{gender}</p>
               </li>
               <li>
                   <p>{phone_number}</p>
               </li>
               <li>
                   <p>{social_insurance_number}</p>
               </li>
               <li>
                   <p>{date_of_birth}</p>
               </li>
               <li>
                   <p>{title}</p>
                   <p>{key_skill}</p>
               </li>
            </ul>
        )
    }
}

export default UserPersonalInfo