{

    const cashAmount = document.querySelector(".js-form__field");
    const currency1 = document.querySelector(".js-form__selector1");
    const currency2 = document.querySelector(".js-form__selector2");
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-form__result")
    let priceEUR = 4.55;
    let priceUSD = 3.76;
    let priceGBP = 5.23;
    let pricePLN = 1;


    const calculateResult = (amount, currency1Type) => {

        const currency2Type = currency2.value;

        switch (currency1Type) {
            case "PLN":
                if (currency2Type === "EUR") {
                    return amount / priceEUR;
                } else if (currency2Type === "USD") {
                    return amount / priceUSD;
                } else if (currency2Type === "GBP") {
                    return amount / priceGBP;
                } else
                    return amount / pricePLN;

            case "USD":
                if (currency2Type === "PLN") {
                    return amount / pricePLN;
                } else if (currency2Type === "EUR") {
                    return amount / priceEUR;
                } else if (currency2Type === "GBP") {
                    return amount / priceGBP;
                } else
                    return amount / priceUSD;

            case "EUR":
                if (currency2Type === "PLN") {
                    return amount / pricePLN;
                } else if (currency2Type === "USD") {
                    return amount / priceUSD;
                } else if (currency2Type === "GBP") {
                    return amount / priceGBP;
                } else
                    return amount / priceEUR;

            case "GBP":
                if (currency2Type === "PLN") {
                    return amount / pricePLN;
                } else if (currency2Type === "USD") {
                    return amount / priceUSD;
                } else if (currency2Type === "EUR") {
                    return amount / priceEUR;
                } else
                    return amount / priceGBP;

        }
    }

    currency1.addEventListener("input", () => {
        switch (currency1.value) {
            case "USD":
                priceEUR = 0.83;
                priceUSD = 1;
                priceGBP = 1.39;
                pricePLN = 0.27;
                break;
            case "EUR":
                priceEUR = 1;
                priceUSD = 1.21;
                priceGBP = 1.15;
                pricePLN = 0.22;
                break;
            case "GBP":
                priceEUR = 0.87;
                priceUSD = 0.72;
                priceGBP = 1;
                pricePLN = 0.19;
                break;
            default:
                priceEUR = 4.55;
                priceUSD = 3.76;
                priceGBP = 5.23;
                pricePLN = 1;
        }
    });


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();


        const amount = +cashAmount.value;
        const currency1Type = currency1.value;

        const result = calculateResult(amount, currency1Type)

        resultElement.innerText = `${result.toFixed(2)} ${currency2.value}`;

    });
}