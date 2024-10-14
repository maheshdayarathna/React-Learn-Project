import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import './Home.css'
import { useState } from 'react'

export default function Home() {

const [count, setCount] = useState(0);

//let count = 0;

const increment = () =>{
  //count +=1;
  setCount(count+1);
};
const decrement = () =>{
  //count -=1;
  setCount(count-1);
};

  return (
    <div>
       <NavBar button ="Home"/>
       <NavBar button ="Cart"/>
     
       <Link to={"/Items"}>Items </Link>

     <span className='title'>My counter</span>
     <p className='sub title'>The count is {count}</p>
     <button onClick={decrement} className='bt'>-</button>
     <button onClick={increment} className='bt'>+</button>

    </div>
  )
}
