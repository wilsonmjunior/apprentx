import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'

import { useIconFuel } from '../../hooks/useIconFuel'
import { usePriceFormatted } from '../../hooks/usePriceFormatted'
import { RouteScreenProps } from '../../routes/app.routes'

import {
  Container, 
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period, 
  Price,
  Type,
  CarImage,
} from './styles'

export interface Car {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  fuel: string
  thumbnail: string
}

interface Props {
  data: Car
}

export function CarCard({ data: { brand, name, rent, fuel, thumbnail } }: Props) {
  const { navigate } = useNavigation<RouteScreenProps>()

  const Icon = useIconFuel({ name: fuel })
  const price = usePriceFormatted({ price: rent.price })

  const handleOpenDetails = useCallback(() => {
    navigate('CarDetails')
  }, [])

  return (
    <Container onPress={handleOpenDetails}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{price}</Price>
          </Rent>

          <Type>
            <Icon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: thumbnail }} />
    </Container>
  )
}
