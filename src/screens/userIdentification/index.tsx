import React, { useState } from 'react'

import { Container, Content, FormContainer, Emoji, Input, Title } from './styles'

const userIdentification: React.FC = () => {
  const [nameUser, setNameUser] = useState<String>('')

  return (
    <Container>
      <Content>
        <FormContainer>
          <Emoji>
            😀
          </Emoji>
          <Title>Como podemos {'\n'} chamar você?</Title>
          <Input value={nameUser} placeholder='Digite seu nome' onChangeText={(value) => {
            setNameUser(value)
          }}/>
        </FormContainer>
      </Content>
    </Container>
  )
}

export default userIdentification
