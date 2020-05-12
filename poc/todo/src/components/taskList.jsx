import React, { Component } from 'react';
const TaskList = (props) => {
 const  {taskList,handleDeletetoTLC}=props;
  return ( 
    <React.Fragment>
<ul className="tasks">
  {taskList.map((elem)=>{
  // add eventlistener=> function => that they will call when that occur 
  return <li key={elem.id} onClick={()=>{handleDeletetoTLC(elem.task)}}>{elem.task}</li>})}
</ul>
</React.Fragment> 
   );
}
export default TaskList;