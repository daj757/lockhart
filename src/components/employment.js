import React from 'react'
import grass from '../images/grass.jpg'
import {
  Container,
  Image,
  Header,
  Responsive,
  Card,
  Grid,
} from 'semantic-ui-react'
import employee from '../images/employment.jpeg'

//https://drive.google.com/file/d/1fbDJRtU_nT6AlL3CkI_mEGNqrDjhyh-C/view?usp=sharing
const Employment = () => (
  <div
    id="employment"
    style={{
      backgroundImage: `url(${grass})`,
      paddingBottom: '50px',
      paddingTop: '50px',
      backgroundSize: 'cover',
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
      content="Employment"
    />
    <Image centered size="large" rounded src={employee} />

    <Container text>
      <p
        style={{
          fontSize: '20px',
          color: 'white',
        }}
      >
        Interested in the field of Seismic Acquisition? Consider employment with
        Lockhart Geophysical, a leader in seismic exploration for more than 40
        years. Opportunities may include entry and experienced level positions.
        Lockhart Geophysical provides a safe work environment to its employees,
        recognizes collective and individual productivity and performance, and
        offers comprehensive, family-oriented benefits.<br />
        <br /> We are currently accepting applications for: Mechanic with IO/IVI
        experience <br />Please email resumes to:{' '}
        <a style={{ color: 'white' }} href="mailto:info@lockhartgeo.com">
          info@lockhartgeo.com
        </a>{' '}
        <br />{' '}
        <a
          href="https://drive.google.com/file/d/1fbDJRtU_nT6AlL3CkI_mEGNqrDjhyh-C/view?usp=sharing"
          target="_blank"
          style={{ color: 'DodgerBlue' }}
        >
          Download Employment Application
        </a>
        <br /> ***All applicants must have a valid driver's license with a clean
        motor vehicle record.
      </p>
    </Container>
  </div>
)

export default Employment
