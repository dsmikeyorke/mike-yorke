import React, {Fragment} from 'react'

const Button = (props) => {

  const { children, link, color, size, className } = props

  const colors = {
    red: 'red',
    white: 'white',
    blue: 'blue'
  }

  return(
    <Fragment>
      <a
        href={link}
        className={`button d-if ai-c ${className ? className : ''}`}
      >
        {children}
      </a>
      
      <style jsx>{`
        .button {
          padding: .75rem 1.5rem;
          font-size: 14px;
          border-width: 1px;
          border-style: solid;
          border-radius: 4px;
          text-decoration: none;
          transition-duration: 250ms;
          transition-property: color,background-color,border-color;
          color: ${ color == 'light-gray' ?  `#7F7F7F` : `#333` };
        }
        .button svg {
          margin-right: .5rem;
        }
      `}</style>

    </Fragment>
  )
}
export default Button
