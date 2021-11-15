import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 126px;
  background-color: ${({theme}) => theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  margin-bottom: 16px;
`

export const Details = styled.View`
  justify-content: space-between;
`

export const Brand = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};
  text-transform: uppercase;
  
  margin-bottom: 4px;
`

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title};
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`

export const Rent = styled.View`
  margin-right: 24px;
`

export const Period = Brand

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.main};
`

export const Type = styled.View``

export const CarImage = styled.Image.attrs({
  resizeMode: "contain"
})`
  width: ${RFValue(140)}px;
  height: ${RFValue(85)}px;
`