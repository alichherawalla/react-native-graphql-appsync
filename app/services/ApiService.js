import { listEmployees } from 'app/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { createAddress, createEmployee } from 'app/graphql/mutations'

export const getEmployees = (limit, offset) =>
  API.graphql(graphqlOperation(listEmployees, { limit, offset })).catch(() => ({
    error: 'something went wrong'
  }))

export const newEmployee = employee =>
  API.graphql(
    graphqlOperation(createEmployee, { input: employee })
  ).catch(() => ({ error: 'something went wrong' }))

export const newAddress = address =>
  API.graphql(graphqlOperation(createAddress, { input: address })).catch(
    () => ({
      error: 'something went wrong'
    })
  )
