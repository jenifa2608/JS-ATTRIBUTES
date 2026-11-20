const arr=new Array(3)
arr[0]=1
console.log(arr)
arr[1]=3
arr[2]=7
console.log(arr)
arr[3]="hi"
console.log(arr)
console.log("length="+arr.lenth)//undefined
console.log(arr.at(3))
console.log(Array.isArray(arr))//isArray method
var a=5
console.log(Array.isArray(a))
//changing an array element 
arr[2]=0
console.log(arr)

