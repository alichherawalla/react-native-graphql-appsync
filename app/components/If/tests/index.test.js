/**
 *
 * Tests for If
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import If from '../index'

describe('<If />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<If />)
    expect(baseElement).toMatchSnapshot()
  })
})
