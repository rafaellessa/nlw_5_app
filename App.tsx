import React from 'react'
import Welcome from './src/screens/welcome'
import UserIdentification from './src/screens/userIdentification'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'

const App: React.FC = () => {
  // eslint-disable-next-line no-empty-pattern
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if (!fontsLoaded) { return <AppLoading/> }

  return <UserIdentification />
}

export default App
