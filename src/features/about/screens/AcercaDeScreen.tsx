import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/styles/colors';
import { radius } from '../../../shared/styles/radius';
import { spacing } from '../../../shared/styles/spacing';
import { typography } from '../../../shared/styles/typography';

export function AcercaDeScreen(): React.JSX.Element {
  return (
    <ScreenContainer>
      <View style={styles.card}>
        <Text style={styles.title}>Acerca de</Text>

        <View style={styles.appInfo}>
          <Text style={styles.appName}>Catálogo Tech v1.0</Text>
          <Text style={styles.description}>
            App de demostración React Native
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Integrante 1</Text>
          <Text style={styles.value}>Paúl Terán</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Carrera</Text>
          <Text style={styles.value}>Ing. Informática</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Materia</Text>
          <Text style={styles.value}>Apps Móviles</Text>
        </View>
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
  title: {
    fontSize: typography.title,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xl,
  },
  appInfo: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  appName: {
    fontSize: typography.subtitle,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  label: {
    flex: 1,
    fontSize: typography.body,
    color: colors.textMuted,
    fontWeight: '600',
  },
  value: {
    flex: 1,
    fontSize: typography.body,
    color: colors.text,
    fontWeight: '700',
    textAlign: 'right',
  },
});