import { combineReducers } from 'redux'
import configureStore from 'app/utils/createStore'
import rootSaga from 'app/rootSaga'
import { homeContainerReducer as homeScreen } from 'app/containers/HomeScreen/reducer'
import { editEmployeeDetailsScreenReducer as editScreen } from 'app/containers/EditEmployeeDetailsScreen/reducer'
import { fileUploadScreenReducer as fileUpload } from 'app/containers/FileUploadScreen/reducer'

export default () => {
  const rootReducer = combineReducers({
    homeScreen,
    editScreen,
    fileUpload
  })

  return configureStore(rootReducer, rootSaga)
}
