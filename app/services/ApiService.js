import { listAddresss, listEmployees, listSkills } from 'app/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import {
  createAddress,
  createEmployee,
  createSkill,
  deleteEmployee,
  updateEmployee
} from 'app/graphql/mutations'

import AWSAppSyncClient, { buildMutation } from 'aws-appsync'

import appSyncConfig from 'app/aws-exports'
import gql from 'graphql-tag'
import 'cross-fetch/polyfill'

export const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey
  }
})

export const getEmployees = (limit, offset) =>
  API.graphql(
    graphqlOperation(
      `query ListEmployees(
  $nextToken: String
) {
  listEmployees(nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        } 
      }
      skills {
        items {
          id
          name
        }
      }
    }
    nextToken
  }
}`,
      { limit, offset }
    )
  ).catch(e => ({
    e
  }))

export const newEmployee = async employee =>
  client
    .mutate(
      buildMutation(
        client,
        gql(createEmployee),
        {
          inputType: gql(`input CreateEmployeeInput {
                                    id: ID
                                    firstname: String!
                                    lastname: String!
                            }`),
          variables: {
            input: {
              id: employee.id,
              firstname: employee.firstname,
              lastname: employee.lastname
            }
          }
        },
        () => gql(listEmployees),
        'Employee'
      )
    )
    .catch(e => ({ error: 'something went wrong', e }))

export const putEmployee = employee =>
  client
    .mutate(
      buildMutation(
        client,
        gql(updateEmployee),
        {
          inputType: gql(`input UpdateEmployeeInput {
	id: ID!
	firstname: String
	lastname: String
}`),
          variables: {
            input: {
              id: employee.id,
              firstname: employee.firstname,
              lastname: employee.lastname
            }
          }
        },
        () => gql(listEmployees),
        'Employee'
      )
    )
    .catch(e => ({ error: 'something went wrong', e }))

export const newAddress = async address =>
  client
    .mutate(
      buildMutation(
        client,
        gql(createAddress),
        {
          inputType: gql(`input CreateAddressInput {
                        id: ID
                        line1: String!
                        line2: String
                        city: String!
                        state: String!
                        zipcode: String!
                        addressEmployeeId: ID
}`),
          variables: {
            input: {
              id: address.id,
              line1: address.line1,
              line2: address.line1,
              city: address.city,
              state: address.state,
              zipcode: address.zipcode,
              addressEmployeeId: address.addressEmployeeId
            }
          }
        },
        () => gql(listAddresss),
        'Address'
      )
    )
    .catch(e => ({ error: 'something went wrong', e }))

export const putAddress = async address =>
  client
    .mutate(
      buildMutation(
        client,
        gql(createAddress),
        {
          inputType: gql(`input UpdateAddressInput {
            id: ID!
  line1: String
line2: String
city: String
state: String
zipcode: String
addressEmployeeId: ID
}`),
          variables: {
            input: {
              id: address.id,
              line1: address.line1,
              line2: address.line1,
              city: address.city,
              state: address.state,
              zipcode: address.zipcode,
              addressEmployeeId: address.addressEmployeeId
            }
          }
        },
        () => gql(listAddresss),
        'Address'
      )
    )
    .catch(e => ({
      error: 'something went wrong',
      e
    }))
export const putSkill = skill =>
  client
    .mutate(
      buildMutation(
        client,
        gql(createSkill),
        {
          inputType: gql(`input CreateSkillInput {
                      id: ID
                      name: String!
                      skillEmployeeId: ID
                    }`),
          variables: {
            input: skill
          }
        },
        () => gql(listSkills),
        'Skill'
      )
    )
    .catch(e => ({
      error: 'something went wrong',
      e
    }))

export const newSkills = skill =>
  client
    .mutate(
      buildMutation(
        client,
        gql(createSkill),
        {
          inputType: gql(`input UpdateSkillInput {
	id: ID!
	name: String
	skillEmployeeId: ID
}`),
          variables: {
            input: skill
          }
        },
        () => gql(listSkills),
        'Skill'
      )
    )
    .catch(e => ({
      error: 'something went wrong',
      e
    }))

export const removeEmployee = employee =>
  API.graphql(
    graphqlOperation(deleteEmployee, {
      input: {
        id: employee.id
      }
    })
  ).catch(e => ({
    error: 'something went wrong',
    e
  }))
