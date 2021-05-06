let cashAmount = document.querySelector(".js-form__field");
let currency1 = document.querySelector(".js-form__selector1");
let currency2 = document.querySelector(".js-form__selector2");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result")

let priceEUR = 4.55;
let priceUSD = 3.76;
let priceGBP = 5.23;
let pricePLN = 1;

currency1.addEventListener("input", (event) => {
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
})


formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    let amount = +cashAmount.value;
    let currency1Type = currency1.value;
    let currency2Type = currency2.value;

    switch (currency1Type) {
        case "PLN":
            if (currency2Type === "EUR") {
                result = amount / priceEUR;
            } else if (currency2Type === "USD") {
                result = amount / priceUSD;
            } else if (currency2Type === "GBP") {
                result = amount / priceGBP;
            } else
                result = amount / pricePLN;
            break;
        case "USD":
            if (currency2Type === "PLN") {
                result = amount / pricePLN;
            } else if (currency2Type === "EUR") {
                result = amount / priceEUR;
            } else if (currency2Type === "GBP") {
                result = amount / priceGBP;
            } else
                result = amount / priceUSD;
            break;
        case "EUR":
            if (currency2Type === "PLN") {
                result = amount / pricePLN;
            } else if (currency2Type === "USD") {
                result = amount / priceUSD;
            } else if (currency2Type === "GBP") {
                result = amount / priceGBP;
            } else
                result = amount / priceEUR;
            break;
        case "GBP":
            if (currency2Type === "PLN") {
                result = amount / pricePLN;
            } else if (currency2Type === "USD") {
                result = amount / priceUSD;
            } else if (currency2Type === "EUR") {
                result = amount / priceEUR;
            } else
                result = amount / priceGBP;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency2.value}`;

});