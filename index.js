

//#region task-1
//1) Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.
// let arr=[15,8,7,3,28,24,13];
// arr.sort((a, b) => a - b);
// console.log(arr);
//#endregion

//#region task-2
//2) String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq, hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.

//1
// const splitWords1=function(word){
//   let indexes=word.split(" ").map(value=>value.length);
//   return indexes;
// }
// //2
// const splitWords2=word=>word.split(" ").map(value=>value.length);

// console.log(splitWords1("I dont understand"));
// console.log("==============");
// console.log(splitWords2("I dont understand"));
//#endregion
//#region task-3
/* const companies=[
  {name: "Company One", category: "Finance", start:1981, end: 2003},
  {name: "Company Two", category: "Retail", start:1992, end: 2008},
  {name: "Company Three", category: "Auto", start:1999, end: 2007},
  {name: "Company Four", category: "Retail", start:1989, end: 2010},
  {name: "Company Five", category: "Technology", start:2009, end: 2014},
  {name: "Company Six", category: "Finance", start:1987, end: 2010},
  {name: "Company Seven", category: "Auto", start:1986, end: 1996},
  {name: "Company Eight", category: "Technology", start:2011, end: 2016},
  {name: "Company Nine", category: "Retail", start:1981, end: 1989},
  ]
  const ages=[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
  
  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }
  companies.forEach(company => {
      console.log(company);
  });
  
  let canDrink=ages.filter(age=>age>21);
  console.log(canDrink);
  
  let eightsCompanies= companies.filter(company=> company.start>=1980&& company.end<=1990);
  console.log(eightsCompanies);
  
  let lastedTenYears= companies.filter(company=>  company.end-company.start>=10);
  console.log(lastedTenYears);
  
  const companyNames=companies.map(company=>company.name);
  console.log(companyNames); */
//#endregion
