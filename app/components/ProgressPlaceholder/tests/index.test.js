/**
 *
 * Tests for ProgressPlaceholder
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import ProgressPlaceholder from '../index'

describe('<ProgressPlaceholder />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<ProgressPlaceholder show />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 ProgressPlaceholder component', () => {
    const { getAllByTestId } = renderWithIntl(<ProgressPlaceholder show />)
    expect(getAllByTestId('progress-placeholder').length).toBe(1)
  })
})
