import { call, put, takeEvery } from 'redux-saga/effects'
import get from 'lodash/get'
import { Storage } from 'aws-amplify'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import { fileUploadScreenCreators, fileUploadScreenTypes } from './reducer'

// Individual exports for testing
const { REQUEST_UPLOAD_FILE } = fileUploadScreenTypes

export function* uploadFileToS3(action) {
  // eslint-disable-next-line
  const uri = action.fileUri || resolveAssetSource(require('../../assets/videos/mockVideo.mp4')).uri
  const file = yield call(fetch, uri)
  // eslint-disable-next-line no-underscore-dangle
  const response = yield call(Storage.put, action.fileName, file._bodyBlob, {
    level: 'public',
    contentType: 'video/mp4'
  })
  if (get(response, 'key')) {
    yield put(fileUploadScreenCreators.successUploadFile(action.fileName))
  } else {
    yield put(fileUploadScreenCreators.failureUploadFile(action.fileName))
  }
}

export default function* fileUploadScreenSaga() {
  yield takeEvery(REQUEST_UPLOAD_FILE, uploadFileToS3)
}
