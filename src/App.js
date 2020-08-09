import React from 'react';
import Todo from './components/Todo';
import Add from './components/Add';

class  App extends React.Component{

  state={
    users:[
      {id:1,name:'abdo',age:21},
      {id:2,name:'islam',age:22},
      {id:3,name:'mohamed',age:23}
    ]
  }

  deleteuser=(id)=>{
    const allusers=this.state.users.filter((user)=>{
      return user.id !== id;
    });
    this.setState({
      users:allusers
    });
  }
  
  adduser=(user)=>{
    user.id=Math.random();
    const allsecondusers=this.state.users;
    allsecondusers.push(user);
    this.setState({
      users:allsecondusers
    });
  }

  render(){

    return (
      <section className="App">
        <div className="container">
          <h1 className='text-center'>Todo List</h1>
          <Todo attr={this.state.users} delete={this.deleteuser}/>
          <Add attr={this.adduser}/>
        </div>
      </section>
    );
  }
}

export default App;