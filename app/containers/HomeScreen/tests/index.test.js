/**
 *
 * Tests for HomeScreen
 *
 */

import React from 'react'
import { renderProvider } from 'app/utils/testUtils'
import { HomeScreenTest } from '../index'

describe('<HomeScreen />', () => {
  let submitSpy

  beforeAll(() => {
    submitSpy = jest.fn()
  })

  it('Should render and match the snapshot', () => {
    const { container } = renderProvider(
      <HomeScreenTest fetchEmployeeData={submitSpy} fetchUser={submitSpy} />
    )
    expect(container.children[0]).toMatchSnapshot()
  })

  it('should fetch the employee data on mount', () => {
    renderProvider(<HomeScreenTest fetchEmployeeData={submitSpy} />)
    expect(submitSpy).toHaveBeenCalled()
  })
})
