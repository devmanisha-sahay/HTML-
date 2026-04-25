function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;
    let result = document.getElementById("result");

    // Simple conversion rates (example values)
    let rates = {
        "INR": { "USD": 0.012, "EUR": 0.011, "INR": 1 },
        "USD": { "INR": 83, "EUR": 0.92, "USD": 1 },
        "EUR": { "INR": 90, "USD": 1.09, "EUR": 1 }
    };

    if (amount === "" || amount <= 0) {
        result.innerHTML = "Please enter a valid amount!";
        return;
    }

    let converted = amount * rates[from][to];
    result.innerHTML = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
