import './App.css'
import React from 'react'
import Cards from './components/Cards'
import img1 from './components/img1.jpg'
import img2 from './components/img2.jpg'
import img3 from './components/img3.jpg'
import img4 from './components/img4.jpg'
var cards = [
  {
    mg:img1,
    price:'RS:500',
    prg:'Monopoly Deal Card Game New Edition',
    btn:'order now',
    
  },
  {
    mg:img2,
    price:'RS:50',
    prg:'Magic Tricks for Kids - Easy Magic Toys Tricks - Best Card Magic Books',
    btn:'order now',
  },
  {
    mg:img3,
    price:'RS:625',
    prg:'Exploding Kitten Card Game Series For Kids, Strategic Families',
    btn:'order now',
    
  },
  {
    mg:img4,
    price:'RS:375',
    prg:'Original Uno Card Games - ONo Card Game - Multicolor ',
    btn:'order now',
    
  },  
  
] 
function App() {
  return (
    <>
    <div className='cnt'>
   
    {cards.map((item)=>{
      return(
         <Cards data={item}></Cards>
      )
    })}
   
   </div>

    </>
  )
}

export default App