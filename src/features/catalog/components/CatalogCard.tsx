import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CatalogItem } from '../domain/CatalogItem';
import { colors } from '../../../shared/styles/colors';
import { radius } from '../../../shared/styles/radius';
import { spacing } from '../../../shared/styles/spacing';
import { typography } from '../../../shared/styles/typography';

interface CatalogCardProps {
  item: CatalogItem;
  onPress: (item: CatalogItem) => void;
}

export function CatalogCard({
  item,
  onPress,
}: CatalogCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed ? styles.cardPressed : null,
      ]}
      onPress={() => onPress(item)}
    >
      <View style={styles.imageContainer}>
        <Text style={styles.image}>{item.image}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: {
    opacity: 0.75,
  },
  imageContainer: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    marginRight: spacing.md,
  },
  image: {
    fontSize: 28,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  category: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: typography.small,
    color: colors.textMuted,
  },
  arrow: {
    fontSize: 28,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
});