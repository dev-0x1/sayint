import styled from 'styled-components'
import { Color } from '../../../../res/themes/colors'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 1px -1px rgba(0, 0, 0, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.14);
`
export const HeaderSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
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
