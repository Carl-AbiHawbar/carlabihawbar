import styled from 'styled-components'

const Container = styled.div`
  background-color: #F8E7EA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 4rem;
  margin-top: 2rem;
  text-align: center;
  color: #E73859;
  font-family: 'Parisienne', cursive;
`

const Message = styled.p`
  font-size: 2rem;
  margin-top: 3rem;
  text-align: center;
  color: #D90429;
  font-family: 'Montserrat', sans-serif;
`

const ImageContainer = styled.div`
  margin-top: 3rem;
  width: 80%;
  max-width: 500px;
  height: 0;
  position: relative;
  padding-bottom: 100%;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const Button = styled.button`
  font-size: 2rem;
  padding: 1.5rem 4rem;
  margin: 0 2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  background-color: #E73859;
  color: #F8E7EA;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(0);
  }
`

const PromProposal = () => {
  return (
    <Container>
      <Title>Will you go to prom with me?</Title>
      <Message>I promise it'll be the most magical night of your life.</Message>
      <ImageContainer>
        <Image src="/prom.jpg" alt="Prom Proposal" />
      </ImageContainer>
      <ButtonContainer>
        <Button>Yes</Button>
        <Button>No</Button>
      </ButtonContainer>
    </Container>
  )
}

export default PromProposal
