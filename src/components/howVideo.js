import React from 'react'
import sky from '../images/sky.jpg'
import { Container, Image, Header, Embed } from 'semantic-ui-react'

const HowVideo = () => (
  <div
    id="how-it-works"
    style={{
      backgroundImage: `url(${sky})`,
      backgroundSize: 'cover',
      width: '100%',
      paddingBottom: '50px',
    }}
  >
    <Header
      style={{
        padding: '45px',
        fontSize: '35px',
        fontFamily: 'Russo One, sans-serif',
      }}
      inverted
      textAlign="center"
      size="huge"
      content="How it Works"
    />
    <Container>
      <Embed id="8h35KsRD0c0" source="youtube" />
    </Container>
  </div>
)

export default HowVideo
