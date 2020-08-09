import React from 'react';

class Add extends React.Component{

     state={
        name:'',
        age:''
     }

    change=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    add=(e)=>{
        e.preventDefault();
        if(e.target.name.value === ''){
            return false;
        }
        else{
            const insert = this.props.attr;
            insert(this.state);
            this.setState({
                name:'',
                age:''
            });
        }
            }

    render(){
        return (
            <form onSubmit={this.add}>
                <input type="text"  id="name" placeholder="Enter Your Name" onChange={this.change} value={this.state.name}/>
                <input type="number"  id="age" placeholder="Enter Your Age" onChange={this.change} value={this.state.age}/>
                <input type="submit" value="Add user"/>
            </form>
          );
    } 
  }
  
export default Add;