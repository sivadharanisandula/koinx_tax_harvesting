export const holdingsData = [
  {
    id: 1,
    coin: "ETH",
    coinName: "Ethereum",
    logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    currentPrice: 216182,
    totalHolding: 0.5,
    averageBuyPrice: 250000,

    stcg: {
      balance: 0.5,
      gain: -5000,
    },

    ltcg: {
      balance: 0,
      gain: 0,
    },
  },

  {
    id: 2,
    coin: "BTC",
    coinName: "Bitcoin",
    logo: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    currentPrice: 5200000,
    totalHolding: 0.1,
    averageBuyPrice: 4800000,

    stcg: {
      balance: 0.1,
      gain: 4000,
    },

    ltcg: {
      balance: 0,
      gain: 0,
    },
  },

  {
    id: 3,
    coin: "USDC",
    coinName: "USDC",
    logo: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png",

    currentPrice: 85.41,
    totalHolding: 0.0015,
    averageBuyPrice: 1.58,

    stcg: {
      balance: 0.0015,
      gain: 0.12,
    },

    ltcg: {
      balance: 0,
      gain: 0,
    },
  },

  {
    id: 4,
    coin: "USDC",
    coinName:
      "Bridged USDC (Polygon PoS Bridge)",

    logo: "https://coin-images.coingecko.com/coins/images/33000/large/usdc.png",

    currentPrice: 85.41,
    totalHolding: 0.0058,
    averageBuyPrice: 1.54,

    stcg: {
      balance: 0.0058,
      gain: 0.48,
    },

    ltcg: {
      balance: 0,
      gain: 0,
    },
  },
];

export const capitalGainsData = {
  capitalGains: {
    stcg: {
      profits: 70200.88,
      losses: 1548.53,
    },

    ltcg: {
      profits: 5020,
      losses: 3050,
    },
  },
};