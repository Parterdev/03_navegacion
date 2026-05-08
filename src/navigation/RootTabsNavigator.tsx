import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AcercaDeScreen } from '../features/about/screens/AcercaDeScreen';
import { RootTabParamList } from './navigationTypes';
import { CatalogStackNavigator } from './CatalogStackNavigator';
import { colors } from '../shared/styles/colors';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootTabsNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="CatalogoTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
      }}
    >
      <Tab.Screen
        name="CatalogoTab"
        component={CatalogStackNavigator}
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: focused ? 22 : 20 }}>📋</Text>
          ),
        }}
      />

      <Tab.Screen
        name="AcercaDeTab"
        component={AcercaDeScreen}
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ focused }) => (
            <Text style={{ fontSize: focused ? 22 : 20 }}>ℹ️</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}