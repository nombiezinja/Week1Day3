var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// Signature:
//   Name: calculateSalesTax
//   Arguments: numbers
//   Return type: object
// Contract: return sum of sales and tax rates for each key

// strat: first calculate the sum of each company's sales by
// making a function that calls the sales key in each item
// of the object in companySalesData
// return number of sales
// second: select which tax rate to use for the company by
// determining which key in salesTaxRates the value of
// province matches, multiply, return
// make an empty object and push the results as values into
// key



function calculateSalesTax(salesData, taxRates) {

  var outputObj = {};

  for (var i = 0; i < salesData.length; i ++) {

    const name = salesData[i]["name"];
    const province = salesData[i]["province"];

    var totalSales = salesData[i]["sales"].reduce(function(a, b) {
      return a + b;
    }, 0);
    var totalTaxes = totalSales * taxRates[province];

    if (!outputObj[name]) {
      outputObj[name] = {totalSales, totalTaxes}
    } else {
      outputObj[name].totalSales += totalSales
      outputObj[name].totalTaxes += totalTaxes
    }
  }

  return outputObj

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/