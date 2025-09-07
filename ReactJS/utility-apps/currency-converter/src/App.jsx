import React, { useState } from "react";
import useCurrency from "./hooks/useCurrency";
import { ConveterCard } from "./components/index.js";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyInfo = useCurrency(from);
  const usdRates = useCurrency("usd");
  const eurRates = useCurrency("eur");
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!amount || !currencyInfo[to]) {
      setConvertedAmount(null);
      return;
    }
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    // swap does not auto-convert → user must click Convert
    setConvertedAmount(null);
  };

  const clearInput = () => {
    setAmount(0);
    setConvertedAmount(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-3xl p-6">
        {/* Header */}
        <header className="mb-8 flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Currency Converter
            </h1>
          </div>
        </header>

        {/* Converter Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="grid gap-4 md:grid-cols-7 items-end"
        >
          {/* From */}
          <div className="md:col-span-3">
            <ConveterCard
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(val) => setAmount(val)}
              selectedCurrency={from}
            />
          </div>

          {/* Swap button */}
          <div className="flex justify-center md:col-span-1">
            <button
              type="button"
              onClick={swap}
              className="mt-6 grid h-10 w-10 place-items-center rounded-xl bg-slate-200 text-slate-600 hover:bg-slate-300"
            >
              ⇄
            </button>
          </div>

          {/* To */}
          <div className="md:col-span-3">
            <ConveterCard
              label="To"
              amount={""} // empty, result only shows below
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>

          {/* Actions */}
          <div className="md:col-span-7 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={clearInput}
              className="rounded-xl border px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              Convert
            </button>
          </div>
        </form>

        {/* Result */}
        {convertedAmount !== null && (
          <div className="mt-6 rounded-xl bg-slate-200 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Result
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <p className="text-2xl font-semibold">
                {convertedAmount.toFixed(2)}
              </p>
              <p className="text-sm text-slate-500">{to.toUpperCase()}</p>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              1 {from.toUpperCase()} ≈ {currencyInfo[to]} {to.toUpperCase()}
            </p>
          </div>
        )}

        {/* Quick Rates (static) */}
        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-slate-700">
            Quick Rates
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border bg-slate-50 p-3 text-center">
              <p className="text-xs text-slate-500">USD → EUR</p>
              <p className="text-lg font-semibold">
                {usdRates.eur ? usdRates.eur.toFixed(4) : "--"}
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-3 text-center">
              <p className="text-xs text-slate-500">USD → GBP</p>
              <p className="text-lg font-semibold">
                {usdRates.gbp ? usdRates.gbp.toFixed(4) : "--"}
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-3 text-center">
              <p className="text-xs text-slate-500">USD → PKR</p>
              <p className="text-lg font-semibold">
                {usdRates.pkr ? usdRates.pkr.toFixed(2) : "--"}
              </p>
            </div>
            <div className="rounded-xl border bg-slate-50 p-3 text-center">
              <p className="text-xs text-slate-500">EUR → PKR</p>
              <p className="text-lg font-semibold">
                {eurRates.pkr ? eurRates.pkr.toFixed(2) : "--"}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex items-center justify-between text-xs text-slate-500">
          <p>© 2025 Currency Converter</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
            <a href="#" className="hover:text-slate-700">
              About
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
