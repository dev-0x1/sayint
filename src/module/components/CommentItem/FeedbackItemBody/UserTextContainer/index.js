import React, { Component } from 'react'
import { favorite } from '../../../../../res/images'
import {
  MainContainer,
  HeaderContainer,
  NameText,
  ContentText,
  FooterContainer,
  TimeText,
  HeartIconContainer,
  HeartIcon,
  NameTextContainer
} from './styledComponents'

class UserTextContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('this.props', this.props)
    const { name } = this.props
    const { first, last } = name
    const lastName = last + ':'
    return (
      <MainContainer>
        <HeaderContainer>
          <NameTextContainer>
            <NameText>{first}</NameText>{' '}
            <NameText>
              <span> </span>
              {lastName}
            </NameText>
            <ContentText> Hola</ContentText>
          </NameTextContainer>
        </HeaderContainer>
        <FooterContainer>
          <TimeText>a few seconds ago</TimeText>
          <HeartIconContainer>
            <HeartIcon src={favorite} />
          </HeartIconContainer>
        </FooterContainer>
      </MainContainer>
    )
  }
}

export default UserTextContainer
