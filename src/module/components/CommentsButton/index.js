import React, { Component } from 'react'
import {
  ButtonContainer,
  ButtonText,
  IconContainer,
  CommentsIcon
} from './styledComponents'
import { comments } from '../../../res/images'

class CommentsButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { toggleComments } = this.props
    return (
      <ButtonContainer onClick={toggleComments}>
        <IconContainer>
          <CommentsIcon src={comments} />
        </IconContainer>
        <ButtonText>Comments</ButtonText>
      </ButtonContainer>
    )
  }
}

export default CommentsButton
