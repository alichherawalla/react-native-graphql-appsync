import React, { useEffect } from 'react'
import { RefreshControl, ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { PropTypes } from 'prop-types'
import { FAB, List } from 'react-native-paper'
import { createStructuredSelector } from 'reselect'
import get from 'lodash/get'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { injectIntl } from 'react-intl'
import AppContainer from 'app/components/Container'
import For from 'app/components/For'
import NavigationService from 'app/services/NavigationService'
import { getAppBarWithMenu } from 'app/components/AppBar'
import If from 'app/components/If'
import ProgressPlaceholder from 'app/components/ProgressPlaceholder'
import { withAuthenticator } from 'aws-amplify-react-native'
import { NEW_EMPLOYEE, SIGNUP_CONFIG, timeout } from 'app/utils'
import { colors } from 'app/themes'
import {
  selectEmployeeData,
  selectEmployeeDataError,
  selectLoadingEmployeeData
} from './selectors'
import { HomeScreenActions } from './reducer'

function HomeScreen({
  intl,
  employeeData,
  loadingEmployeeData,
  fetchEmployeeData,
  dispatchRequestDeleteEmployee
}) {
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    fetchEmployeeData()
    timeout(2000).then(() => setRefreshing(false))
  }, [refreshing])

  useEffect(() => {
    fetchEmployeeData()
  }, [])
  const handleEmployeeDelete = employee => {
    dispatchRequestDeleteEmployee(employee)
    NavigationService.navigateAndReset('HomeScreen')
  }
  const navigate = (screeName, params) => () =>
    NavigationService.navigate(screeName, params)

  const renderListItem = employee => (
    <List.Item
      onPress={navigate('EmployeeDetails', {
        employee,
        handleEmployeeDelete
      })}
      title={employee.firstname}
      description={`Addresses: ${get(
        employee,
        'address.items.length',
        0
      )}\nSkills: ${get(employee, 'skills.items.length', 0)}`}
    />
  )
  return (
    <>
      {getAppBarWithMenu(intl.formatMessage({ id: 'employee_list' }))}
      <AppContainer>
        <ProgressPlaceholder
          show={loadingEmployeeData}
          placeholderText="Fetching employee data"
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <If condition={!!employeeData}>
            <For of={employeeData} renderItem={renderListItem} />
          </If>
        </ScrollView>
        <FAB
          style={styles.fab}
          color={colors.white}
          icon="plus"
          onPress={navigate('EditEmployeeDetailsScreen', NEW_EMPLOYEE)}
        />
      </AppContainer>
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: colors.purple,
    margin: 16,
    right: 0,
    bottom: 0
  }
})
HomeScreen.propTypes = {
  fetchEmployeeData: PropTypes.func,
  intl: PropTypes.object,
  employeeData: PropTypes.array,
  loadingEmployeeData: PropTypes.bool,
  dispatchRequestDeleteEmployee: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  employeeData: selectEmployeeData(),
  loadingEmployeeData: selectLoadingEmployeeData(),
  employeeDataError: selectEmployeeDataError()
})

const mapDispatchToProps = dispatch => ({
  fetchEmployeeData: () => dispatch(HomeScreenActions.requestGetEmployeeData()),
  dispatchRequestDeleteEmployee: employee =>
    dispatch(HomeScreenActions.requestDeleteEmployee(employee))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const authHoC = () =>
  withAuthenticator(HomeScreen, { signUpConfig: SIGNUP_CONFIG })

export const HomeScreenTest = injectIntl(HomeScreen)

const H = graphql(gql`
  query {
    listEmployees {
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
    }
  }
`)(HomeScreen)

export default compose(withConnect, injectIntl, authHoC)(H)
