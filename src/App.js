import React, { Component } from 'react';
import './App.css'
import Customize from './Customize/Customize';
import Summary from './Summary/Summary';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import Header from './Header/Header';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {

  state = {
    selected: {
      "Processor": {
        product: "17th Generation Intel Core HB (7 Core with donut spare)",
        price: 700
      },
      "Operating System": {
        product: "Ubuntu Linux 16.04",
        price: 200
      },
      "Video Card": {
        product: "Toyota Corolla 1.5v",
        price: 1150.98
      },
      "Display": {
        product: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        price: 1500
      }
    }
  };

  updateSelection = (feature, newValue) => {
    const selected =  Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].price, 0
    );

    return (
      <div className = "App" >
        <header>
          <Header />
        </header>
        <main>
          <form className="main__form">
            <Customize 
              store={this.props.STORE} 
              selected={this.state.selected}
              updateSelection={this.updateSelection}
              USCurrencyFormat={USCurrencyFormat}
            />
          </form>
          <section className="main__summary">
            <Summary 
              selected={this.state.selected}
              USCurrencyFormat={USCurrencyFormat}
              total={total}
            />
          </section>
        </main>
      </div>
    )
  }
}

  export default App;