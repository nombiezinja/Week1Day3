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



var outputObj = {};

for (var i = 0; i < companySalesData.length; i ++) {

  const name = companySalesData[i]["name"];
  const province = companySalesData[i]["province"];

  var totalSales = companySalesData[i]["sales"].reduce(function(a, b) {
    return a + b;
  }, 0);
  var totalTaxes = totalSales * salesTaxRates[province];

  //console.log(salesTaxRates[province]);
  if (!outputObj[name]) {
    outputObj[name] = {totalSales, totalTaxes}
  } else {
    outputObj[name].totalSales += totalSales
    outputObj[name].totalTaxes += totalTaxes
  }
}





console.log(outputObj);

