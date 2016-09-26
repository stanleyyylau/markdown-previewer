import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import InputBox from './components/input.js';
import Preview from './components/preview.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

class App extends Component {
  constructor(props) {
    super(props)
    var test = "some string here";
    this.state = {
      raw: "",
      converted: ""
    }
  }

  setRawData(raw){
    console.log('setting raw data on the app scope...')
    console.log(raw);
    // this.setState({raw});
    this.toMarkDown(raw);
  }

  toMarkDown(raw){
    var converted = marked(raw);
    console.log('about to run toMarkDown function...')
    console.log(raw);
    this.setState({converted});
    console.log('after converting and settingstate value...')
    console.log(this.state.converted);

  }

  render(){
    return(
      <div className="row">
        <InputBox setRawData={this.setRawData.bind(this)}/>
        <Preview converted={this.state.converted} toMarkDown={this.toMarkDown.bind(this)} />
      </div>
    );
  }


}


ReactDOM.render(<App />, document.querySelector('.container'));
