import React from 'react'
import Link from 'gatsby-link'

import Button from '../components/button'

import Icon from 'react-icons-kit';
import {plane} from 'react-icons-kit/entypo/plane'

const IndexPage = () => (
  <section
    style={{width: 400}}
  >
    <h1 className="f-lg mt-0 mb-05">Mike Yorke</h1>
    <h4
      className="mt-0 mb-3 tt-u ls-2 f-xxs"
      style={{
        color: `#D84B5C`,
        fontFamily: `'Open Sans',sans-serif`
      }}>
      Web.&nbsp;&nbsp;U.I.&nbsp;&nbsp;Branding.
    </h4>
    {/* <Button link="mailto:mike@alpinepixels.com" color="dark-gray">
      Contact me
    </Button> */}
    <p style={{color: `#7F7F7F`}}>
      Hi, I'm a freelance designer currently living in Bend, Oregon. Creating websites and mobile apps for companies is my expertise.
    </p>
    <div>
      <Button link="mailto:mike@alpinepixels.com" color="dark-gray">
        <Icon icon={plane} style={{marginRight: 8}} /> Contact me
      </Button>
    </div>
  </section>
)

export default IndexPage
