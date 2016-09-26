import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import InputBox from './components/input.js';
import Preview from './components/preview.js';
import Title from './components/title.js';

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
    this.state = {converted: ""};
  }

  toMarkDown(raw){
    var converted = marked(raw);
    this.setState({converted});
  }

  render(){
    return(
      <div>
        <div className="row"><Title /></div>
        <div className="row">
          <InputBox toMarkDown={this.toMarkDown.bind(this)} />
          <Preview converted={this.state.converted} toMarkDown={this.toMarkDown.bind(this)} />
        </div>
      </div>
    );
  }


}


ReactDOM.render(<App />, document.querySelector('.container'));
