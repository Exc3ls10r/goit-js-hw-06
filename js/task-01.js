const mainItemsRef = document.querySelectorAll('.item');

console.log("Number of categories:", mainItemsRef.length);

mainItemsRef.forEach(item => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});