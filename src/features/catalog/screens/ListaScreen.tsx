import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { CatalogCard } from '../components/CatalogCard';
import { CatalogItem } from '../domain/CatalogItem';
import { useCatalogItems } from '../hooks/useCatalogItems';
import { CatalogStackParamList } from '../../../navigation/navigationTypes';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/styles/colors';
import { spacing } from '../../../shared/styles/spacing';
import { typography } from '../../../shared/styles/typography';

type ListaScreenNavigationProp = StackNavigationProp<
  CatalogStackParamList,
  'ListaScreen'
>;

export function ListaScreen(): React.JSX.Element {
  const navigation = useNavigation<ListaScreenNavigationProp>();
  const { items } = useCatalogItems();

  const handleItemPress = (item: CatalogItem) => {
    navigation.navigate('DetalleScreen', { item });
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        {/* <Text style={styles.title}>Catálogo</Text> */}
        <Text style={styles.subtitle}>
          Selecciona un producto para ver su información completa.
        </Text>
      </View>

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CatalogCard item={item} onPress={handleItemPress} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.title,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.textMuted,
    lineHeight: 22,
  },
  listContent: {
    paddingBottom: spacing.xl,
  },
});