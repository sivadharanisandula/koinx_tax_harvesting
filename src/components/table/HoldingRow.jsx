import { formatCurrency } from "../../utils/currency";

function HoldingRow({
  holding,
  isSelected,
  onSelect,
}) {
  return (
    <tr
      className={`border-b border-gray-800 transition-all duration-200 ${
        isSelected
          ? "bg-blue-500/10"
          : "hover:bg-[#161b26]"
      }`}
    >
      <td className="p-4">
        <input
          type="checkbox"
          checked={Boolean(isSelected)}
          onChange={() => onSelect(holding)}
          className="w-4 h-4 cursor-pointer accent-blue-500"
        />
      </td>

      <td className="p-4">
        <div className="flex items-center gap-3">
          <img
            src={holding.logo}
            alt={holding.coin}
            className="w-10 h-10 rounded-full border border-gray-700"
          />

          <div>
            <p className="font-semibold text-white">
              {holding.coin}
            </p>

            <p className="text-xs text-gray-400">
              {holding.coinName}
            </p>
          </div>
        </div>
      </td>

      <td className="p-4">
        <div>
          <p className="font-medium">
            {holding.totalHolding.toFixed(4)}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Avg Buy:
            {" "}
            {formatCurrency(
              holding.averageBuyPrice
            )}
          </p>
        </div>
      </td>

      <td className="p-4 font-medium">
        {formatCurrency(
          holding.currentPrice
        )}
      </td>

      <td
        className={`p-4 font-semibold ${
          holding.stcg.gain >= 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {formatCurrency(
          holding.stcg.gain
        )}
      </td>

      <td
        className={`p-4 font-semibold ${
          holding.ltcg.gain >= 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {formatCurrency(
          holding.ltcg.gain
        )}
      </td>

      <td className="p-4">
        {isSelected ? (
          <div className="inline-flex items-center rounded-lg bg-blue-500/20 border border-blue-500 px-3 py-1 text-sm font-medium text-blue-300">
            {holding.totalHolding.toFixed(
              4
            )}
          </div>
        ) : (
          <span className="text-gray-500">
            -
          </span>
        )}
      </td>
    </tr>
  );
}

export default HoldingRow;