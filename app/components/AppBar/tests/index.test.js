/**
 *
 * Tests for AppBar
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import AppBar from '../index'

describe('<AppBar />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<AppBar />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 AppBar component', () => {
    const { getAllByTestId } = renderWithIntl(<AppBar />)
    expect(getAllByTestId('app-bar').length).toBe(1)
  })
})
