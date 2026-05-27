export const formatCurrency = (value) => {
  const formatted =
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Math.abs(value));

  return value < 0
    ? `- ${formatted}`
    : formatted;
};