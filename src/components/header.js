import React, { Component } from 'react'
import { Menu, Responsive, Dropdown } from 'semantic-ui-react'
import logo from '../images/logo.png'
export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Responsive minWidth={768}>
          <Menu
            style={{ fontFamily: 'Russo One, sans-serif' }}
            inverted
            fluid
            widths={6}
            fixed="top"
          >
            <Menu.Item>
              <img src={logo}/>
            </Menu.Item>

            <Menu.Item
              name="about-us"
              active={activeItem === 'about-us'}
              onClick={this.handleItemClick}
              link={true}
              href="#about-us"
            >
              About Us
            </Menu.Item>

            {/* <Menu.Item
              name="our-people"
              active={activeItem === 'our-people'}
              onClick={this.handleItemClick}
              href="#our-people"
            >
              Our People
            </Menu.Item> */}

            <Menu.Item
              name="our-process"
              active={activeItem === 'our-process'}
              onClick={this.handleItemClick}
              href="#process"
            >
              Our Process
            </Menu.Item>
            <Menu.Item
              name="how-it-works"
              active={activeItem === 'how-it-works'}
              onClick={this.handleItemClick}
              href="#how-it-works"
            >
              How it works
            </Menu.Item>
            <Menu.Item
              name="Employment"
              active={activeItem === 'Employment'}
              onClick={this.handleItemClick}
              href="#employment"
            >
              Employment
            </Menu.Item>
            <Menu.Item
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              href="#contact"
            >
              Contact
            </Menu.Item>
          </Menu>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Menu
            style={{ fontFamily: 'Russo One, sans-serif' }}
            inverted
            fixed="top"
            borderless
          >
            <Menu.Menu position="left">
              <Dropdown
                style={{
                  color: 'white',
                  marginLeft: '30px',
                  marginTop: '15px',
                  fontSize: '25px',
                }}
                icon="bars"
              >
                <Dropdown.Menu >
                  <Dropdown.Item
                    name="our-process"
                    active={activeItem === 'our-process'}
                    onClick={this.handleItemClick}
                    href="#process"
                  >
                    Our Process
                  </Dropdown.Item>
                  <Dropdown.Item
                    name="how-it-workds"
                    active={activeItem === 'how-it-works'}
                    onClick={this.handleItemClick}
                    href="#how-it-works"
                  >
                    How it works
                  </Dropdown.Item>
                  <Dropdown.Item
                    name="Employment"
                    active={activeItem === 'Employment'}
                    onClick={this.handleItemClick}
                    href="#employment"
                  >
                    Employment
                  </Dropdown.Item>
                  <Dropdown.Item
                    name="contact"
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                    href="#contact"
                  >
                    Contact
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
            <Menu.Item  style={{
                  marginLeft: '143px',
                }}>
              <img  src={logo}/>
            </Menu.Item>
            <Menu.Item>
              
            </Menu.Item>
          </Menu>
        </Responsive>
      </div>
    )
  }
}
