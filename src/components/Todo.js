import React from 'react';

const Todo = (props)=>{

    const   deleteuser=props.delete,
            allusers=props.attr,
            length=allusers.length;

    const listusers= length !== 0 ? (allusers.map((user)=>{
        return(
            <div key={user.id}>
                <span className='name'>{user.name}</span>
                <span className='age'>{user.age}</span>
                <span className='action icon' onClick={()=>{deleteuser(user.id)}}>&times;</span>
            </div>
        )
    }) 
    ) :
    (
        <p>there is no item to show</p>
    )

    return(
        <div className="listitems">
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {listusers}
        </div>
    )
}

export default Todo;