/**
 *
 * T
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { rnFontSizeAdapter, rnFontWeightAdapter } from 'app/utils'

const T = ({
  intl,
  id,
  values,
  text,
  size = 'small',
  weight = 'normal',
  color
}) => {
  const styles = StyleSheet.create({
    text: {
      ...rnFontSizeAdapter(size),
      ...rnFontWeightAdapter(weight),
      color
    }
  })
  text = text || intl.formatMessage({ id }, { ...values })
  return (
    <Text testID="t" style={styles.text}>
      {text}
    </Text>
  )
}

T.propTypes = {
  id: PropTypes.string,
  intl: PropTypes.object,
  values: PropTypes.object,
  size: PropTypes.string,
  weight: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string
}

export default compose(injectIntl)(T)
