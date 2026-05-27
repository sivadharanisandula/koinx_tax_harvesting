export const calculateCapitalGains = (capitalGains) => {
  const netSTCG =
    capitalGains.stcg.profits -
    capitalGains.stcg.losses;

  const netLTCG =
    capitalGains.ltcg.profits -
    capitalGains.ltcg.losses;

  const realisedCapitalGains =
    netSTCG + netLTCG;

  return {
    netSTCG,
    netLTCG,
    realisedCapitalGains,
  };
};