import React, { Component } from 'react'
import { MainContainer, GearContainer, GearIcon } from './styledComponents'
import { gear } from '../../../../../res/images'

class SettingsContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MainContainer>
        <GearContainer>
          <GearIcon src={gear} />
        </GearContainer>
      </MainContainer>
    )
  }
}

export default SettingsContainer
