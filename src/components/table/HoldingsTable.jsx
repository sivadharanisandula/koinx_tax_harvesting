import HoldingRow from "./HoldingRow";

function HoldingsTable({
  holdings,
  selectedHoldings,
  setSelectedHoldings,
}) {
  const handleSelect = (holding) => {
    const exists =
      selectedHoldings.some(
        (item) => item.id === holding.id
      );

    if (exists) {
      setSelectedHoldings(
        selectedHoldings.filter(
          (item) =>
            item.id !== holding.id
        )
      );
    } else {
      setSelectedHoldings([
        ...selectedHoldings,
        holding,
      ]);
    }
  };

  const handleSelectAll = () => {
    if (
      selectedHoldings.length ===
      holdings.length
    ) {
      setSelectedHoldings([]);
    } else {
      setSelectedHoldings(holdings);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">
            Holdings
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Select assets to harvest losses
          </p>
        </div>

        <div className="text-sm text-gray-400">
          Selected:
          {" "}
          <span className="text-white font-semibold">
            {selectedHoldings.length}
          </span>
        </div>
      </div>

      <div className="bg-[#111827] rounded-2xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead className="bg-[#1f2937] text-gray-300">
              <tr>
                <th className="p-4">
                  <input
                    type="checkbox"
                    checked={
                      selectedHoldings.length ===
                        holdings.length &&
                      holdings.length > 0
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 cursor-pointer"
                  />
                </th>

                <th className="p-4">Asset</th>

                <th className="p-4">
                  Holdings
                </th>

                <th className="p-4">
                  Current Price
                </th>

                <th className="p-4">
                  Short-Term Gain
                </th>

                <th className="p-4">
                  Long-Term Gain
                </th>

                <th className="p-4">
                  Amount to Sell
                </th>
              </tr>
            </thead>

            <tbody>
              {holdings.map((holding) => {
                const isSelected =
                  selectedHoldings.some(
                    (item) =>
                      item.id === holding.id
                  );

                return (
                  <HoldingRow
                    key={holding.id}
                    holding={holding}
                    isSelected={isSelected}
                    onSelect={handleSelect}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HoldingsTable;