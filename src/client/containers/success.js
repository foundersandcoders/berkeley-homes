import React, { Component } from 'react'

import BerkeleyLogo from '../components/berkeley_logo.js'
import ThanksMessage from '../components/thanks_message.js'
import SuccessIllustration from '../components/success_illustration.js'
import HomeBtn from '../components/home_button.js'
import Header from '../components/header.js'

class Success extends Component {
  render () {
    return (
      <div>
        <Header />
        <BerkeleyLogo />
        <ThanksMessage />
        <SuccessIllustration />
        <HomeBtn />
      </div>
    )
  }
}
export default Success
