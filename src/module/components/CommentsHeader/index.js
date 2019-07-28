import React, { Component } from 'react'
import { search } from '../../../res/images'
// import Checkbox from '@material-ui/core/Checkbox'
import {
  MainContainer,
  TopContainer,
  CommentsText,
  CheckboxText,
  InputContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon
} from './styledComponents'

class CommentsHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: true
    }
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  render() {
    return (
      <MainContainer>
        <TopContainer>
          <CommentsText>Comments</CommentsText>
          <CheckboxText>Current page only</CheckboxText>
        </TopContainer>
        <InputContainer>
          <SearchIconContainer>
            <SearchIcon src={search} />
          </SearchIconContainer>
          <SearchInput placeholder="Search in comments" />
        </InputContainer>
      </MainContainer>
    )
  }
}

export default CommentsHeader
