import React, {Component} from 'react';

const Preview = (props) => {
  return (
    <div className="col-md-6">
      <div className="preview" dangerouslySetInnerHTML={{__html: props.converted}}>
      </div>
    </div>
  );
  
}

export default Preview;
