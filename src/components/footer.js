import React from 'react'
import { List, Responsive } from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Responsive minWidth={768}>
      <div
        style={{
          color: 'white',
          backgroundColor: 'black',
          padding: '20px',
          marginBottom: '0px',
        }}
      >
        <List>
          <List.Item
            style={{
              fontSize: '15px',
              textAlign: 'center',
              fontFamily: 'Russo One, sans-serif',
            }}
            content="Copyright © 2018 Lockhart Geophysical Company"
          />
        </List>
      </div>
    </Responsive>
    <Responsive {...Responsive.onlyMobile}>
      <div
        style={{
          color: 'white',
          backgroundColor: 'black',
          padding: '15px',
          marginBottom: '0px',
        }}
      >
        <List>
          <List.Item
            style={{
              fontSize: '12px',
              textAlign: 'center',
              fontFamily: 'Russo One, sans-serif',
            }}
            content="Copyright © 2018 Lockhart Geophysical Company"
          />
        </List>
      </div>
    </Responsive>
  </div>
)

export default Footer
