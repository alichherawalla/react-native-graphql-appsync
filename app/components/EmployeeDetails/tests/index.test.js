/**
 *
 * Tests for EmployeeDetails
 *
 */

import React from 'react'
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from 'app/utils/testUtils'
import EmployeeDetails from '../index'
import { employeeData } from '../../../utils/mockResponse'

describe('<EmployeeDetails />', () => {
  const props = {}
  beforeEach(() => {
    props.navigation = {
      state: {
        params: { employee: employeeData()[0] }
      }
    }
  })
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<EmployeeDetails {...props} />)
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 EmployeeDetails component', () => {
    const { getAllByTestId } = renderWithIntl(<EmployeeDetails {...props} />)
    expect(getAllByTestId('employee-details').length).toBe(1)
  })
})
