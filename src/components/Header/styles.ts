import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({theme})=> theme.colors.header};

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px 24px;
`

export const TotalCars = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`
