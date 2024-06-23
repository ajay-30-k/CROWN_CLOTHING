import React from 'react'
import './button.scss'

const Custombutton = ({childern,isGoogleSignIn,inverted,...otherprops}) => {
  return (
    <button className={`${inverted ? 'inverted':""}${isGoogleSignIn ? 'google-sign-in':""} custom-button`} {...otherprops}>{childern}</button>
  )
}

export default Custombutton