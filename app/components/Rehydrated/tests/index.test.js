/**
 *
 * Tests for Rehydrated
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import Rehydrated from '../index'

describe('<Rehydrated />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Rehydrated />)
    expect(baseElement).toMatchSnapshot()
  })
})
