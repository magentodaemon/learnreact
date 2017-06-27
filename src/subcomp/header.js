import React, { Component } from 'react';

class Header extends Component {

  handleClick(event) {
    var el = event.target
    console.log(el);
    alert("Event has been triggered");	

  }
	
  render() {
    return (
      <div className="header">
        	<div id="logowrap">
			MD
		</div>
		<div id="searchwrap" >
		   <input type="text" id="search" />	
		   <button type="button" onClick={this.handleClick.bind(this)} >GO</button>			
		</div>
		
      </div>
    );
  }
}

export default Header;
