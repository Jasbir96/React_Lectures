// different file App component => class based=> state => taskList =>
// imrc
import React, { Component } from 'react';
import TaskList from "./components/taskList";
import InputBox from "./components/inputBox";
// inital view => you will write react code for state,render 
// cc
class App extends Component {
 state={
   taskList:[{task:"Make Coffee",id:1},{task:"Learn ES6",id:2},{task:"Learn React",id:3}]
 }
 handleDelete=(todeleteTask)=>{
function test(elem){
    return elem.task!==todeleteTask;
}
let restOfTheTasks=this.state.taskList.filter(test);\
// new state => click -> filtered out 
this.setState({taskList:restOfTheTasks});
 }
 handleAddTask=(toAddTask)=>{
   let {taskList}=this.state;
taskList.push({
  task:toAddTask,
  id:taskList.length+1
})
this.setState({taskList:taskList})
  }
//  
  render() { 
    return ( 
      <React.Fragment>
        <InputBox 
        handleAddtoIBC={this.handleAddTask}
        ></InputBox>
    
     <TaskList
     taskList={this.state.taskList} handleDeletetoTlC={this.handleDelete} ></TaskList>
     </React.Fragment>
     );
  }
}
 
export default App;