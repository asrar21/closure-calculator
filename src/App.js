import React from 'react';
import './App.css';

import Header from './header/Header';
import ProductItem from './product-item/ProductItem';


class App extends React.Component {
  
  render() {
    let obj = {
      a:10,
      b: 20
    }
    
    
    return (
      <div className="App">

        <Header/>
		<product2/>
	  <product3/>
        
		
       
        
      </div>
      
    );
  }
}

export default App;