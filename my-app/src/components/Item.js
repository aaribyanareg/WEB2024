import React, { Component } from 'react';
import LikeButton from './LikeButton';

class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className='item'>
        <img src={item.img} alt={item.title}></img>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b className="price">{item.price}</b>
        <LikeButton productId={item.id} />
        <div className='buy-button'>Buy</div>
      </div>
    );
  }
}

export default Item;

// Alternative version of the Item component
class AlternativeItem extends Component {
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
    );
  }
}

export { AlternativeItem };
