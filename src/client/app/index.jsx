//console.log('Hello World!');

import React from 'react';
import {render} from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      internalState: "poop2"
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ internalState: Math.random() });
  }
  render() {
    const { test, clickHandler } = this.props;
    return (
      <div>{test} (child component) {this.state.internalState}
       <pre>   </pre><a href="#" onClick={this.handleClick.bind(this)}>test2</a>
       <pre>       </pre><a href="#" onClick={clickHandler}>test3</a>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "poop"
    }
  }

  handleClick(e) {
    e.preventDefault(); //linkkin esto , selain ei siirry linkkiin
    console.log("link clicked", e);
    this.setState({ text: Math.random() });
  }
  
  handleClick2(e, p) {
    e.preventDefault(); //linkkin esto
    console.log("link clicked", e);
    this.setState({ text: Math.random() });
  }
  render () {
    console.log("state", this.state.text);
    var red = {color:'red',fontSize: 16  }; //key value map / object / table / associative array
    
  /*
  const a = [  <p> render start </p>  ];
    for(var i = 0; i < 16; i++){
      a.push( <p style={ red }  > Hello React 123 </p> );
    }
*/

    //return <p> Hello React! 123 </p>;

// return { a };

    return (
      <div>
        {this.state.text}
        <Test test={this.state.text} clickHandler={this.handleClick.bind(this)} />
        <br /><a href="#" onClick={(e) => this.handleClick(e)}>test</a>
        <br /><a href="#" onClick={(e) => this.handleClick2(e, "poop")}>test</a>
        <br /><a href="#" onClick={this.handleClick}>test</a>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
