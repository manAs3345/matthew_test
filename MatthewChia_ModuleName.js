//npm install axios if you wish to try it: for https request
const axios = require('axios');

module.exports = {
    //When called, it gets the exchange rates from an external website, the website tracks the latest currency rates
    //the data in a json format. It is mainly used for the other functions to work
    getExchangeRates: function() {
        return axios
            .get('https://v6.exchangerate-api.com/v6/7c010b3a553be2dc1a88ec8f/latest/SGD')
            .then((response) => {
                return response.data.conversion_rates;
            })
            .catch((error) => {
                throw new Error('Cannot Fetch');

            });
    },

   //When called it will convert currency based on the stated amount, from the base currency like SGD to something like USD
    convertCurrency: function(amount, from, to) {
        return this.getExchangeRates()
            .then((exchangeRates) => {
                if (!exchangeRates[from] || !exchangeRates[to]) {
                    throw new Error('Wrong currency');
                }

                const convertedAmount = (amount / exchangeRates[from] * exchangeRates[to]);
                return convertedAmount;
            });
    },

    //This function is to get the list of currencies in the json that is retrived from the getExchangeRates function
    getlistofCurrencies: function() {
        return this.getExchangeRates()
            .then((exchangeRates) => {
                return Object.keys(exchangeRates);
        });
    },

    //This function is to get the historical exchange rates from the external website then it does calculations to determine the amount if 
    //converted from base to target currency
    getHistoricalExchangeRate: function(base, year ,month, day, target, amount){
        return axios 
            .get(`https://v6.exchangerate-api.com/v6/7c010b3a553be2dc1a88ec8f/history/${base}/${year}/${month}/${day}`)
            .then ((response) => {
               const conversionRates = response.data.conversion_rates;
            
                if(conversionRates && conversionRates[target]) {
                    const historicalRate = conversionRates[target];
                    const convertedAmount = amount * historicalRate;
                    return convertedAmount;
                } else {
                    throw new Error('unable to fetch');
                }
            })
            .catch((error) => {
                throw new Error('pain');
        });
    },

    getEnrichedData: function(base, target) {
        return axios
        .get(`https://v6.exchangerate-api.com/v6/7c010b3a553be2dc1a88ec8f/enriched/${base}/${target}`)
        .then ((response) =>{
            const enrichedData = response.data;
            return enrichedData;
        })
        .catch((error) => {
            throw new Error('pain');
        });
    }

};