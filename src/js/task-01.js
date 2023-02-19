const allCategories = document.querySelectorAll(".item").length
console.log(`Number of categories: ${allCategories}`);

const animals = document.querySelector("#categories").firstElementChild
const titleAnimals = animals.firstElementChild.textContent
const animalsLength = animals.children[1].children.length
console.log(`Category: ${titleAnimals} Elements: ${animalsLength}`)

const products = document.querySelector("#categories").children[1]
const titleProducts = products.firstElementChild.textContent
const productsLength = products.children[1].children.length
console.log(`Category: ${titleProducts} Elements: ${productsLength}`)

const technologies = document.querySelector("#categories").children[2]
const titleTechnologies = technologies.firstElementChild.textContent
const technologiesLength = technologies.children[1].children.length
console.log(`Category: ${titleTechnologies} Elements: ${technologiesLength}`)






