import React, { Component } from 'react'
import * as TodoActions from '../actions/todoActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CommentsButton from '../components/CommentsButton'
import CommentsHeader from '../components/CommentsHeader'
import FeedbackItemHeader from '../components/CommentItem/FeedbackItemHeader'
import {
  CommentsContainer,
  Header,
  FeedBackContainer
} from './styledComponents'
import FeedbackItemFooter from '../components/CommentItem/FeedbackItemFooter'
import CommentItem from '../components/CommentItem'
export class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  toggleDevFeedback = () => {
    this.setState({ show: !this.state.show })
    console.log('show', this.state.show)
  }
  renderFeedBackItems = () => {
    const { todos } = this.props
    return todos.map(item => <CommentItem title={item.nat} uname={item.name} />)
  }
  render() {
    console.log('todos', this.props.todos)
    return (
      <FeedBackContainer>
        <CommentsButton
          toggleComments={() => {
            this.toggleDevFeedback()
          }}
        />
        {this.state.show ? (
          <CommentsContainer>
            <Header>
              <CommentsHeader />
            </Header>
            {this.renderFeedBackItems()}
          </CommentsContainer>
        ) : null}
      </FeedBackContainer>
    )
  }
}

// Define the property types of this Container Component

MainContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

// This maps the state to the property of the component

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

// The connect function connects the Redux Dispatch and state to the Todo Container Component.
// Without this the Component wont be functional.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
