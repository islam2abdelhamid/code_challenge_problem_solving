import { getAverageQuantityPurchasedPerOrder } from './getAveragePurchased';
import { getMaxValueKey } from './getMaxValueKey';
import { getMostPopularBrand } from './getMostPopularBrand';

interface Order {
  id: string;
  aria: string;
  product: string;
  quantity: number;
  brand: string;
}

export const generateStatistics = (orders: string[]) => {
  const ordersMap = {};
  const totalOrders = orders.length;
  orders.forEach((order) => {
    const [, , product, quantity, brand] = order.split(',');
    if (ordersMap[product]) {
      ordersMap[product].quantity += parseInt(quantity);
      if (ordersMap[product].brands[brand]) {
        ordersMap[product].brands[brand]++;
      } else {
        ordersMap[product].brands[brand] = 1;
      }
    } else {
      ordersMap[product] = {};
      ordersMap[product].quantity = parseInt(quantity);
      ordersMap[product].brands = {};
      ordersMap[product].brands[brand] = 1;
    }
  });

  const csv0 = getAverageQuantityPurchasedPerOrder(ordersMap, totalOrders);
  const csv1 = getMostPopularBrand(ordersMap);
  return {
    csv0,
    csv1,
  };
};
