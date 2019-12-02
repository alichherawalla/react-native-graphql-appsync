/**
 *
 * ProgressPlaceholder
 *
 */

import React from 'react'
import { ProgressBar, Text } from 'react-native-paper'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Container from 'app/components/Container'
import If from 'app/components/If'
import { rnFontSizeAdapter } from 'app/utils'
import { colors } from 'app/themes'

function ProgressPlaceholder({ placeholderText, show }) {
  return (
    <If condition={show}>
      <Container testID="progress-placeholder" style={styles.container}>
        <ProgressBar indeterminate color="blue" />
        <View>
          <Text style={styles.textStyle}>{placeholderText}</Text>
        </View>
      </Container>
    </If>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    display: 'flex'
  },
  textStyle: {
    ...rnFontSizeAdapter('big'),
    textAlign: 'center',
    color: colors.gray
  }
})
ProgressPlaceholder.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  show: PropTypes.bool
}

export default ProgressPlaceholder
