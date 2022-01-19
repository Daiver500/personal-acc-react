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
  
  render() {
      const {id, brand, name, style, hop, yeast, malts, ibu, alcohol, blg} = this.state;
      return (
          <ul className="product__list">
              <h2>Пиво</h2>
             <li className="product__item">
                 <p className="product__title"><span className="product__text">{id}</span></p>
             </li>
             <li>
                 <p>{brand}</p>
             </li>
             <li>
                 <p>{name}</p>
             </li>
             <li>
                 <p>{style}</p>
             </li>
             <li>
                 <p>{hop}</p>
             </li>
             <li>
                 <p>{yeast}</p>
             </li>
             <li>
                 <p>{malts}</p>
             </li>
             <li>
                 <p>{ibu}</p>
             </li>
             <li>
                 <p>{alcohol}</p>
             </li>
             <li>
                 <p>{blg}</p>
             </li>
          </ul>
      )
  }
}

export default ProductItem
