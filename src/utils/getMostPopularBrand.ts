import { getMaxValueKey } from './getMaxValueKey';

export const getMostPopularBrand = (ordersMap) => {
  let csv = ``;
  Object.keys(ordersMap).map((key) => {
    csv += `${key},${getMaxValueKey(ordersMap[key].brands)}\n`;
    return {
      [key]: getMaxValueKey(ordersMap[key].brands),
    };
  });

  return csv;
};
