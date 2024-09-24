import React from 'react'
import './css/TodoItems.css'
import Tick from './Assets/Tick.png';
import nonTick from './Assets/nonTick.png';
import cross from './Assets/cross.png';

const TodoItems = ({no,display,text}) => {
  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <img src={nonTick} alt="" style={{ width: '20px', height: '20px' }}/>
        <img src={Tick} alt="" style={{ width: '20px', height: '20px' }}/>
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoItems-cross' src={cross} alt="" style={{ width: '20px', height: '20px' }}/>
    </div>
  )
}

export default TodoItems
