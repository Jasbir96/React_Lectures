import React, { Component } from 'react';
class InputBox extends Component {
  // task state
  state={
    data:""
  }
  handleSubmit=()=>{
    this.props.handleAddtoIBC(this.state.data);
    this.setState({data:""})
  }

  changeText=(e)=>{
    // input => value 
const value=e.currentTarget.value;
this.setState({
  data:value
})

  }
  render() { 
    return ( 
      <React.Fragment>
        <input 
        value={this.state.data }
        onChange={this.changeText}
        type="text"/>
        <button onClick={this.handleSubmit}>Submit</button>
      </React.Fragment>
     );
  }
}

export default InputBox;