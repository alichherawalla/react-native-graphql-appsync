import { fork } from 'redux-saga/effects'
import homeSaga from 'app/containers/HomeScreen/saga'
import startupSaga from 'app/containers/RootScreen/saga'
import editEmployeeDetailsSaga from 'app/containers/EditEmployeeDetailsScreen/saga'
import fileUploadSaga from 'app/containers/FileUploadScreen/saga'

export default function* root() {
  yield fork(homeSaga)
  yield fork(startupSaga)
  yield fork(editEmployeeDetailsSaga)
  yield fork(fileUploadSaga)
}
