//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
/* type annotation || signature
--indicate the data type of variables 
--indicate the data type of functions input / output /objects , ...ets .

why use it ?  for force type checking prossess
is it mandatory ? no 
what happens if we didn't use it ? the compailer concludes the type when they compile 
*/


//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*1- first data type ( any )  => syntax (let name : any = "the name")
// let theName: string = "moncef"
// let theAge: number = 24
// let hire:boolean = true
// let theNameAny: any = "moncef"  //* ===   let theNameAny; =>  theNameAny = "moncef"


// theName= 0 //!error
// theNameAny = 0 //*not problem

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*2- number data type 
// const add = (n1:number , n2:number)=>{
//   return n1 + n2
// }

// console.log(add(10 , "10"))//! error
// console.log(add(10 , 10))//* not problem
// console.log(typeof add(10 , 10))

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Type Annotations With Arrays

// let all : string | number | boolean = "ali"

// all = "a"
// all = 10 
// all = true 



// let myFreands : string[] = ["algeria", "bobo", "coco;)" ]


// for (let i = 0 ; i<myFreands.length ; i++){
//   console.log(myFreands[i].repeat(3))
// }
//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*type annotations whith multidimensional(متعددة الأبعاد) arrays

// let arrayOne : number[] = [1,2,3,8,5,6,7,8,9,10]
// let arrayTwo : string[] = ["a", "b", "c", "d", "e", "f"]
// let arrayThree : (string | number)[] = ["a", "b", "c", 1,2,3]
// let arrayFoor :  (string | number | string[] | boolean)[] = ["a", "b", "c", 1,2,3 , ["a" , "b" , "c"] , true , false]

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Type Annotations With Function

// let t = "dfsg"

// function tt(a: number , b: string , c: string) {
//   if(a === 10){
//      let aa = a+b+c
//      return aa
//   }
//   return t
// }


// tt(10 , "aa" , "bb")

//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!
//* Function Optional and Default Parameters

// const showData = (name:string = "un", age?: number , country?: string)=>{
  // return`${name} - ${age} - ${country}`
// }

//*age?  => ? after parameter means age is optional
//* name:string = "un" => syntax of default value of parameter in ts 
// console.log(showData("moncef"))



//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//* Function Rest Parameter (...)

// const addAll = (...nums : number[]) : number=>{
//   let result = 0 ;

//!//!//!//!//!//!method one :)
//*   // for (let i = 0 ; i < nums.length ; i++){
//*   //   result += nums[i]
//*   // }
//   nums.forEach(num => result += num)
//   return result
// }

// console.log(addAll(10,20,33,55,66, 10.5 , true ))



//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Type Annotations With Anonymous And Arrow Function
//!//!//!/ 1
// const lolo = (num1:number ,num2:number )=>{
//   return num1 + num2
// }
// console.log(lolo(10,20))
//!//!//!/2
// const toto = (num1:number ,num2:number )=> num1 + num2
// console.log(toto(10,20))



//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//* Data Types - Type Alias(الإسم المستعار)
// type str = string;
// type num = number;
// type strandnum = string | number 

//  let tt: string  === let tt:str


//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Data Types - Type Alias Advanced

// type Buttons = {
//   up: string,
//   right: string, 
//   down: string,
//   left: string
// }


// const getActions = (btns:Buttons)=>{
//   console.log(`action for button up is to ${btns.up}`)
//   console.log(`action for button down is to ${btns.down}`)
//   console.log(`action for button left is to ${btns.left}`)
//   console.log(`action for button right is to ${btns.right}`);
// }


// getActions({up: " go up" , right: "go right" , down: "go down" , left:"go left"})


//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Data Types - Literal Types


//!//!//!//!/1
// const compare = (num1:number , num2:number) : string=>{
//   if(num1 < num2){
// return`the secend number is more than the first number`
//   }else if(num2 < num1){
// return    `the first number is more than the secend number`
//   }else{
//     return     `the first number is equal to the secend number`
//   }
// }


// console.log(compare(10,20))//the secend number is more than the first number
// console.log(compare(20,10))//the first number is more than the secend number
// console.log(compare(10,10))//the first number is equal to the secend number 

//!//!//!//!/2
// type nums =  0 |1 | -1



// const compareOne= (num1:number , num2:number) : nums=>{
//   if(num1 < num2){
// return 1
//   }else if(num2 < num1){
// return  -1
//   }else{
//     return  0
//   }
// }


// console.log(compareOne(10,20))//1
// console.log(compareOne(20,10))//-1     
// console.log(compareOne(10,10))//0



//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!//!/
//*Data Types - Tuple(مترابطة بيانية)

// let article:readonly [number , string , boolean] = [10 , "title one" , true]

// article.push(100)//! error message
// console.log(article)