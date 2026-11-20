const vechicles=['car','bike','truck'];
vechicles.push("bus","cycle","aerolane","SUV","van")
console.log(vechicles)
vechicles.pop("cycle")//deleting
console.log(vechicles)
vechicles.shift();
console.log(vechicles);//removes element from the beggining
vechicles.unshift();
console.log(vechicles);
//finding index of the elements
console.log(vechicles.indexOf("truck"));
//if the element is not present in array it returns negative value
console.log(vechicles.indexOf("train"));