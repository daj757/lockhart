import React from 'react'
import field2 from '../images/field2.jpg'
import crew from '../images/crew.jpg'
import {
  Container,
  Image,
  Header,
  Grid,
  List,
  Embed,
  Modal,
  Card,
  Icon
} from 'semantic-ui-react'

const Contact = () => (
  <div
  id="contact"
    style={{
      backgroundImage: `url(${field2})`,
      width: '100%',
      backgroundSize: 'cover',
      fontFamily: 'Russo One, sans-serif',
    }}
  >
    <Container style={{ paddingBottom: '50px', paddingTop: '50px'}}>
      <Header
        style={{
          padding: '20px',
          fontSize: '35px',
          fontFamily: 'Russo One, sans-serif',
        }}
        textAlign="center"
        inverted
        content="Contact Us"
      />
      <Grid stackable columns={2} padded>
      <Grid.Row columns={2}>
    <Grid.Column>
    <Image src={crew}size='large' rounded />
    </Grid.Column>
    <Grid.Column >
    <Card.Group centered>
    <Card>
      <Card.Content>
        <Card.Header>Jaime Jimenez</Card.Header>
       <Card.Meta>jaime@lockhartgeo.com</Card.Meta>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header content='Carlos Jimenez' />
        <Card.Meta content='carlos@lockhartgeo.com' />
      </Card.Content>
    </Card>

    <Card>
      <Card.Content
        header='Arriaga'
        meta='arriaga@lockhartgeo.com'
      />
    </Card>
    </Card.Group>
    </Grid.Column>
          </Grid.Row>
        <Grid.Column>
          <Header
            size="huge"
            inverted
            content="Lockhart Office"
            textAlign="center"
            style={{ fontFamily: 'Russo One, sans-serif' }}
          />
          <List inverted style={{ color: 'white', fontSize: '20px' }}>
            <Modal
              closeIcon
              style={{
                marginTop: '75px',
                marginLeft: '20px',
                marginBottom: '25px',
              }}
              size="small"
              trigger={
                <List.Item
                  icon="address card outline"
                  content={
                    <a href="#">2802 W. Jones Ave Garden City, KS 67846</a>
                  }
                />
              }
            >
              <Modal.Content>
                <Embed
                  active
                  autoplay
                  source="youtube"
                  iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.626557664541!2d-100.91328435007146!3d37.98584357962201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8709f20d13900001%3A0x54c2e8748c3f90c0!2s2802+Jones+Ave%2C+Garden+City%2C+KS+67846!5e0!3m2!1sen!2sus!4v1523761565507"
                />
                <Modal.Description>
                  <Header   
                  size="medium"
                  inverted
                  content="Lockhart Office"
                  textAlign="center"
                  style={{ fontFamily: 'Russo One, sans-serif' }}>
                  </Header>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <List.Item icon="phone" content="620-277-7771" />
            <List.Item icon="fax" content="620-277-7888 (Fax number)" />
            <List.Item
              icon="mail"
              content={
                <a href="mailto:info@lockhartgeo.com">info@lockhartgeo.com</a>
              }
            />
          </List>
        </Grid.Column>
        <Grid.Column>
          <Header
            size="huge"
            inverted
            content="Hays Office"
            textAlign="center"
            style={{ fontFamily: 'Russo One, sans-serif' }}
          />
          <List inverted style={{ color: 'white', fontSize: '20px' }}>
            <Modal
              closeIcon
              style={{
                marginTop: '75px',
                marginLeft: '20px',
                marginBottom: '25px',
              }}
              size="small"
              trigger={
                <List.Item
                  icon="address card outline"
                  content={<a href="#">1846 250th Avenue Hays, KS 67601</a>}
                />
              }
            >
              <Modal.Content>
                <Embed
                  active
                  autoplay
                  source="youtube"
                  iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8211859395965!2d-99.31928764990802!3d38.95091325129418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a18278cc3f16a5%3A0xa3f21ffbfc94179e!2s1846+250th+Ave%2C+Hays%2C+KS+67601!5e0!3m2!1sen!2sus!4v1523764604515"
                />
                <Modal.Description>
                  <Header>Hays Office</Header>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <List.Item icon="phone" content="785-625-9175" />
            <List.Item icon="fax" content="785-625-5112 (Fax number)" />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
)

export default Contact
