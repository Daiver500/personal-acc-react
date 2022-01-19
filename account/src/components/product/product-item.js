import { Component } from "react"
import "./product-item.css"
import GetData from "../services/server";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.updateProduct();
  }

 state = {      
    id: null,    
    brand: null,
    name: null,     
    style: null,            
    hop: null,
    yeast: null,
    malts: null,
    ibu: null,
    alcohol: null,
    blg: null,
  }

  getData = new GetData();

  updateProduct = () => {
    this.getData.getProductInformation().then(res => {
        this.setState ({
          id: res.id,    
          brand: res.brand,
          name: res.name,     
          style: res.style,            
          hop: res.hop,
          yeast: res.yeast,
          malts: res.malts,
          ibu: res.ibu,
          alcohol: res.alcohol,
          blg: res.blg,
        })
    });
  }

  changeProduct = () => {
    this.updateProduct() 
  }
  
  render() {
      const {id, brand, name, style, hop, yeast, malts, ibu, alcohol, blg} = this.state;
      return (
          <div className="product__list-wrapper">
          <h2 className="product__list-header">Пиво</h2>
          <ul className="product__list">
            
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Идентитфикатор: {id}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Бренд: {brand}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Наименование: {name}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Стиль: {style}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Нор: {hop}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Дрожжи: {yeast}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Солод: {malts}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Ибу: {ibu}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Алкоголь: {alcohol}</span></p>
             </li>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">Блг: {blg}</span></p>
             </li>
             
          </ul>
          <button className="product__button button" onClick={this.changeProduct}>Нажми меня</button>
          </div>
          
      )
  }
}

export default ProductItem
