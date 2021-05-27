import React, { Component } from 'react';


const Band = props => {

    return(
      <div>
        <li id={props.index}>{props.name}</li><button onClick={() => props.delete(props.index)}>Delete</button>
      </div>
    );
};


export default Band
