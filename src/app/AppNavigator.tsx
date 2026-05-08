import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootTabsNavigator } from '../navigation/RootTabsNavigator';

export function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootTabsNavigator />
    </NavigationContainer>
  );
}