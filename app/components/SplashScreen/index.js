import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import AppContainer from 'app/components/Container'
import { images } from 'app/themes'
import NavigationService from 'app/services/NavigationService'

const Container = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.Image`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
`

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    NavigationService.setTopLevelNavigator(navigation)
  }, [])

  return (
    <Container testID="splash-screen">
      <Logo source={images.velotioLogo} resizeMode="contain" />
    </Container>
  )
}

SplashScreen.propTypes = {
  navigation: PropTypes.object
}
export default SplashScreen
