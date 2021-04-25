import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import Confirmation from "../../screens/confirmation";
import MyPlants from "../../screens/myPlants";
import PlantSave from "../../screens/plantSave";
import UserIdentification from "../../screens/userIdentification";
import Welcome from "../../screens/welcome";
import colors from "../../utils/colors";
import Tab from "../Tab";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "Welcome",
    component: Welcome,
  },
  {
    name: "Confirmation",
    component: Confirmation,
  },
  {
    name: "UserIdentification",
    component: UserIdentification,
  },
  {
    name: "PlantSelect",
    component: Tab,
  },
  {
    name: "PlantSave",
    component: PlantSave,
  },
  {
    name: "MyPlants",
    component: Tab,
  },
];

const NavigationStack: React.FC = () => {
  const Stack = createStackNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Stack.Screen key={name} name={name}>
          {(props) => <Component key={name} {...props} />}
        </Stack.Screen>
      );
    }
  );

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default NavigationStack;
