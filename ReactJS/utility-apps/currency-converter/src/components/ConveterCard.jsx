import React, { useId } from "react";

const ConveterCard = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        htmlFor={id}
        className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
      >
        {label}
      </label>
      <div className="flex w-full items-center rounded-xl border-none bg-white shadow-sm focus-within:ring-2 focus-within:ring-slate-300">
        {/* Amount Input */}
        <input
          type="number"
          id={id}
          placeholder="100.00"
          className="flex-1 rounded-l-xl px-3 py-2 text-sm bg-gray-50 outline-none placeholder:text-slate-400 disabled:bg-slate-100"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200" />

        {/* Currency Select */}
        <select
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
          className="w-20 rounded-r-xl bg-slate-50 px-3 py-2 text-sm font-medium uppercase outline-none hover:bg-slate-100 disabled:bg-slate-100"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ConveterCard;
