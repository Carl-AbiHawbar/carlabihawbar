import Head from 'next/head'
import Confetti from 'react-confetti'
import { useState } from 'react'
import Image from 'next/image'


const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '0 0.5rem',
  fontFamily: "'Poppins', sans-serif",
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
  borderBottom: '3px solid #FFD700',
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
  background: '#1C1C1C',
}

const noButton = {
  background: '#DC143C',
}

const animationContainer = {
  margin: '5rem 0',
}

const animation = {
  maxWidth: '100%',
}

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleYesClick = () => {
    setShowConfetti(true)
  }    

  return (
    <div style={container}>
      <Head>
        <title>Will you go to prom with me?</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main style={main}>
        <h1 style={title}>
          <span>Will you </span> 
          <span style={underline}>go to prom </span> 
          <span>with me?</span>
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
          <button style={{...button, ...yesButton}} onClick={handleYesClick}>
            <span>Yes!</span>
          </button>
          <button style={{...button, ...noButton}}>
            <span>No.</span>
          </button>
        </div>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}

        <div style={animationContainer}>
          <img style={animation} src="/couple_dancing.gif" alt="" />
        </div>
  
  
<div class="container">

  <div class="mySlides">
    <div class="numbertext">1 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 6</div>
      <Image width={200} height={200} src="/" style="width:100%"/>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(1)" alt="The Woods"/>
    </div>
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre"/>
    </div>
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords"/>
    </div>
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights"/>
    </div>
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise"/>
    </div>
    <div class="column">
      <Image width={200} height={200} class="demo cursor" src="/" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains"/>
    </div>
  </div>
</div>
      </main>

      <footer style={{textAlign: 'center'}}>
        <p>
          Powered By Mj's Boyfriend.
        </p>
      </footer>
    </div>
  )
}
