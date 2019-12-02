/**
 *
 * Tests for EditEmployeeDetailsScreen
 *
 *
 */

import React from 'react'
import { renderProvider } from 'app/utils/testUtils'
// import { fireEvent } from '@testing-library/dom'
import { EditEmployeeDetailsScreenTest as EditEmployeeDetailsScreen } from '../index'
import { employeeData } from '../../../utils/mockResponse'

describe('<EditEmployeeDetailsScreen /> container tests', () => {
  const props = {}

  beforeEach(() => {
    props.navigation = {
      state: {
        params: { employee: employeeData()[0] }
      }
    }
  })
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(
      <EditEmployeeDetailsScreen {...props} />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
