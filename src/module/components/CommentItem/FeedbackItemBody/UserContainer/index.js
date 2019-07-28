import React, { Component } from 'react'
import { MainContainer, TitleText } from './styledComponents'

class UserContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title } = this.props
    return (
      <MainContainer>
        <TitleText>{title}</TitleText>
      </MainContainer>
    )
  }
}

export default UserContainer
