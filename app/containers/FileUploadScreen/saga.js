import { call, put, takeEvery } from 'redux-saga/effects'
import get from 'lodash/get'
import { Storage } from 'aws-amplify'
import { fileUploadScreenCreators, fileUploadScreenTypes } from './reducer'
import { mockEssay } from './mockData'
// Individual exports for testing
const { REQUEST_UPLOAD_FILE } = fileUploadScreenTypes

export function* uploadFileToS3(action) {
  const response = yield call(Storage.put, action.fileName, mockEssay, {
    level: 'public',
    contentType: 'text/plain'
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
