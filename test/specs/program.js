function exampleVar() {
    console.log(a); // undefined (hoisting in action)
    var a = 10;
    console.log(a); // 10
  }
  exampleVar();
  
  console.log(b); // ReferenceError: b is not defined
  var b = 20;
  console.log(b); // 20
  