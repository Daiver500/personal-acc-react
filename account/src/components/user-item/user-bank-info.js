import { Component } from "react"
import "./user.css"
import GetData from "../services/server";

class UserBankInfo extends Component {
    constructor(props) {
      super(props);
      this.updateUser();
    }

   state = {      
      credit_card: {
        cc_number: null        
      },
      subscription:  {
        plan: null,
        status: null,
        payment_method: null,
        term: null
      }
    }

    getData = new GetData();

    updateUser = () => {
      this.getData.getCharacterInformation().then(res => {
          this.setState ({
            credit_card: {
              cc_number: res.credit_card.cc_number        
            },
            subscription:  {
              plan: res.subscription.plan,
              status: res.subscription.status,
              payment_method: res.subscription.payment_method,
              term: res.subscription.term
            }
          })
      });
    }
    
    render() {
        const {cc_number} = this.state.credit_card;
        const {plan, status, payment_method, term} = this.state.subscription;

        return (
            <ul className="user__list">
                <h2 className="user__list-header">Банковские данные:</h2>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Номер карты: {cc_number}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">План: {plan}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Статус: {status}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Оплата: {payment_method}</span></p>
               </li>
               <li className="user__item">
                   <p className="user__title"><span className="user__text">Условия: {term}</span></p>
               </li>
            </ul>
        )
    }
}

export default UserBankInfo