import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
    <div className='item'>
  <img src={this.props.item.img} alt={this.props.item.title} />
  <h2>{this.props.item.title}</h2>
  <p>{this.props.item.desc}</p>
  <b className="price">{this.props.item.price}</b>
  <div className='add-to-favorite'>+</div>
  <div className='buy-button'>Купить</div>
</div>
    )
  }
}

export default Item;
