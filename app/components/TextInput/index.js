/**
 *
 * TextInput
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { TextInput as TI } from 'react-native-paper'

function TextInput({
  marginHorizontal = 0,
  marginVertical = 4,
  mode = 'outlined',
  ...otherProps
}) {
  const styles = StyleSheet.create({
    textInput: {
      marginHorizontal,
      marginVertical
    }
  })
  return (
    <TI
      testID="text-input"
      mode={mode}
      {...otherProps}
      style={styles.textInput}
    />
  )
}

TextInput.propTypes = {
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  mode: PropTypes.string
}

export default TextInput
