import { useState } from 'react'

const SWIPE_THRESHOLD = 40;

const PhotoGallery = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>
  }

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  }

  const handleTouchMove = (event) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > SWIPE_THRESHOLD) {
      handlePrevious();
      setTouchStartX(null);
    } else if (touchDiffX < -SWIPE_THRESHOLD) {
      handleNext();
      setTouchStartX(null);
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(null);
  }

  return (
    <div style={styles.container} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <button style={{...styles.button, ...styles.leftButton}} onClick={handlePrevious}>
        {'<'}
      </button>
      <img style={styles.image} src={images[index]} alt="" />
      <button style={{...styles.button, ...styles.rightButton}} onClick={handleNext}>
        {'>'}
      </button>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    overflow: 'hidden',
    touchAction: 'pan-y',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  leftButton: {
    left: '0',
  },
  rightButton: {
    right: '0',
  },
  image: {
    height: '100%',
    objectFit: 'cover',
    userSelect: 'none',
    touchAction: 'pan-y',
  },
}

export default PhotoGallery
