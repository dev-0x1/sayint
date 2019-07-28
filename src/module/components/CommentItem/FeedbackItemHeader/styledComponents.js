import styled from 'styled-components'
import { Color } from '../../../../res/themes/colors'
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 15px;
  margin-left: 15px;
  position: relative;
`
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const NotifyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const CommentOval = styled.div`
  width: 5px;
  height: 5px;
  margin-right: 4px;
  background-color: #6d57fc;
  border-radius: 50%;
`
export const DownArrowContainer = styled.div`
  margin-left: 4px;
  width: 14px;
  height: 14px;
  object-fit: contain;
`
export const CommentDropDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const NotifyDropDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const DownArrowIcon = styled.img``

export const CommentText = styled.p`
  margin-top: 12px;
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color.blueGrey};
`
export const NotifyText = styled.p`
  &&& {
    margin-top: 12px;
  }
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${Color.blueGrey};
`
export const NotifyTextSelected = styled.p`
  margin-top: 12px;
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${Color.gunMetal};
`
export const ToolTip = styled.div`
  width: 212px;
  height: 74px;
  z-index: 100;
  border-radius: 1px;
  background-color: #242424;
  position: absolute;
  left: 758px;
  top: 161px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: inline-block;
`
export const ToolTipArrow = styled.div`
  z-index: 100;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
`
export const ToolTipItemText = styled.p`
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`
export const ToolTipItem = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 6px;
  margin-right: 6px;
  opacity: 0.3;
  border-radius: 2px;
`
