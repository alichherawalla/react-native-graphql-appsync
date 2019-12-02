/**
 *
 * Divider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Divider as D } from 'react-native-paper'

function Divider({ marginVertical = 10, marginHorizontal = 0 }) {
  const styles = StyleSheet.create({
    divider: { marginVertical, marginHorizontal }
  })
  return <D testID="divider" style={styles.divider} />
}

Divider.propTypes = {
  marginVertical: PropTypes.number,
  marginHorizontal: PropTypes.number
}

export default Divider
