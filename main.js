function productOfValues(someObject) {
  let keyProduct = 1;
  for (let i in someObject){
    keyProduct *= someObject[i];
  }
  return keyProduct
}


let testObject = {
  'a': 5, 
  'b': 12,
  'c': 3
};

productOfValues(testObject); //press the 'run' button to see output in console