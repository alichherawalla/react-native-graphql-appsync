/**
 *
 * FileUploadScreen
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ProgressBar } from 'react-native-paper'
import { ScrollView, StyleSheet, View } from 'react-native'
import { injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import Container from 'app/components/Container'
import T from 'app/components/T'
import For from 'app/components/For'
import If from 'app/components/If'
import { getAppBarWithBack } from 'app/components/AppBar'
import Divider from 'app/components/Divider'
import { fileUploadScreenCreators } from './reducer'
import { makeSelectFiles } from './selectors'

export function FileUploadScreen({ intl, files, requestUploadFile }) {
  useEffect(() => {
    uploadFile()
  }, [])
  const uploadFile = () => {
    const fileName = `essay${new Date().getTime() +
      Math.random() * Math.random()}.txt`
    requestUploadFile(fileName)
  }

  const renderListItem = fileName => {
    if (files[fileName].uploading) {
      return <ProgressBar indeterminate />
    }
    return <ProgressBar progress={files[fileName].success ? 1 : 0} />
  }
  return (
    <Container>
      {getAppBarWithBack(intl.formatMessage({ id: 'upload_file' }), [
        {
          type: 'upload',
          onPress: uploadFile
        }
      ])}
      <ScrollView>
        <If condition={files && Object.keys(files).length}>
          <For
            of={Object.keys(files)}
            renderItem={fileName => (
              <View style={styles.listItem}>
                <T text={fileName} />
                {renderListItem(fileName)}
                <Divider />
              </View>
            )}
          />
        </If>
      </ScrollView>
    </Container>
  )
}

FileUploadScreen.propTypes = {
  intl: PropTypes.object,
  files: PropTypes.object,
  requestUploadFile: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  files: makeSelectFiles()
})

function mapDispatchToProps(dispatch) {
  return {
    requestUploadFile: fileName =>
      dispatch(fileUploadScreenCreators.requestUploadFile(fileName))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const styles = StyleSheet.create({
  listItem: { margin: 10 }
})

export default compose(withConnect, injectIntl)(FileUploadScreen)

export const FileUploadScreenTest = compose(injectIntl)(FileUploadScreen)
