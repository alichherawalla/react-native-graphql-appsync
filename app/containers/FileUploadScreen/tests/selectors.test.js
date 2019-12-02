import { fromJS } from 'immutable'
import { selectFileUploadScreenDomain } from '../selectors'

describe('FileUploadScreen selector tests', () => {
  let mockedState

  beforeEach(() => {
    mockedState = {
      fileUpload: fromJS({})
    }
  })

  it('should select the user state', () => {
    expect(selectFileUploadScreenDomain(mockedState)).toEqual(
      mockedState.fileUpload.toJS()
    )
  })
})
