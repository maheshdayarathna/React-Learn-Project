import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import './Home.css'
import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

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


     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    
  )
}
