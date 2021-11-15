import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View``

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${getStatusBarHeight() + 36}px 32px 0;
`
 