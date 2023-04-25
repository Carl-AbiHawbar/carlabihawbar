import React, { useRef } from 'react';

function ourMemo(props) {
  const videoRef = useRef(null);

  function handlePlay() {
    videoRef.current.play();
  }

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls>
        <source src="public/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default ourMemo;