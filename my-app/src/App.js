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
        { id: 1, title: 'Tyson', img: 'Tyson.jpg', desc: 'Building', price: '2 USD' },
        { id: 2, title: 'Dakimakura', img: 'Shrek.png', desc: 'Shrek', price: '30 USD' },
        { id: 3, title: 'Molot', img: 'molot.jpg', desc: 'Thor', price: '40 USD' },
        { id: 4, title: 'Loreal', img: 'kraska.jpg', desc: 'Hair dye', price: '50 USD' },
        { id: 5, title: 'Loreal', img: 'kraska.jpg', desc: 'Hair dye', price: '50 USD' },
        { id: 6, title: 'Loreal', img: 'kraska.jpg', desc: 'Hair dye', price: '50 USD' },
        { id: 7, title: 'Loreal', img: 'kraska.jpg', desc: 'Hair dye', price: '50 USD' },
        { id: 8, title: 'Loreal', img: 'kraska.jpg', desc: 'Hair dye', price: '50 USD' }
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