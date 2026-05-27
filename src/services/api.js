import {
  holdingsData,
  capitalGainsData,
} from "C:\Users\sivad\taxharvesting\src\data\mockData.js";

export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdingsData);
    }, 500);
  });
};

export const fetchCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(capitalGainsData);
    }, 500);
  });
};