import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ListaScreen } from '../features/catalog/screens/ListaScreen';
import { DetalleScreen } from '../features/catalog/screens/DetalleScreen';
import { CatalogStackParamList } from './navigationTypes';
import { colors } from '../shared/styles/colors';

const Stack = createStackNavigator<CatalogStackParamList>();

export function CatalogStackNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="ListaScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: '800',
        },
      }}
    >
      <Stack.Screen
        name="ListaScreen"
        component={ListaScreen}
        options={{
          title: 'Catálogo',
        }}
      />

      <Stack.Screen
        name="DetalleScreen"
        component={DetalleScreen}
        options={{
          title: 'Detalle',
        }}
      />
    </Stack.Navigator>
  );
}