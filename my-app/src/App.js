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
        { id: 1, title: 'Product A', img: 'magaz.jpg', desc: 'Description of Product A', price: '20 USD' },
        { id: 2, title: 'Product B', img: 'Shrek.png', desc: 'Description of Product B', price: '30 USD' },
        { id: 3, title: 'Product C', img: 'product_c.jpg', desc: 'Description of Product C', price: '25 USD' },
        { id: 4, title: 'Product D', img: 'product_d.jpg', desc: 'Description of Product D', price: '40 USD' }
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