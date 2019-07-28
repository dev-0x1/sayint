import React, { Component } from 'react'
import { arrowDown, arrowUp } from '../../../../res/images'
import {
  MainContainer,
  CommentContainer,
  NotifyContainer,
  CommentOval,
  DownArrowContainer,
  CommentDropDown,
  NotifyDropDown,
  DownArrowIcon,
  CommentText,
  NotifyText,
  NotifyTextSelected,
  ToolTip,
  ToolTipArrow,
  ToolTipItemText,
  ToolTipItem
} from './styledComponents'

class FeedbackItemHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCommentSelected: false,
      isNotifySelected: false
    }
  }
  handleCommentSelected = () => {
    this.setState({ isCommentSelected: !this.state.isCommentSelected })
  }
  handleNotifySelected = () => {
    this.setState({ isNotifySelected: !this.state.isNotifySelected })
  }
  render() {
    return (
      <MainContainer>
        <CommentContainer
          onClick={() => {
            this.handleCommentSelected()
          }}
        >
          <CommentOval />
          <CommentText>Team comment</CommentText>
          <DownArrowContainer>
            <DownArrowIcon
              src={this.state.isCommentSelected ? arrowUp : arrowDown}
            />
          </DownArrowContainer>
        </CommentContainer>
        {this.state.isCommentSelected ? (
          <ToolTip style={{ left: '-15px', top: '35px' }}>
            <ToolTipArrow />
            <ToolTipItem>
              <ToolTipItemText>ToolTip Component</ToolTipItemText>
            </ToolTipItem>
          </ToolTip>
        ) : null}
        <NotifyContainer
          onClick={() => {
            this.handleNotifySelected()
          }}
        >
          <NotifyText>Notify: </NotifyText>
          <NotifyTextSelected>None</NotifyTextSelected>
          <DownArrowContainer>
            <DownArrowIcon
              src={this.state.isNotifySelected ? arrowUp : arrowDown}
            />
          </DownArrowContainer>
        </NotifyContainer>
        {this.state.isNotifySelected ? (
          <ToolTip style={{ top: '35px', left: '35px' }}>
            <ToolTipArrow />
            <ToolTipItem>
              <ToolTipItemText>ToolTip Component</ToolTipItemText>
            </ToolTipItem>
          </ToolTip>
        ) : null}
      </MainContainer>
    )
  }
}

export default FeedbackItemHeader
