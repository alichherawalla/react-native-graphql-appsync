/**
 *
 * Tests for FileUploadScreen
 *
 *
 */

import React from 'react'
import { renderProvider } from 'app/utils/testUtils'
// import { fireEvent } from '@testing-library/dom'
import { FileUploadScreenTest as FileUploadScreen } from '../index'

describe('<FileUploadScreen /> container tests', () => {
  let submitSpy

  beforeEach(() => {
    submitSpy = jest.fn()
  })
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(
      <FileUploadScreen requestUploadFile={submitSpy} files={{}} />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
