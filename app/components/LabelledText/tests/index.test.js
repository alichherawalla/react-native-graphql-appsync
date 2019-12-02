/**
 *
 * Tests for LabelledText
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import LabelledText from '../index'

describe('<LabelledText />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(
      <LabelledText value="something" labelId="employee_details" />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 LabelledText component', () => {
    const { getAllByTestId } = renderWithIntl(
      <LabelledText value="something" labelId="employee_details" />
    )
    expect(getAllByTestId('labelled-text').length).toBe(1)
  })
})
