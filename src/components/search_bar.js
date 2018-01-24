import React, { Component } from 'react';

// Class based component (different than functoinal component)
	// Javascript Object
class SearchBar extends Component {
	// initilize state (in Class based components).
			// Functional components to not have a state object
	constructor(props) {
		// super calls the parent method on the parent class
		super(props);

		// initialize state by creating a new object and
		// assigning it to this.state
		// Object we pass --> there are properties we want to record the change on (in this case 'term' as in a search term).
			// we will be updating this to get the value and update this empty string with that value
		this.state = { term: '' };
		// only in the constructor do we manipulate state (elsewhere we will use this.setState)
	}

	// must use render to not throw an error
	render(){
			// on the name of the event (onChange) pass value of this.onInpu...
				// watch for the change event on the input (someone typing into it ;) )
				 	//  here we use this.setState to change the state (informs React that the state is changing and here is the change)
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={ event => this.onInputChange(event.target.value) }/>
			</div>
		); // this ';' here and remove the semicolons inside this '()' when using the '()' wrapper and dropping to a new line!
	}

	// React community tends use handleInputChange or onInputChange(event) {}
	// callback to onSeaarchTermChange (index.js)
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


// export this data so it can be imported elsewhere
export default SearchBar;