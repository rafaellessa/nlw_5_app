import styled from 'styled-components/native'
import wateringImage from '../../assets/watering.png'
import Button from '../../components/Button'
import colors from '../../utils/colors'
import { Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import fonts from '../../utils/fonts'

export const Container = styled.SafeAreaView`
  flex:1;
`
export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-horizontal: 20px;
`

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  line-height: 34px;
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-horizontal: 20px;
  color: ${colors.heading};
  font-family: ${fonts.text}
`
export const ButtonNext = styled(Button)``

export const ButtonIcon = styled(Feather).attrs({
  name: 'chevron-right'
})`
  font-size: 32px;
  color: ${colors.white}
`

export const Image = styled.Image.attrs({
  source: wateringImage,
  resizeMode: 'contain'
})`
  height: ${Dimensions.get('window').width * 0.7}
`
