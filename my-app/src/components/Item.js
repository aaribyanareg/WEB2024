import React, { Component } from 'react';
import LikeButton from './LikeButton';

export class Item extends Component {
  render() {
    const { item } = this.props; 

    return (
      <div className='item'>
        <img src={"./img/" + item.img} alt={item.title}></img> 
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
