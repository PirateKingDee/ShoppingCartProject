import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Header extends Component {

  constructor(prop){
    super(prop);
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(){
    this.props.cartToggle();
  }

  render() {
    return(
      <div className="col-xs-12">
        <nav className="navbar navbar-fixed-top">
          {/* START LEFT */}
           <ul className="nav navbar-nav">
             <li><Link to="/" className="logo"><span style={{margin:"0 5px", fontSize:"24px"}}><i className="fa fa-shopping-cart"></i></span>Cart.ly</Link></li>
             <li><Link to="/" className="active" id="shop-header">Shop</Link></li>
           </ul>
           {/* END LEFT */}

           {/* START RIGHT */}
           <ul className="nav navbar-nav navbar-right" style={{marginRight:"0"}}>
             <li onClick={this.handleCart} className="pt-15 cursor">Your Cart<span className="cart-number">{this.props.cartNumber}</span></li>
           </ul>
           {/* END RIGHT */}

       </nav>
      </div>

    )

  }
}
