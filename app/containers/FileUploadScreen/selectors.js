import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the fileUploadScreen state domain
 */

const selectFileUploadScreenDomain = state =>
  (state.fileUpload || initialState).toJS()

/**
 * Other specific selectors
 */

/**
 * Default selector used by FileUploadScreen
 */

const makeSelectFiles = () =>
  createSelector(selectFileUploadScreenDomain, substate => substate.files)

export { makeSelectFiles, selectFileUploadScreenDomain }
