import React from 'react'

import Button from '../components/button'

import Icon from 'react-icons-kit';
import {instagram} from 'react-icons-kit/entypo/instagram'
import {dribbble} from 'react-icons-kit/entypo/dribbble'

import logo from '../static/logo.png'

const Footer = () => {

  const today = new Date();

  return(
    <footer>
      <div className="fx jc-c mb-5">
        <Button link="https://dribbble.com/mdyorke" color="light-gray" className="mr-2">
          <Icon icon={dribbble} style={{marginRight: 8}} /> See what I'm creating on <em>Dribbble</em>
        </Button>
        <Button link="https://www.instagram.com/mdyorke/" color="light-gray">
          <Icon icon={instagram} style={{marginRight: 8}} /> Follow my adventures on <em>Instagram</em>
        </Button>
      </div>
      <div className="ta-c">
        <div
          className="logo ta-c ti--999 mx-a mb-2"
          style={{
            width: 32,
            height: 32,
            background: `url(${logo}) center no-repeat`,
            backgroundSize: `32px 32px`
          }}
        >
          Mike Yorke
        </div>
        <div
          className="f-xxs ta-c"
          style={{color: `#666`}}
        >
          &copy; {today.getFullYear()} Mike Yorke
        </div>
      </div>
    </footer>
  )
}

export default Footer
