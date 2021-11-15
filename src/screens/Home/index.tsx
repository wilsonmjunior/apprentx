import React from 'react'
import { StatusBar } from 'react-native'
import { Car, CarCard } from '../../components/CarCard'

import { Header } from '../../components/Header'

import {
  Container,
  Content,
  ListCars,
} from './styles'

const cars = [
  {
    brand: 'Porche',
    name: 'Panamera',
    rent: {
      price: 1500,
      period: 'ao dia',
    },
    fuel: 'gasoline',
    thumbnail: "https://evchargeplus.com/wp-content/uploads/2020/01/porsche-panamera-SE-evchargeplus-00.png"
  },
  {
    brand: 'Ferrari',
    name: 'LaFerrari',
    rent: {
      price: 2500,
      period: 'ao dia',
    },
    fuel: 'gasoline',
    thumbnail: "https://www.freepnglogos.com/uploads/ferrari-png/ferrari-south-bay-5.png"
  },
  {
    brand: 'BMW',
    name: '320i',
    rent: {
      price: 300,
      period: 'ao dia',
    },
    fuel: 'gasoline',
    thumbnail: "https://www.nicepng.com/png/full/430-4308000_2018-bmw-m3-sedan-2018-bmw-320i-png.png"
  },
  {
    brand: 'Volkswagen',
    name: 'Polo',
    rent: {
      price: 100,
      period: 'ao dia',
    },
    fuel: 'flex',
    thumbnail: "https://correautovw.com.br/wp-content/uploads/2019/02/novo-polo-highline.png"
  },
  {
    brand: 'Volkswagen',
    name: 'Virtus',
    rent: {
      price: 110,
      period: 'ao dia',
    },
    fuel: 'flex',
    thumbnail: "https://www.nacionalvw.com.br/storage/versions/29/volkswagen-virtus-2020-2020-versao-GTS-250-TSI-frontal.png"
  }
] as Car[]

export function Home() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent 
      />

      <Container>
        <Header />

        <Content>
          <ListCars 
            data={cars}
            keyExtractor={car => String(car.name)}
            renderItem={({ item: car }) => (
              <CarCard data={car} />
            )}
          />
        </Content>
      </Container>
    </>
  )
}
