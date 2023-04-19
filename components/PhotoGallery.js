import { useState, useEffect, useRef } from 'react';

const AUTO_SCROLL_INTERVAL = 3000;
const SWIPE_THRESHOLD = 40;

const PhotoGallery = ({ images }) => {
  const [index, setIndex] = useState(Math.floor(images.length / 2));
  const [touchStartX, setTouchStartX] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;

    const handleAutoScroll = () => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const startAutoScroll = () => {
      intervalId = setInterval(handleAutoScroll, AUTO_SCROLL_INTERVAL);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    container.addEventListener('mouseover', stopAutoScroll);
    container.addEventListener('mouseout', startAutoScroll);
    startAutoScroll();

    return () => {
      container.removeEventListener('mouseover', stopAutoScroll);
      container.removeEventListener('mouseout', startAutoScroll);
      clearInterval(intervalId);
    };
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > SWIPE_THRESHOLD) {
      setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setTouchStartX(null);
    } else if (touchDiffX < -SWIPE_THRESHOLD) {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  return (
    <div
      style={styles.container}
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, i) => (
        <img
          key={i}
          style={{ ...styles.image, transform: `translateX(${10 * (i - index)}%)` }}
          src={image}
          alt=""
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    margin: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '400px',
    overflow: 'hidden',
    touchAction: 'pan-y',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    userSelect: 'none',
    touchAction: 'pan-y',
    transition: 'transform 0.5s ease',
  },
};

export default PhotoGallery;
