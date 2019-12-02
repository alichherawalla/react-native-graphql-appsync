/**
 *
 * EmployeeDetails
 * This component is meant to show the employee details.
 * It wil show the addresses, skills and other details of an employee
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'
import get from 'lodash/get'
import { injectIntl } from 'react-intl'
import Container from 'app/components/Container'
import T from 'app/components/T'
import LabelledText from 'app/components/LabelledText'
import For from 'app/components/For'
import Divider from 'app/components/Divider'

import { getAppBarWithBack } from 'app/components/AppBar'
import NavigationService from 'app/services/NavigationService'

function EmployeeDetails({
  intl,
  handleEmployeeDelete,
  navigation: {
    state: {
      params: { employee }
    }
  }
}) {
  const renderAddresses = address => (
    <View>
      <LabelledText labelId="line_1" value={get(address, 'line1', '')} />
      <LabelledText labelId="line_2" value={get(address, 'line2', '')} />
      <LabelledText labelId="city" value={get(address, 'city', '')} />
      <LabelledText labelId="state" value={get(address, 'state', '')} />
      <LabelledText labelId="zipcode" value={get(address, 'zipcode', '')} />
      <Divider marginHorizontal={4} />
    </View>
  )

  const renderSkills = skill => (
    <View>
      <T text={get(skill, 'name', '')} />
      <Divider marginHorizontal={4} />
    </View>
  )

  const renderBackMenuWithDeleteAndEdit = () =>
    getAppBarWithBack(intl.formatMessage({ id: 'employee_details' }), [
      {
        type: 'pencil',
        onPress: () => {
          NavigationService.navigate('EditEmployeeDetailsScreen', {
            employee,
            isEditing: true
          })
        }
      },
      {
        type: 'delete',
        onPress: e => handleEmployeeDelete(e)
      }
    ])

  return (
    <Container testID="employee-details">
      {renderBackMenuWithDeleteAndEdit()}
      <ScrollView style={styles.container}>
        <T size="regular" weight="bold" id="employee_details" />
        <Divider />
        <LabelledText labelId="first_name" value={get(employee, 'firstname')} />
        <LabelledText labelId="last_name" value={get(employee, 'lastname')} />

        <Divider />
        <List.Accordion
          title={intl.formatMessage(
            { id: 'address' },
            { length: get(employee, 'address.length', 0) }
          )}
        >
          <For
            marginLeft={20}
            of={employee.address}
            renderItem={renderAddresses}
          />
        </List.Accordion>

        <Divider />
        <List.Accordion
          title={intl.formatMessage(
            { id: 'skills' },
            { length: get(employee, 'skills.length', 0) }
          )}
        >
          <For marginLeft={20} of={employee.skills} renderItem={renderSkills} />
        </List.Accordion>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12
  }
})
EmployeeDetails.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object,
  state: PropTypes.object,
  params: PropTypes.object,
  handleEmployeeDelete: PropTypes.func,
  employee: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.arrayOf(
      PropTypes.shape({
        line1: PropTypes.string,
        line2: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.string
      })
    ),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      })
    )
  }).isRequired
}

EmployeeDetails.defaultProps = {
  handleEmployeeDelete: () => {}
}

export default injectIntl(EmployeeDetails)
