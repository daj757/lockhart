import React from 'react'
import grass from '../../public/static/images/grass.jpg'
import {
  Container,
  Image,
  Header,
  Responsive,
  Card,
  Grid,
} from 'semantic-ui-react'

const People = () => (
  <div
    id="our-people"
    style={{
      backgroundImage: `url(${grass})`,
      width: '100%',
      paddingBottom: '50px',
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
      content="Our People"
    />
    <Responsive minWidth={768}>
      <Container>
        <Grid columns={4}>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Responsive>
    <Responsive {...Responsive.onlyMobile}>
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">Title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card raised color="black">
              <Image src="/assets/images/avatar/large/matthew.png" />
              <Card.Content>
                <Card.Header>Employee</Card.Header>
                <Card.Meta>
                  <span className="date">title</span>
                </Card.Meta>
                <Card.Description>Summary</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Responsive>
  </div>
)

export default People
