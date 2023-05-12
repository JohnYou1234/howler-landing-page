import React from 'react';

const VideoPlayer = () => {
  return (
    <div className='center-div'>
        <h3>Please watch our short presentation</h3>
        <iframe
            width="1131" height="636" 
            src="https://www.youtube.com/embed/JHkys7UeiT4" 
            title="INFO 491 Team U Presentation" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  );
};

export default VideoPlayer;
