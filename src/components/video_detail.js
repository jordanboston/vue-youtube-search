import React from 'react';

const VideoDetail = ({video}) => {
	// avoid undefined error when first render takes place before videos have been retrieved
	if (!video) {
		// return statement --nothing else will be run if this executes
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	//  string interpolation here (adds above variable into the string)
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;