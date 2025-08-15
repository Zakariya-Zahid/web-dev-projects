document.addEventListener("DOMContentLoaded", () => {
  let inputAmount = document.getElementById("amount");
  let fromCurency = document.getElementById("from-currency");
  let toCurrency = document.getElementById("to-currency");
  let convertButton = document.getElementById("convert-button");
  let resultExchange = document.getElementById("result_exchange");
  let errorMessage = document.getElementById("errorMessage");

  // Populate from-currency on load
  fetchCurrencyData().then((data) => {
    populateFromCurrency(data.conversion_rates);
  });

  convertButton.addEventListener("click", async () => {
    try {
      let inputValue = inputAmount.value;
      if (!inputValue) return;

      let conversionData = await fetchCurrencyData();
      DisplayCurrencyData(conversionData, inputValue);
    } catch (error) {
      showError();
    }
  });

  async function fetchCurrencyData() {
    const url = `https://v6.exchangerate-api.com/v6/0dea92952252dec099726ffd/latest/USD`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.result !== "success") {
      showError();
      return;
    }

    return data;
  }

  function populateFromCurrency(rates) {
    fromCurency.innerHTML = "";
    for (let currency in rates) {
      const option = document.createElement("option");
      option.value = currency;
      option.textContent = currency;
      fromCurency.appendChild(option);
    }
  }

  function DisplayCurrencyData(data, value) {
    const from = fromCurency.value;
    const to = toCurrency.value;
    const rates = data.conversion_rates;

    if (!rates[from] || !rates[to]) {
      showError();
      return;
    }

    const convertedAmount = (value / rates[from]) * rates[to];
    resultExchange.innerText = `${value} ${from} = ${convertedAmount.toFixed(
      2
    )} ${to}`;
  }

  function showError() {
    errorMessage.classList.remove("hidden");
  }
});
