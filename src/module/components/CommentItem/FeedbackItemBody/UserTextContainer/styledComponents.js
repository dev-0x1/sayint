import styled from 'styled-components'
import { Color } from '../../../../../res/themes/colors'
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`
export const HeaderContainer = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HeartIconContainer = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 9px;
  cursor: pointer;
`
export const HeartIcon = styled.img``
export const TimeText = styled.p`
  font-family: DMSans;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  &&& {
    margin-bottom: 0px;
    margin-top: 3px;
  }
  color: ${Color.blueGrey};
`
export const NameTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NameText = styled.p`
  font-family: DMSans;
  text-transform: capitalize;
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: '#4e5462';
  margin-bottom: 0px;
`
export const ContentText = styled.p`
  font-family: DMSans;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: '#4e5462';
`
