/**
 * Test fileUploadScreen sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects'
import fileUploadScreenSaga, { uploadFileToS3 } from '../saga'
import { fileUploadScreenTypes } from '../reducer'

describe('FileUploadScreen saga tests', () => {
  const generator = fileUploadScreenSaga()

  it('should start task to watch for REQUEST_UPLOAD_FILE action', () => {
    expect(generator.next().value).toEqual(
      takeEvery(fileUploadScreenTypes.REQUEST_UPLOAD_FILE, uploadFileToS3)
    )
  })
})
