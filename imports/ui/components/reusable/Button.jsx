import React, {Component} from 'react';
export default class Button extends Component {

  render() {
    let { text, onClick, className, style } = this.props;
    let btnClassName = "custom-btn ";
    if(className){
      btnClassName += className;
    }
    return(
      <button onClick={this.props.onClick} className={btnClassName} style={style}>{text}</button>
    )

  }
}
