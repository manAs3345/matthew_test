# Assignment 1
# 1) Setting up: 

<br /> 

Before running this application, download "axios" in your terminal with the "npm install axios" command 

<br />

**IF LICENSE HAS EXPIRED**: I don't know when my license will expire, so if it no longer works, it might mean that my API license trial has expired. Head to this website: "https://app.exchangerate-api.com" and try to attain a Pro plan trial before continuing/resuming usage of this application

<br />

# 2) About the Application:

<br />

This application is ran through using axios to call upon an external API where based on the inputs on the header, it will return the values enterd. 
This API updates itself regualarly so it will have the latest exchnage rates recorded. 

This application has 5 functions: 

- **getExchangeRates: function()** : This function is mainly used by other functions to fetch data from the website in a JSON format.

- **convertCurrency: function(amount, from, to)** : This function is as it's name suggest converst the specified amount listed from the base currrency[`from`] to the currency you wish to convert it to [`to`]. It will check if the currency exist, if so it will do the math to help calculate the convertedAmount.

- **getlistofCurrencies: function()** : This function is used to just get the list of supported currencies. You can use it to see what currencies can be used in this application. 

- **getHistoricalExchangeRate: function(base, year, month, day, target, amount)** : This fucntion is used if you wish to convert money from a very specific point in time, you can use it to compare between current rates and previous rates. 

- **getEnrichedData: function(base,target)** : This function is used if you wish to know more about the currency, like the currency code, country, and how it is refered to in that country. It will show the rates between the base currency [`base`] and target currency which will be the country you will be getting enriched information about [`target`]

<br />

# 3) Examples of how to use 

<br />

**convertCurrency**: <br />
const amount = 1; <br />
const fromCurrency = 'SGD'; <br />
const toCurrency = 'USD'; <br />

currencyConverter
  .convertCurrency(amount, fromCurrency, toCurrency)
  .then((convertedAmount) => {
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
<br />

**getExchangeRates**: <br />
currencyConverter
.getExchangeRates()
  .then((exchangeRates) => {
    console.log('Exchange Rates:');
    console.log(exchangeRates);
  })
  .catch((error) => {
    console.error('Error fetching exchange rates:', error.message);
  });
<br />

**getlistofCurrencies**:<br /> 
currencyConverter
.getlistofCurrencies()
.then((currencyList) => {
  console.log('Available Currencies:');
  console.log(currencyList);
})
.catch((error) => {
  console.error('Error fetching available currencies:', error.message);
});
<br />

**getHistoricalExchangeRate**:<br />
const base = 'SGD';<br />
const year = '2023';<br />
const month = '11';<br />
const day = '01';<br />
const target = 'USD'; // Replace with your desired target currency<br />
const qamount = 100; // Replace with the amount you want to convert<br />

currencyConverter
.getHistoricalExchangeRate(base, year, month, day, target, qamount)
  .then((convertedAmount) => {
    console.log(`Converted Amount on ${year}-${month}-${day}: ${qamount} ${base} = ${convertedAmount} ${target}`);
  })
  .catch((error) => {
    console.error('Error fetching historical exchange rates:', error.message);
  }
) 
<br />

**getEnrichedData**:<br />
const base ='SGD';<br />
const target ='USD';<br />

currencyConverter.getEnrichedData(base,target) 
.then((enrichedData)=>{
  console.log(enrichedData);
});

# IF YOU ARE COPY PASTING CODE, REMEMBER TO RENAME SOME OF THE VARIABLES SINCE, I GOT LAZY AND CALLED THEM THE SAME THINGS. # 

<br />

# 4) **HOW TO USE THE FUNCTIONS**

<br />

After you copy paste the code into the app.js file. Remeber to include the path to the file so that it can be used. Then use node app.js to run it.
The result should appear in the terminal. 

<br />

# 5) **References**
- Documentation of External API: "https://www.exchangerate-api.com/docs/overview"
- Link to see Raw data in JSON: "https://v6.exchangerate-api.com/v6/7c010b3a553be2dc1a88ec8f/latest/SGD"
