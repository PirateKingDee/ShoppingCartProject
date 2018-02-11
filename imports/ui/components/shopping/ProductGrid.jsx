import React, {Component} from 'react';
import Button from '/imports/ui/components/reusable/Button.jsx';
export default class ProductGrid extends Component {

  addToCart(filename, price, name){
    this.props.addToCart(filename, price, name)
  }

  render() {
    let {filename, name, price} = this.props
    return(
      <div className="col-md-3 py-15">
        <div className="product-container drak-brown">
          <img src={"images/"+filename} className="img-responsive" width="100%"/>
          <p className="product-name">{name}</p>
          <p className="product-price">${(price/100).toFixed(2)}</p>
          <Button text="Add to cart" className="drak-brown" onClick={() => {this.addToCart(filename, price, name)}}/>
        </div>
      </div>


    )

  }
}
