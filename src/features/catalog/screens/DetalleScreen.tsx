import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { CatalogStackParamList } from '../../../navigation/navigationTypes';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/styles/colors';
import { radius } from '../../../shared/styles/radius';
import { spacing } from '../../../shared/styles/spacing';
import { typography } from '../../../shared/styles/typography';

type DetalleScreenRouteProp = RouteProp<
  CatalogStackParamList,
  'DetalleScreen'
>;

type DetalleScreenNavigationProp = StackNavigationProp<
  CatalogStackParamList,
  'DetalleScreen'
>;

export function DetalleScreen(): React.JSX.Element {
  const route = useRoute<DetalleScreenRouteProp>();
  const navigation = useNavigation<DetalleScreenNavigationProp>();

  const { item } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Text style={styles.image}>{item.image}</Text>
        </View>

        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>

        <Text style={styles.description}>{item.description}</Text>

        <Pressable style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Volver al catálogo</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageContainer: {
    height: 160,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    marginBottom: spacing.xl,
  },
  image: {
    fontSize: 72,
  },
  name: {
    fontSize: typography.title,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  category: {
    fontSize: typography.body,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: spacing.lg,
  },
  description: {
    fontSize: typography.body,
    color: colors.textMuted,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: typography.body,
    color: colors.surface,
    fontWeight: '700',
  },
});