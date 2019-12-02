/**
 *
 * For
 *
 */

import React from 'react'
import Proptypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

/**
 *
 */
export function For({
  of,
  ParentComponent = View,
  renderItem,
  flexDirection = 'column',
  marginLeft = 0
}) {
  const styles = StyleSheet.create({ parent: { flexDirection, marginLeft } })
  const list = () =>
    of.map((item, index) => ({ ...renderItem(item, index), key: index }))
  const children = () => (
    <ParentComponent testID="for" style={styles.parent}>
      {list()}
    </ParentComponent>
  )
  return (of || []).length ? children() : null
}

For.propTypes = {
  of: Proptypes.array,
  type: Proptypes.node,
  parent: Proptypes.object,
  iteratee: Proptypes.string,
  renderItem: Proptypes.func.isRequired
}
export default For
