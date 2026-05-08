import { NavigatorScreenParams } from '@react-navigation/native';

import { CatalogItem } from '../features/catalog/domain/CatalogItem';

export type CatalogStackParamList = {
  ListaScreen: undefined;
  DetalleScreen: {
    item: CatalogItem;
  };
};

export type RootTabParamList = {
  CatalogoTab: NavigatorScreenParams<CatalogStackParamList>;
  AcercaDeTab: undefined;
};