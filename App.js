import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet } from "react-native";

import EmployeeList from "./src/screens/employee-list/employee-list.component";
import AddPersonal from "./src/screens/add-personal/add-personal.component";
import UpdatePersonal from "./src/screens/update-personal/update-personal.component";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Trash from "./src/screens/trash-employee/trash-employee.component";
// import AppProvider from "./AppContext.js";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => (
  // <AppProvider>
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="add-personal" component={AddPersonal} />
        <Stack.Screen name="update-personal" component={UpdatePersonal} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  // </AppProvider>
);

const Main = () => (
  <BottomTab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomTab.Screen
      name="employee-list"
      component={EmployeeList}
      options={{ tabBarLabel: "Trang Chủ", icon: "home-outline" }}
    />
    <BottomTab.Screen
      name="delete-list"
      component={Trash}
      options={{ tabBarLabel: "Xoá", icon: "trash-outline" }}
    />
  </BottomTab.Navigator>
);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
