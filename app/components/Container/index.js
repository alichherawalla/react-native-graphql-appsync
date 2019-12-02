/**
 *
 * Container
 *
 */

import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
`
const Container = ({ ...props }) => <StyledContainer {...props} />

Container.propTypes = {}

export default Container
