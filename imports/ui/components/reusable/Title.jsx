import React, {Component} from 'react';
export default class Title extends Component {

  render() {
    let { title } = this.props;
    return(
      <div className="col-sm-12 py-15 pt-30">
        <div className="col-sm-12">
          <span className="shop-title drak-brown">{title}</span>
        </div>
      </div>

    )

  }
}
