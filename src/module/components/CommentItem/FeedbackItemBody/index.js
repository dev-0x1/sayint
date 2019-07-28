import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import {
  MainContainer,
  HeaderContainer,
  HeaderSubContainer,
  TopContainer,
  CommentsText,
  CheckboxText,
  InputContainer
} from './styledComponents'
import UserContainer from './UserContainer'
import SettingsContainer from './SettingsContainer'
import PostCommentButton from '../PostCommentButton'
import UserTextContainer from './UserTextContainer'

class CommentsHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { userTitle, userName } = this.props
    return (
      <MainContainer>
        <HeaderContainer>
          <HeaderSubContainer>
            <UserContainer title={userTitle} />
            <UserTextContainer name={userName} />
          </HeaderSubContainer>
          <SettingsContainer />
        </HeaderContainer>
        <InputContainer>
          <Form>
            <TextArea placeholder="What's your response?" />
          </Form>
          <PostCommentButton />
        </InputContainer>
      </MainContainer>
    )
  }
}

export default CommentsHeader
