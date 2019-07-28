import styled from 'styled-components'
import { Color } from '../../../res/themes/colors'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`
export const CommentsText = styled.p`
  font-family: DMSans;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color.gunMetal};
  margin-left: 15px;
`
export const CheckboxText = styled.p`
  opacity: 0.8;
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${Color.gunMetal};
  margin-right: 15px;
`

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 13px;
`
export const SearchInput = styled.input`
  text-align: center;
  border-radius: 3px;
  margin-left: 15px;
  border: solid 1px ${Color.gunMetal};
  background-color: #ffffff;
  opacity: 0.3;
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: ${Color.gunMetal};
  align-items: center;
  width: 250px;
  height: 26px;
`
export const SearchIconContainer = styled.div`
  width: 14px;
  height: 14px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 19px;
  position: absolute;
`
export const SearchIcon = styled.img``
