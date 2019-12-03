/**
 *
 * EditEmployeeDetailsScreen
 *
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { Button, List } from 'react-native-paper'
import Container from 'app/components/Container'
import { ScrollView, StyleSheet, View } from 'react-native'
import get from 'lodash/get'
import For from 'app/components/For'
import TextInput from 'app/components/TextInput'
import PropTypes from 'prop-types'
import isString from 'lodash/isString'
import { getAppBarWithBack } from 'app/components/AppBar'
import Divider from 'app/components/Divider'
import makeSelectEditEmployeeDetailsScreen, {
  selectEmployeeDetails
} from './selectors'
import { EditEmployeeDetailsScreenCreators } from './reducer'
import NavigationService from '../../services/NavigationService'

export function EditEmployeeDetailsScreen({
  intl,
  createNewEmployee,
  updateNewEmployee,
  employeeDetails,
  navigation: {
    state: {
      params: { employee: e, isEditing }
    }
  }
}) {
  const [employee, setEmployee] = useState(employeeDetails || e)
  const handleChangeText = (index, key, property, value) => {
    const employeeClone = { ...employee }
    if (!isString(value)) {
      // if it's not a string then we need to add a new entry in the key array
      employeeClone[key] = employeeClone[key].splice(0, 0, {})
    } else if (key) {
      employeeClone[key][index][property] = value
    } else {
      employeeClone[property] = value
    }
    setEmployee(employeeClone)
  }
  const renderAddresses = (address, index) => {
    const handleChange = (property, value) =>
      handleChangeText(index, 'address', property, value)
    return (
      <View>
        <TextInput
          label={intl.formatMessage({ id: 'line_1' })}
          value={get(address, 'line1', '')}
          onChangeText={text => handleChange('line1', text)}
        />
        <TextInput
          label={intl.formatMessage({ id: 'line_2' })}
          value={get(address, 'line2', '')}
          onChangeText={text => handleChange('line2', text)}
        />
        <TextInput
          label={intl.formatMessage({ id: 'city' })}
          value={get(address, 'city', '')}
          onChangeText={text => handleChange('city', text)}
        />
        <TextInput
          label={intl.formatMessage({ id: 'state' })}
          value={get(address, 'state', '')}
          onChangeText={text => handleChange('state', text)}
        />
        <TextInput
          label={intl.formatMessage({ id: 'zipcode' })}
          value={get(address, 'zipcode', '')}
          onChangeText={text => handleChange('zipcode', text)}
        />
        <Divider marginHorizontal={4} />
      </View>
    )
  }

  const renderSkills = (skill, index) => (
    <View>
      <TextInput
        label={intl.formatMessage({ id: 'name' })}
        value={get(skill, 'name', '')}
        onChangeText={text => handleChangeText(index, 'skills', 'name', text)}
      />
      <Divider marginHorizontal={4} />
    </View>
  )
  return (
    <Container>
      {getAppBarWithBack(
        intl.formatMessage({
          id: isEditing ? 'edit_details' : 'create_employee'
        })
      )}
      <ScrollView style={styles.container}>
        <TextInput
          mode="outlined"
          label={intl.formatMessage({ id: 'first_name' })}
          value={get(employee, 'firstname')}
          onChangeText={text => handleChangeText(null, null, 'firstname', text)}
        />
        <TextInput
          label={intl.formatMessage({ id: 'last_name' })}
          value={get(employee, 'lastname')}
          onChangeText={text => handleChangeText(null, null, 'lastname', text)}
        />

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
      <Button
        onPress={() => {
          // true for update else we should create
          if (isEditing) {
            updateNewEmployee(employee)
          } else {
            createNewEmployee(employee)
          }
          NavigationService.navigateAndReset('HomeScreen')
        }}
        uppercase
        mode="outlined"
      >
        {intl.formatMessage({ id: isEditing ? 'update' : 'create' })}
      </Button>
    </Container>
  )
}

const employeeShape = PropTypes.shape({
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
})
EditEmployeeDetailsScreen.propTypes = {
  intl: PropTypes.object,
  navigation: PropTypes.object,
  state: PropTypes.object,
  params: PropTypes.object,
  createNewEmployee: PropTypes.func,
  updateNewEmployee: PropTypes.func,
  employeeDetails: employeeShape,
  employee: employeeShape
}
const styles = StyleSheet.create({
  container: {
    margin: 12
  },
  itemContainer: {
    flexDirection: 'row'
  }
})
const mapStateToProps = createStructuredSelector({
  EditEmployeeDetailsScreen: makeSelectEditEmployeeDetailsScreen(),
  employeeDetails: selectEmployeeDetails()
})

function mapDispatchToProps(dispatch) {
  return {
    createNewEmployee: employee =>
      dispatch(EditEmployeeDetailsScreenCreators.requestNewEmployee(employee)),
    updateNewEmployee: employee =>
      dispatch(
        EditEmployeeDetailsScreenCreators.requestUpdateEmployee(employee)
      )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, injectIntl)(EditEmployeeDetailsScreen)

export const EditEmployeeDetailsScreenTest = compose(injectIntl)(
  EditEmployeeDetailsScreen
)
