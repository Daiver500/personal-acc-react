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
                <h2 className="user__list-header">Персональные данные:</h2>
                <li className="user__item"><span className="user__text">Аватар:</span>
                   <img className="user__img" src={avatar} alt="аватар" width="53" height="53"></img>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Идентификатор: {id}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"> <span className="user__text">Имя: {first_name}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Фамилия: {last_name}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Никнейм: {username}</span></p>
               </li>
               <li className="user__item">
                 <a className="contacts__link contacts__link-mail" href="mailto:puteshestviemechta@gmail.ru">Email: {email}</a>
               </li> 
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Пол: {gender}</span></p>
               </li>
               <li className="user__item">
               <a className="contacts__link contacts__link-tel" href="tel:+74998468446">Телефон: {phone_number}</a>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Страховой номер: {social_insurance_number}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Дата рождения: {date_of_birth}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Должность: {title}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Ключевые навыки: {key_skill}</span></p>
               </li>
            </ul>
        )
    }
}

export default UserPersonalInfo