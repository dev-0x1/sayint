import React, { Component } from 'react'
import { arrowDown, arrowUp } from '../../../../res/images'
import {
  MainContainer,
  CommentContainer,
  NotifyContainer,
  DownArrowContainer,
  DownArrowIcon,
  CommentText,
  NotifyText,
  ToolTip,
  ToolTipArrow,
  ToolTipItemText,
  ToolTipItem
} from './styledComponents'

class FeedbackItemFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAssigneeSelected: false
    }
  }
  handleAssigneeSelected = () => {
    this.setState({ isAssigneeSelected: !this.state.isAssigneeSelected })
  }
  render() {
    return (
      <MainContainer>
        <CommentContainer
          onClick={() => {
            this.handleAssigneeSelected()
          }}
        >
          <CommentText>Assign to someone</CommentText>
          <DownArrowContainer>
            <DownArrowIcon
              src={this.state.isAssigneeSelected ? arrowUp : arrowDown}
            />
          </DownArrowContainer>
        </CommentContainer>
        {this.state.isAssigneeSelected ? (
          <ToolTip style={{ left: '0px', top: '30px' }}>
            <ToolTipArrow />
            <ToolTipItem>
              <ToolTipItemText>ToolTip Component</ToolTipItemText>
            </ToolTipItem>
          </ToolTip>
        ) : null}
        <NotifyContainer>
          <NotifyText>Resolve</NotifyText>
        </NotifyContainer>
      </MainContainer>
    )
  }
}

export default FeedbackItemFooter
