import React, {Component} from 'react';

class InputBox extends Component{
  constructor(props){
    super(props);
  }

  onInputChange(str){
    console.log("the string you just input is ...")
    console.log(str);
    this.props.setRawData(str);
  }

  render(){
    return (
      <div className="col-md-6">
        <textarea cols="55" rows="20" onChange={event => this.onInputChange(event.target.value)} ></textarea>
      </div>
    );
  }

}

export default InputBox;
