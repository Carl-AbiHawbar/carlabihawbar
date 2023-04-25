import Head from 'next/head'
import Confetti from 'react-confetti'
import { useState } from 'react'
import Image from 'next/image'
import PhotoGallery from '@/components/PhotoGallery'


const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 0.5rem',
  fontFamily: "'Poppins', sans-serif",
  color:"#97D3D1",
  backgroundColor:"#FEFFF8",
  borderImage: 'url(/back.png) 30 repeat',
  border: "20px solid transparent",
}

const main = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 0',
  flex: '1',
  width: '100%',
  textAlign: 'center',
}

const title = {
  margin: '0',
  lineHeight: '1.15',
  fontSize: '4rem',
  fontWeight: '500',
}

const underline = {
  borderBottom: '3px solid #555555',
}

const description = {
  lineHeight: '1.5',
  fontSize: '1.5rem',
  marginBottom: '2rem',
}

const buttonContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',
}

const button = {
  fontSize: '1.2rem',
  borderRadius: '50px',
  padding: '0.8rem 2rem',
  margin: '0.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontWeight: '500',
  color: 'white',
  border: 'none',
}

const yesButton = {
  background: '#555555',
}

const noButton = {
  background: '#D57374',
}

const animationContainer = {
  margin: '5rem 0',
}

const animation = {
  maxWidth: '50%',
}

const playButton = {
  margin: '0',
};

const playButtonHover = {
  transform: 'scale(1.1)',
};

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleYesClick = () => {
    setShowConfetti(true)
  }


  const handleNoClick = () => {
    // const url = "https://youtu.be/PyeS1T00eog"; nk
    // window.open(url, "_blank");
  }
  
  // const handlePlayClick = () => {
  //   const url = "/video.mp4";
  //   window.open(url, "_blank");
  // };

  const images = ['img1.jpg', 'img2.jpg', 'img1.jpg', 'img2.jpg']

  return (
    <div style={container}>
      <Head>
        <title>Will you go to prom with me?</title>
        <link rel="icon" href="/star.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={main}>
        <h1 style={title}>
          <span><Image width={100} height={100} src="/star.png" />Will you </span> 
          <span style={underline}>go to prom </span> 
          <span>with me?<Image width={100} height={100} src="/star.png" /></span>
        </h1>

        <p style={description}>
          Hey MarieJoe, 
        </p>
        <p style={description}>
          I've been wanting to ask you this for a while now, and I couldn't think of a better way than to create a web page! 
        </p>
        <p style={description}>
          Will you do me the honor of being my prom date?
        </p>

        <div style={buttonContainer}>
          <a style={{...button, ...yesButton}} onMouseOver={(e) => Object.assign(e.target.style, playButtonHover)} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} onClick={handleYesClick}>
            <span>Yes!</span>
          </a>
          <a style={{...button, ...noButton}} onMouseOver={(e) => Object.assign(e.target.style, playButtonHover)} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} onClick={handleNoClick}>
            <span>No.</span>
          </a>
        </div>
        <div>
          <p>Our Memories:</p>
          <a href='/ourMemo' style={playButton} hoverStyle={playButtonHover}  onMouseOver={(e) => Object.assign(e.target.style, playButtonHover)} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}><Image width={50} height={50} src="/play.png"/></a></div>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}

        <div style={animationContainer}>
          <img style={animation} src="" alt="" />
        </div>
        {/* <PhotoGallery images={images}/> */}
      </main>

      {/* <footer style={{textAlign: 'center'}}>
        <p>
          Powered By Mj's Boyfriend.
        </p>
      </footer> */}
    </div>
  )
}
