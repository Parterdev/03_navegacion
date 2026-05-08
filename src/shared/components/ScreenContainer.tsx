import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
}

export function ScreenContainer({
  children,
  style,
  ...props
}: ScreenContainerProps): React.JSX.Element {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
});