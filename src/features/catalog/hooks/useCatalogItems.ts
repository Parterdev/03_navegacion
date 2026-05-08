import { catalogItems } from '../data/catalogItems';

export function useCatalogItems() {
  return {
    items: catalogItems,
  };
}