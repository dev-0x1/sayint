import React, { Component } from 'react'
import { MainContainer } from './styledComponents'
import FeedbackItemHeader from './FeedbackItemHeader'
import FeedbackItemBody from './FeedbackItemBody'
import FeedbackItemFooter from './FeedbackItemFooter'
class CommentItem extends Component {
  render() {
    const { title, uname } = this.props
    return (
      <MainContainer>
        <FeedbackItemHeader />
        <FeedbackItemBody userTitle={title} userName={uname} />
        <FeedbackItemFooter />
      </MainContainer>
    )
  }
}

export default CommentItem
