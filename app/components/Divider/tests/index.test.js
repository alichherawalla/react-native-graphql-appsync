/**
 *
 * Tests for Divider
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import Divider from '../index'

describe('<Divider />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Divider />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 Divider component', () => {
    const { getAllByTestId } = renderWithIntl(<Divider />)
    expect(getAllByTestId('divider').length).toBe(1)
  })
})
