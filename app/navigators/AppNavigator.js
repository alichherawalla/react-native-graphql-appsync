import React from 'react'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation'
import { SafeAreaView, ScrollView } from 'react-native'
import { Drawer } from 'react-native-paper'
import SplashScreen from 'app/components/SplashScreen/'
import HomeScreen from 'app/containers/HomeScreen'
import EditEmployeeDetailsScreen from 'app/containers/EditEmployeeDetailsScreen'
import FileUploadScreen from 'app/containers/FileUploadScreen'
import EmployeeDetails from 'app/components/EmployeeDetails'
import NavigationService from 'app/services/NavigationService'

const StackNavigator = createStackNavigator(
  {
    SplashScreen,
    HomeScreen,
    EditEmployeeDetailsScreen,
    EmployeeDetails,
    FileUploadScreen
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }
)
const DrawerNavigator = createDrawerNavigator(
  {
    SplashScreen: StackNavigator
  },
  {
    contentComponent: () => (
      <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <Drawer.Item
            label="Employee details"
            active="true"
            onPress={() => NavigationService.navigate('HomeScreen')}
          />
          <Drawer.Item
            label="File Upload"
            active="true"
            onPress={() => NavigationService.navigate('FileUploadScreen')}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
)

export default createAppContainer(DrawerNavigator)
