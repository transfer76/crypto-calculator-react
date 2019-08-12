import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
  	super(props)
  }

  render(){
  	return(
  	  <div>
        <h1>Cryptocurrency Portfolo Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search for a Currency:</label><br/>
            <input onChange={this.props.handleChange} autoComplit="off" type="text" name="name" placeholder="Ex: Bitcoin, Litecoin, Ethereum..." value={this.props.name} className="field"/>
          </div>
        </form>
  	  </div>
  	)  
  }
}

export default Search