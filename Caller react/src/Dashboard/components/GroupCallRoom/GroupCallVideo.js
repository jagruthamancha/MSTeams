import React, { useRef, useEffect } from 'react';

const styles = {
  videoContainer: {
    width: '300px',
    height: '200px',
    borderRadius: '10px',
  },
  videoElement: {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
  }
};

const GroupCallVideo = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return (
    <div style={styles.videoContainer}>
      <video ref={videoRef} autoPlay style={styles.videoElement} />
    </div>
  );
};

export default GroupCallVideo;
