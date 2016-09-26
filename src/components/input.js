import React, {Component} from 'react';

class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {initialStr : '## How to use \n\n+ Just type in markdown in the input box \n+ You will see a preview the on right side \n+ Check out the link for more Markdown syntax \n\n[Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)'};
  }

  onInputChange(str){
    this.setState({initialStr: str});
    this.props.toMarkDown(str);
  }

  render(){
    return (
      <div className="col-md-6">
        <textarea cols="55" rows="20" value={this.state.initialStr} onChange={event => this.onInputChange(event.target.value)} ></textarea>
      </div>
    );
  }

  componentDidMount(){
    this.props.toMarkDown(this.state.initialStr);
  }

}

export default InputBox;
