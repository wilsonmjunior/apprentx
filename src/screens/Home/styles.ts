import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Car } from '../../components/CarCard'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme})=> theme.colors.background_primary};
`

export const Content = styled.View`
  margin: 20px;
  flex: 1;
`

export const ListCars = styled(
  FlatList as new () => FlatList<Car>,
).attrs({
  showsVerticalScrollIndicator: false,
})``