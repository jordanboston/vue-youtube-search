import _ from 'lodash';
// main React library (create & manage components)
import React, { Component } from 'react';
// separate library (render to DOM)
import ReactDOM from 'react-dom';
// import the YouTube search installed already
import YTSearch from 'youtube-api-search';
// give a file reference here (unlike libraries 'react') files must be specified like this
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API Key
const API_KEY = 'AIzaSyBzyFUoH9hi_YFbPxeNsh-SyFyPqSaKVps';

// Create a new component and this component should produce some html
class App extends Component {
	constructor(props) {
		super(props);

		// pass to empty array
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('react.js');
	}

	// term here is what the user types into the input field
	videoSearch(term) {
		YTSearch( {key: API_KEY, term: term}, (videos) => {
			// when key and value are the same 'videos' --we can condense like below
				// this.setState({ videos: videos });
			this.setState({
				videos: videos,
				// get the first video (before one is selected --this is the default)
				selectedVideo: videos[0]
			});
		});
	}

	// search term string gets passed in from videoSearch into our SearchBar
	// then onSearchTermChange can be used to fire off a new YTSearch with the term
		// search_bar.js will use onInputChange(event.target.value) to setState from the onInputChange(term) method
	render() {
		// using Lodash debunce to throttle the search rendering/reloading (400 milliseconds)
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);
		// changing this line below: onSearchTermChange={term => this.videoSearch(term)}  to use new videoSearch function: line 51
		return (
			<div>
				<SearchBar  onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
} // end App class

// Take this componsent's generated html and put on the page (in the DOM)
	//  <App /> creates an instance of the App class
		// document.querySelector('.container') is the DOM element to place the App instance stuff in
ReactDOM.render(<App />, document.querySelector('.container'));