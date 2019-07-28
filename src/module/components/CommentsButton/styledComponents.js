import styled from 'styled-components'
import { Color } from '../../../res/themes/colors'
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${Color.white};
  width: 95px;
  height: 30px;
  border-radius: 2px;
`
export const ButtonText = styled.p`
  opacity: 0.56;
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color.gunMetal};
`

export const CommentsIcon = styled.img``
export const IconContainer = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 6px;
`
