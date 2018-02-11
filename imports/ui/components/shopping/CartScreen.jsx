import React, {Component} from 'react';
import Button from '/imports/ui/components/reusable/Button.jsx';
export default class CartScreen extends Component {

  render() {
    let {cartList} = this.props
    let total = 0;
    let self = this;
    let showCartList = cartList.map(function(item, i){
      total += item.price;
      return(
        <div className="row pl-15 py-15" key={i}>
          <img src={"images/"+item.filename} width="75" height="75" className="pull-left cart-image"/>
          <span className="pull-right delete-icon-wrapper" onClick={() => {self.props.removeItem(item.name)}}><i className="fa fa-times delete-icon"></i></span>
          <div className="pull-right drak-brown">
            <p className="cart-name">{item.name}</p>
            <p className="cart-price pull-right">${(item.price/100).toFixed(2)}</p>
          </div>
        </div>
      )
    })

    return(
      <div className="cart-cover table-display py-40 mt-50">
        <div className="table-cell">
          <div className="cart-detail-container">
              <h1 className="text-center bold drak-brown">Your Cart</h1>
              {cartList.length != 0 ?
                showCartList
                :
                <div className="row text-center py-15">
                  <h2 className="drak-brown">Nothing in your cart,<br></br>start shopping.</h2>
                </div>}
              <hr className="drak-brown"></hr>
              <div className="row px-15 drak-brown">
                <h1 className="pull-left">Total</h1>
                <h1 className="pull-right">${(total/100).toFixed(2)}</h1>
              </div>
              <Button text="Back" className="center-block drak-brown" onClick={this.props.backToShopping}/>
          </div>
        </div>
      </div>
    );
  }
}
