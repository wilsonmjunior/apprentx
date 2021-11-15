import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'

import {
  Container,
  Header
} from './styles'

export function CarDetails() {
  const { goBack } = useNavigation()

  return (
    <Container>
      <StatusBar
        barStyle="default"
      />

      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>
    </Container>
  )
}
