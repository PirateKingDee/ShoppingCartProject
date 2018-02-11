import React, {Component} from 'react';
import Header from '/imports/ui/components/shopping/Header.jsx';
import ProductGrid from '/imports/ui/components/shopping/ProductGrid.jsx';
import CartScreen from '/imports/ui/components/shopping/CartScreen.jsx';
import Title from '/imports/ui/components/reusable/Title.jsx';

let products = [
  {
    "filename": "618328744.png",
    "price": 5127,
    "name": "Mens Fashion Shirts"
  },
  {
    "filename": "618842634.png",
    "price": 5704,
    "name": "Casual jacket"
  },
  {
    "filename": "619521178.png",
    "price": 397,
    "name": "Mens work shirt"
  },
  {
    "filename": "623270836.png",
    "price": 3237,
    "name": "Running Shoes"
  },
  {
    "filename": "638571516.png",
    "price": 5774,
    "name": "Leather lacket"
  },
  {
    "filename": "649597850.png",
    "price": 8745,
    "name": "Snow Boots"
  },
  {
    "filename": "656678076.png",
    "price": 9012,
    "name": "Mens Fashion Shirts"
  },
  {
    "filename": "666666252.png",
    "price": 8883,
    "name": "Womens white sweater"
  },
  {
    "filename": "666666466.png",
    "price": 7767,
    "name": "Womens red jacket"
  },
  {
    "filename": "675606742.png",
    "price": 7057,
    "name": "Pastel everyday wear"
  },
  {
    "filename": "806813490.png",
    "price": 2246,
    "name": "Longsleeve workout shirt"
  }
];

export default class ShoppingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartNumber: 0,
      cartList:[],
      showCart: false
    }
    this.cartToggle = this.cartToggle.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.backToShopping = this.backToShopping.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.decrementCartNumber = this.decrementCartNumber.bind(this);
    this.incrementCartNumber = this.incrementCartNumber.bind(this);
  }

  /**
  HANDLE WHEN 'YOUR CART' IS BEING CLICK
  **/
  cartToggle(){
    if(this.state.showCart){
      this.setState({showCart: false});
      $('.blur').css({'filter':"none"});
    }
    else{
      this.setState({showCart: true});
      $('.blur').css({'filter':'blur(10px)'});
    }
  }

  /**
  EXIT CART SCREEN WHEN BACK BUTTON IS CLICKED
  **/
  backToShopping(){
    this.setState({showCart:false});
    $('.blur').css({'filter':"none"});
  }

  /**
  FUNCTION TO DECREMENT OR INCREMENT CART NUMBER, FOR REUSABLE PURPOSE
  **/
  decrementCartNumber(){
    this.setState({cartNumber: this.state.cartNumber-1});
  }

  incrementCartNumber(){
    this.setState({cartNumber: this.state.cartNumber+1});
  }

  /**
  FUNCTION TO REMOVE ITEM FROM CART
  **/
  removeItem(name){
    let cartList = this.state.cartList;

    for(i = 0; i < cartList.length; i++){
      if(cartList[i].name === name){
        cartList.splice(i, 1);
        break;
      }
    }
    this.setState({cartList: cartList});
    this.decrementCartNumber();
  }

  /**
  FUNCTION TO ADD ITEM TO CART
  **/
  addToCart(filename, price, name){
    let cartList = this.state.cartList;
    let selectedProduct = {
      filename: filename,
      price: price,
      name: name
    }
    cartList.push(selectedProduct);
    this.setState({cartList: cartList});
    this.incrementCartNumber();
  }

  render() {
    let self = this;
    let productList = products.map(function(product, i){
      return (
        <ProductGrid
          filename={product.filename}
          name={product.name}
          price={product.price}
          addToCart={(filename, price, name) => {self.addToCart(filename, price, name)}}
          key={i}
        />
      )
    })
    return(
      <div>
        <Header cartToggle={this.cartToggle} cartNumber={this.state.cartNumber}/>
        <div style={{marginTop:"50px"}}>
          <div className="product-list">
            <Title title="Shop our featured collection" />

            <div className="col-sm-12 text-center blur">
              {productList}
            </div>
          </div>
          {this.state.showCart ?
            <CartScreen
              cartList={this.state.cartList}
              backToShopping={this.backToShopping}
              removeItem={this.removeItem}/>
            : null}
        </div>
      </div>


    )

  }
}
