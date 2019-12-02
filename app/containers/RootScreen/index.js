import React, { Component } from 'react'
import { compose } from 'redux'
import NavigationService from 'app/services/NavigationService'
import AppNavigator from 'app/navigators/AppNavigator'
import Container from 'app/components/Container'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { AppActions } from './reducer'

class RootScreen extends Component {
  componentDidMount() {
    this.props.startup()
  }

  setRefForTopLevelNavigator = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef)
  }

  render() {
    return (
      <Container>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={this.setRefForTopLevelNavigator}
        />
      </Container>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func
}
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(AppActions.startup())
})

const withConnect = connect(null, mapDispatchToProps)

export default compose(withConnect)(RootScreen)
