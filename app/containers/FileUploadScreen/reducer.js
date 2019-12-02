/*
 *
 * FileUploadScreen reducer
 *
 */
import produce from 'immer'
import { fromJS } from 'immutable'
import { createActions } from 'reduxsauce'

export const initialState = fromJS({
  files: {}
})

export const {
  Types: fileUploadScreenTypes,
  Creators: fileUploadScreenCreators
} = createActions({
  requestUploadFile: ['fileName'],
  successUploadFile: ['fileName'],
  failureUploadFile: ['fileName']
})

/* eslint-disable default-case, no-param-reassign */
export const fileUploadScreenReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case fileUploadScreenTypes.REQUEST_UPLOAD_FILE:
        return state.setIn(['files', `${action.fileName}`], {
          uploading: true
        })
      case fileUploadScreenTypes.SUCCESS_UPLOAD_FILE:
        return state.setIn(['files', `${action.fileName}`], {
          success: true,
          uploading: false
        })
      case fileUploadScreenTypes.FAILURE_UPLOAD_FILE:
        return state.setIn(['files', `${action.fileName}`], {
          success: false,
          uploading: false
        })
      default:
        return state
    }
  })

export default fileUploadScreenReducer
