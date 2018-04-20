import oil from '../../public/static/images/oil.jpg'
import React from 'react'
import {
  Image,
  Header,
  Segment,
  SegmentGroup,
  Responsive,
  Container,
} from 'semantic-ui-react'

const LandingPage = () => (
  <div
    id="about-us"
    style={{
      position: 'relative',
    }}
  >
    <Image src={oil} fluid style={{ marginBottom: '4px' }} />
    <Responsive minWidth={700}>
      <Header
        size="huge"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          textTransform: 'uppercase',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          opacity: '0.7',
          textAlign: 'center',
          fontSize: '100px',
          fontFamily: 'Russo One, sans-serif',
        }}
      >
        Lockhart
        <br />
        <u style={{ width: '50px' }} />
        Geophysical
        <Header.Subheader
          style={{
            color: 'white',
            marginTop: '5px',
          }}
        >
          Lockhart Geophysical has been conducting seismic exploration for over
          40 years. It is our goal to provide the highest quality data, by
          focusing on the needs of clients, and ensuring our land owners
          satisfaction.
        </Header.Subheader>
      </Header>
    </Responsive>
    <Responsive maxWidth={699}>
      <Header
        size="huge"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          textTransform: 'uppercase',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          opacity: '0.6',
          textAlign: 'center',
          fontSize: '55px',
          fontFamily: 'Russo One, sans-serif',
          marginTop: '10px',
        }}
      >
        Lockhart
        <Header.Subheader
          style={{
            color: 'white',
            marginTop: '5px',
            fontSize: '15px',
          }}
        >
          Lockhart Geophysical has been conducting seismic exploration for over
          40 years. It is our goal to provide the highest quality data, by
          focusing on the needs of clients, and ensuring our land owners
          satisfaction.
        </Header.Subheader>
      </Header>
    </Responsive>
  </div>
)

export default LandingPage
