import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  fetchCapitalGains,
  fetchHoldings,
} from "../services/api";

import { calculateCapitalGains } from "../utils/calculations";

import CapitalGainsCard from "../components/cards/CapitalGainsCard";

import HoldingsTable from "../components/table/HoldingsTable";

function Dashboard() {
  const [capitalGains, setCapitalGains] =
    useState(null);

  const [holdings, setHoldings] =
    useState([]);

  const [selectedHoldings, setSelectedHoldings] =
    useState([]);

  const [calculatedGains, setCalculatedGains] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const holdingsData =
          await fetchHoldings();

        const gainsResponse =
          await fetchCapitalGains();

        const gains =
          gainsResponse.capitalGains;

        setHoldings(holdingsData);

        setCapitalGains(gains);

        setCalculatedGains(
          calculateCapitalGains(gains)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const updatedCapitalGains = useMemo(() => {
    if (!capitalGains) return null;

    const updated =
      structuredClone(capitalGains);

    selectedHoldings.forEach((holding) => {
      if (holding.stcg.gain > 0) {
        updated.stcg.profits +=
          holding.stcg.gain;
      } else {
        updated.stcg.losses += Math.abs(
          holding.stcg.gain
        );
      }

      if (holding.ltcg.gain > 0) {
        updated.ltcg.profits +=
          holding.ltcg.gain;
      } else {
        updated.ltcg.losses += Math.abs(
          holding.ltcg.gain
        );
      }
    });

    return updated;
  }, [capitalGains, selectedHoldings]);

  const updatedCalculatedGains = useMemo(() => {
    if (!updatedCapitalGains) return null;

    return calculateCapitalGains(
      updatedCapitalGains
    );
  }, [updatedCapitalGains]);

  const savings =
    calculatedGains &&
    updatedCalculatedGains
      ? calculatedGains.realisedCapitalGains -
        updatedCalculatedGains.realisedCapitalGains
      : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-10">
          <p className="text-blue-400 text-sm font-medium mb-2">
            Tax harvesting
          </p>

          <h1 className="text-4xl font-bold">
            Tax Loss Harvesting
          </h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <CapitalGainsCard
            title="Pre Harvesting"
            capitalGains={capitalGains}
            realisedCapitalGains={
              calculatedGains.realisedCapitalGains
            }
            bgColor="bg-[#161B26]"
          />

          <CapitalGainsCard
            title="After Harvesting"
            capitalGains={updatedCapitalGains}
            realisedCapitalGains={
              updatedCalculatedGains.realisedCapitalGains
            }
            bgColor="bg-[#0052FE]"
            savings={savings}
          />
        </div>

        <HoldingsTable
          holdings={holdings}
          selectedHoldings={
            selectedHoldings
          }
          setSelectedHoldings={
            setSelectedHoldings
          }
        />
      </div>
    </div>
  );
}

export default Dashboard;