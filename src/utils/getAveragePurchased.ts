export const getAverageQuantityPurchasedPerOrder = (ordersMap, totalOrders) => {
  let csv = ``;
  Object.keys(ordersMap).map((key) => {
    csv += `${key}, ${ordersMap[key].quantity / totalOrders}\n`;
    return {
      [key]: ordersMap[key].quantity / totalOrders,
    };
  });

  return csv;
};
