import styled from 'styled-components'
import { Color } from '../../res/themes/colors'

export const FeedBackContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Header = styled.div`
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.12);
`
export const CommentsContainer = styled.div`
  width: 280px;
  max-height: 900px;
  border-radius: 3px;
  overflow-y: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: ${Color.pureWhite};
`
