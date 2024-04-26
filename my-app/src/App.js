// App.js
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'Product A', img: 'https://zetzet.ru/wa-data/public/shop/products/08/83/1818308/images/1821811/1821811.750.png', desc: 'Description of Product A', price: '20 USD' },
        { id: 2, title: 'Product B', img: 'https://zetzet.ru/wa-data/public/shop/products/08/83/1818308/images/1821811/1821811.750.png', desc: 'Description of Product B', price: '30 USD' },
        { id: 3, title: 'Product C', img: 'https://zetzet.ru/wa-data/public/shop/products/08/83/1818308/images/1821811/1821811.750.png', desc: 'Description of Product C', price: '25 USD' },
        { id: 4, title: 'Product D', img: 'https://zetzet.ru/wa-data/public/shop/products/08/83/1818308/images/1821811/1821811.750.png', desc: 'Description of Product D', price: '40 USD' }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Items items={this.state.items} />
          
        </div>
        <Footer />
      </>
    );
  }
}

export default App;