/**
 *
 * LabelledText
 * This component consists of a Label above the text and a value associated
 * to that particular label.
 * Doesn't render anything if value is absent.
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import T from 'app/components/T'
import If from 'app/components/If'

function LabelledText({ labelId = '', value = null }) {
  return (
    <If condition={!!value}>
      <View testID="labelled-text" style={styles.labelledView}>
        <T id={labelId} size="small" />
        <T text={value} size="small" />
      </View>
    </If>
  )
}
const styles = StyleSheet.create({
  labelledView: {
    marginVertical: 4,
    marginHorizontal: 4
  }
})
LabelledText.propTypes = {
  labelId: PropTypes.string,
  value: PropTypes.string
}

export default LabelledText
