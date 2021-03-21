import React, { useState } from 'react';
import './counter.css';

function change(event){
    console.log(event.target);
    console.log("hit");
}

function Counter(){
    let [value,setValue] = useState(0);
    
    function change(event){
        if(event.target.id === 'add'){
            value+=1;
            setValue(value);
            console.log("hit add");
        }
        else if(event.target.id === 'sub' && value === 0){
            setValue(0);
            console.log("hit sub");
        }else{
            value-=1;
            setValue(value);
        }
    }


    return(
        <>
        <div className="card">
        <h1 className="counter">COUNTER</h1>
            <h1 className="show-data">{value}</h1>
            <div ><i className="fas fa-plus btn btn-add" id="add" onClick={change}></i></div>
            <div><i className="fas fa-minus btn btn-sub" id="sub" onClick={change} ></i></div>
        </div>
        </>
    )
}


export default Counter;