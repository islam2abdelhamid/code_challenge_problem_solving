import { generateStatistics } from '../utils/generateStatistics';

export const getOrdersStatistics = async (data) => {
  return generateStatistics(data);
};
