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
        { id: 1, title: 'Product1', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc1', price: '20$' },
        { id: 2, title: 'Product2', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc2', price: '30$' },
        { id: 3, title: 'Product3', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc3', price: '40$' },
        { id: 4, title: 'Product4', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc4', price: '50$' },
        { id: 5, title: 'Product5', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc5', price: '50$' },
        { id: 6, title: 'Product6', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc6', price: '50$' },
        { id: 7, title: 'Product7', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc7', price: '50$' },
        { id: 8, title: 'Product8', img: 'https://img.freepik.com/premium-vector/computer-dekstop-isolated-white_9462-64.jpg', desc: 'Desc8', price: '50$' }
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