import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
  state = {
    visibleItems: 3,
  };

  loadMore = () => {
    this.setState((prevState) => ({
      visibleItems: prevState.visibleItems + 3,
    }));
  };

  render() {
    const { items } = this.props;
    const { visibleItems } = this.state;

    return (
      <main>
        {items.slice(0, visibleItems).map(el => (
          <Item key={el.id} item={el} />
        ))}
        {visibleItems < items.length && (
          <button onClick={this.loadMore} className="load-more-button">
            Показать еще
          </button>
        )}
      </main>
    );
  }
}

export default Items;
