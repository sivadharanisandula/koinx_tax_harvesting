function SummaryRow({
  label,
  value,
  isProfit,
  blue,
}) {
  return (
    <div className="flex items-center justify-between">
      <p
        className={`text-sm ${
          blue
            ? "text-blue-100"
            : "text-gray-400"
        }`}
      >
        {label}
      </p>

      <p
        className={`font-semibold ${
          isProfit
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default SummaryRow;