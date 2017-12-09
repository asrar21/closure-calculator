






import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(){
		super();
		this.state={
			todos:[],
			name:[],
			price:[],
			image : ""
			
			
		}
		this.todoInput="",
		this.name="",
		this.price="",
		
    this.fileHandler = this.fileHandler.bind(this);
  
    }

    
	addTodo(){
		let todoValue=this.todoInput.value;
		
		let newTodos=this.state.todos
		newTodos.push(todoValue)
		
		this.setState({
			todos: newTodos
		})
		
		this.todoInput.value=""
		
		this.todoInput.focus()
		
	}
	addname()
	{
		let Pname=this.name.value;
		
		let newname=this.state.name
		newname.push(Pname)
		
		this.setState({
			name: newname
		})
		
		this.name.value=""
		
		this.name.focus()
		
	}
	addprice(){
		let Pprice=this.price.value;
		
		let newprice=this.state.price
		newprice.push(Pprice)
		
		this.setState({
			price: newprice
		})
		
		this.price.value=""
		
		this.price.focus()
		
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
  render() {
    return (
      <div>
	  <h1>PRODUCT ID</h1>
	  <p>Product ID Count: {this.state.todos.length}</p>
	  <ul>
	  {this.state.todos.map((todo,index)=>{
	  return(<li key={index}>{todo}</li>)
		  
	  })}
	  </ul>
	  ID:
	      <br/> <input type="text" placeholder="Enter Product id" ref={(input)=>this.todoInput=input}/>
	  <br/>
	  <button onClick={this.addTodo.bind(this)}>Add</button>
	  <br/>
	 
	  <h1>NAME OF PRODUCT</h1>
	  <p>Product name  Count: {this.state.name.length}</p>
	  <ul>
	  {this.state.name.map((name,index)=>{
	  return(<li key={index}>{name}</li>)
		  
	  })}
	  </ul>
	 
	  PRODUCT NAME:
	   <br/><input type="text" placeholder="Enter Product name" ref={(input)=>this.name=input}/>
	   <br/>
	   <button onClick={this.addname.bind(this)}>Add</button>
	   <br/>
	   
	 
	  <h1>PRODUCT PRICE</h1>
	  <p>Product Price Count: {this.state.price.length}</p>
	  <ul>
	  {this.state.price.map((price,index)=>{
	  return(<li key={index}>{price}</li>)
		  
	  })}
	  </ul>
	  
	   PRODUCT PRICE:
	    <br/><input type="text" placeholder="Enter Product Price" ref={(input)=>this.price=input}/>
		<br/>
	  <button onClick={this.addprice.bind(this)}>Add</button>
	  <br/>
	  <h1>PRODUCT IMAGE</h1>
	  <input type="file" onChange={this.fileHandler} />
        

        <img src={this.state.image} />
      
	  </div>
    );
  }
}

export default App;


