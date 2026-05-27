import SummaryRow from "./SummaryRow";
import { formatCurrency } from "../../utils/currency";

function CapitalGainsCard({
  title,
  capitalGains,
  realisedCapitalGains,
  bgColor,
  savings,
}) {
  const isAfter =
    title === "After Harvesting";

  return (
    <div
      className={`
        rounded-[28px]
        p-7
        w-full
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        hover:scale-[1.01]
        ${bgColor}
      `}
    >
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className={`text-sm mb-2 ${
              isAfter
                ? "text-blue-100"
                : "text-gray-400"
            }`}
          >
            {isAfter
              ? "After harvesting"
              : "Pre harvesting"}
          </p>

          <h2 className="text-2xl font-semibold">
            Capital Gains
          </h2>
        </div>

        <div
          className={`text-xs px-3 py-1 rounded-full ${
            isAfter
              ? "bg-white/20 text-white"
              : "bg-[#242B3D] text-gray-300"
          }`}
        >
          FY 2024-25
        </div>
      </div>

      {/* STCG */}
      <div className="mb-8">
        <p
          className={`text-sm mb-4 ${
            isAfter
              ? "text-blue-100"
              : "text-gray-400"
          }`}
        >
          Short-term
        </p>

        <div className="space-y-3">
          <SummaryRow
            label="Profits"
            value={formatCurrency(
              capitalGains.stcg.profits
            )}
            isProfit={true}
            blue={isAfter}
          />

          <SummaryRow
            label="Losses"
            value={formatCurrency(
              capitalGains.stcg.losses
            )}
            isProfit={false}
            blue={isAfter}
          />
        </div>
      </div>

      {/* LTCG */}
      <div className="mb-8">
        <p
          className={`text-sm mb-4 ${
            isAfter
              ? "text-blue-100"
              : "text-gray-400"
          }`}
        >
          Long-term
        </p>

        <div className="space-y-3">
          <SummaryRow
            label="Profits"
            value={formatCurrency(
              capitalGains.ltcg.profits
            )}
            isProfit={true}
            blue={isAfter}
          />

          <SummaryRow
            label="Losses"
            value={formatCurrency(
              capitalGains.ltcg.losses
            )}
            isProfit={false}
            blue={isAfter}
          />
        </div>
      </div>

      {/* TOTAL */}
      <div
        className={`rounded-2xl p-5 transition-all duration-300 ${
          isAfter
            ? "bg-white/10"
            : "bg-[#0E1421]"
        }`}
      >
        <p
          className={`text-sm mb-2 ${
            isAfter
              ? "text-blue-100"
              : "text-gray-400"
          }`}
        >
          Realised Capital Gains
        </p>

        <h2 className="text-3xl font-bold">
          {formatCurrency(
            realisedCapitalGains
          )}
        </h2>
      </div>

      {/* SAVINGS */}
      {savings > 0 && (
        <div className="mt-5 rounded-2xl bg-green-500/15 border border-green-500/30 p-4 transition-all duration-300 hover:bg-green-500/20">
          <p className="text-green-300 text-sm">
            You're going to save
          </p>

          <h3 className="text-2xl font-bold text-green-400 mt-1">
            {formatCurrency(savings)}
          </h3>
        </div>
      )}
    </div>
  );
}

export default CapitalGainsCard;