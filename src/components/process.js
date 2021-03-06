import React from 'react'
import field from '../images/field.jpg'
import permitting from '../images/permitting.jpg'
import seismic from '../images/seismic.jpg'
import truck from '../images/truck.jpg'
import drone from '../images/drone.gif'
import {
  Container,
  Image,
  Header,
  Segment,
  Grid,
  Responsive,
} from 'semantic-ui-react'
const Process = () => (
  <div
    id="process"
    style={{
      backgroundImage: `url(${field})`,
      backgroundSize: 'cover',
      width: '100%',
      paddingBottom: '50px',
     
    }}
  >
    <Header
      size="huge"
      dividing
      inverted
      textAlign="center"
      content="Our Process"
      style={{
        padding: '45px',
        paddingTop: '70px',
        fontSize: '35px',
        fontFamily: 'Russo One, sans-serif',
      }}
    />
    <Container fluid>
      <Grid padded stretched stackable columns={4}>
        <Grid.Column>
          <Segment>
            <Header textAlign="center" content="Permitting" />
            <Image rounded centered src={permitting} />
            <br/>
            <p>
              Your first contact with us is through our permit staff. When
              Lockhart is contracted by an oil company/operator to perform a
              geophysical survey, our permit department is responsible for
              securing permission from the land owner to conduct a seismic
              survey.
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header textAlign="center" content="Seismic Aquisition" />
            <Image alt="oil trucks" rounded centered src={seismic} />
            <br/>
            <p>
              Lockhart acquires 2D & 3D surveys for our oil-prospecting clients.
              Surveys are designed per the client's specifications, with special
              consideration to land owner's agriculture concerns and topography
              issues. At the end of the field operations, this data is forwarded
              to the client to be processed and interpreted for possible
              reservoirs. Often a geologist and geophysicist will work together
              to determine potential drilling locations.
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header textAlign="center" content="Equipment" />
            <Image alt="oil trucks" rounded centered src={truck} />
            <br/>
            <p>
              Geophones (recording devices) are connected to cables and a
              recording truck over the prospective area. Vibrator trucks then
              shake on predetermined points, the sound waves travel through the
              earth to the geophones and are then relayed back to a recording
              truck.
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header textAlign="center" content="Improving our proccess" />
            {/* <video autoplay loop muted >
  <source src={droneField} type="video/mp4"></source>
</video>
<br />
<video autoplay loop muted >
  <source src={drone} type="video/mp4"></source>
</video> */}
            {/* <Image rounded centered src={droneField}/> */}
            {/* <br /> */}
            <Image alt="drone" rounded centered src={drone}/>
            <br/>
            <p>
              We strive to use the best technology for the job at hand. Drones allow us to minimize
              field damages, find the best access points for our trucks, and provide clients
              with detailed pre/post field surveys.
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
)

export default Process
