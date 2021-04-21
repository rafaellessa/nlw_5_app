import React from 'react'
import { Text } from 'react-native'
import { Container, Title, Image, SubTitle, ButtonNext, ButtonIcon, Wrapper } from './styles'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Title>
        <Image />
        <SubTitle>
          Não esqueça mais regar suas plantas, nós cuidamos de lembrar você sempre
          que precisar
        </SubTitle>
        <ButtonNext content={<ButtonIcon />} />
      </Wrapper>
    </Container>
  )
}

export default Welcome
