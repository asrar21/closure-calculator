import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
	constructor(){
		super();
		this.state={
			
			image : ""
			
			
		}
		
    this.fileHandler = this.fileHandler.bind(this);
  
    }
	fileHandler(e){
  console.log(e.target.files[0]);

  var fileReader = new FileReader();
  
    fileReader.onload = (e)=>{
      var base64 = e.target.result;
      console.log(base64);

      this.setState({image : base64})

    };
  
    fileReader.readAsDataURL(e.target.files[0]);
}
he(){
	
}
  render() {
    return (
      <div className="Header">
        <h1>PRODUCT IMAGE</h1>
		   <Router>
        <div>
          <ul>
            <li><Link to='/'> <img src={require('../images/download (1).jpg')} height ="100" onClick={this.he.bind(this)}/>p1</Link></li>
            <li><Link to='/page2'> <img src={require('../images/download (2).jpg')} height ="100" onClick={this.he.bind(this)}/>p2</Link></li>
            <li><Link to='/page3'> <img src={require('../images/download (3).jpg')} height ="100" onClick={this.he.bind(this)}/>p3</Link></li>
            <li><Link to='/page4'> <img src={require('../images/download.jpg')} height ="100" onClick={this.he.bind(this)}/>p4</Link></li>
          </ul>
        <Route exact path='/' component={Page1} />  
        <Route exact path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
		<Route path='/page4' component={Page4} />
        </div>
      </Router>
      </div>
	  
        

  
      
        
      
    );
  }
}
class Page1 extends React.Component {
  render() {
    return(
      <div>
	  
	  
	  <h1> product details</h1>
	  <li>
      
       id:112

	  
	  </li>
	  <li>
	         Name:port1
       </li>
	   <li>
	          
       price:4,500
	   </li>
      
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return(
      <div>
      this is page 2
      </div>
    )
  }
}

class Page3 extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.match);

  }
  render() {
    return(
      <div>
       <h1> product details</h1>
	  <li>
      
       id:123

	  
	  </li>
	  <li>
	         Name:port2
       </li>
	   <li>
	          
       price:5,500
	   </li>
      </div>
    )
  }
}
class Page4 extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.match);

  }
  render() {
    return(
      <div>
       <h1> product details</h1>
	  <li>
      
       id:121

	  
	  </li>
	  <li>
	         Name:port3
       </li>
	   <li>
	          
       price:6,500
	   </li>
      </div>
    )
  }
}


export default Header;
