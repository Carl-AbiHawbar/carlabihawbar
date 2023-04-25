import React, { useRef } from 'react';

function ourMemo() {
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
}

export default ourMemo;
