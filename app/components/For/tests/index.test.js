/**
 *
 * Tests for For
 *
 */

import React from 'react'
import { renderWithIntl } from 'app/utils/testUtils'
import T from 'app/components/T'
import For from '../index'

describe('<For />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(
      <For of={['test']} renderItem={() => <T text="s" />} />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 For component', () => {
    const { getAllByTestId } = renderWithIntl(
      <For of={['test']} renderItem={() => <T text="s" />} />
    )
    expect(getAllByTestId('for').length).toBe(1)
  })
})
