/**
 *
 * Tests for TextInput
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import TextInput from '../index'

describe('<TextInput />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<TextInput />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 TextInput component', () => {
    const { getAllByTestId } = renderWithIntl(<TextInput />)
    expect(getAllByTestId('text-input').length).toBe(1)
  })
})
