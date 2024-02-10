// console.log(NaN===NaN)

// console.log("Value :"+3==3)

// var tomr='rain';

// if(tomr=='rain'){
//     console.log('take a raincoat');
// }else{
//     console.log('No need to take a raincoat');
// }

// var age=18;
// console.log((age>=18)?"You can vote":"You can't vote");

//
// console.log("Hello World")

// var area="circle";
// var PI=3.142,l=5,b=4,r=3;

// switch(area){
//     case 'circle':
//         console.log("Area "+PI*r**2);
//     break;

//     case 'triangle':
//         console.log("Area "+ (l*b)/2);
//     break;

//     default:
//         console.log("Please Enter Valid input data");

// }

// While Loop

// var num=0;

// while(num<=10){
//     console.log(num);
//     num++;
// }

// Do-while Loop

// var num=20;
// do{
//     console.log(num);
//     num++;
// }while(num<=10);

//For loop

// for(var num=1;num<=10;num++){
//     var tableof=8;
//     console.log(tableof+" * "+num + " = "+tableof*num);
// }

// Function

// function sum(){
//     var a=10,b=40;
//     var total=a+b;
//     console.log(a+b);
// }

// sum();

//Function Expression

// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// var funExp=sum(10,40);

// funExp;

// function sum(a,b){
//     return total = a+b;
// }
// var funExp=sum(5,25);

// console.log('The sum of 2 no is '+ funExp)

//Anonymus Function

// var funExp=function(a,b){
//     return total=a+b;
// }

// // console.log(funExp(15,15))

// var sum=funExp(15,15);

// console.log('the sum of two no is '+sum);

// let vs const vs var

// function biodata(){
//     var myFirstName="Nipurn";
//     console.log(myFirstName);
//     if(true){
//         var myLastName="Bhaal";
//         console.log('inner '+myLastName);
//         console.log('inner '+myFirstName);
//     }
//     console.log('innerOuter '+myLastName);
// }
// biodata()

// console.log(myFirstName);

//Template Literals

// for(let num=1;num<=10;num++){
//     let tableof=12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

//Default Parameters

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(3));

// Fat Array Function vs Traditional Function

// console.log(sum());

// function sum(){
//     let a=5,b=6;
//     let sum=a+b;
//     return `The sum : ${sum}`;
// }

// const sum=()=>`The sum : ${(a=2)+(b=6)}`;

// console.log(sum());

/***Section 7 arrays in Javascript*********/

// var myFriends=['Ellen','Vinod','arjun','vishal'];

// console.log(myFriends.length);
// console.log(myFriends[myFriends.length-1]);

// for(let elements in myFriends){
//     console.log(elements);
// }

// for(let elements of myFriends){
//     console.log(elements);
// }

// myFriends.forEach(function(element,index,array){
//     console.log(element+" index :"+ index+ " "+array);
// });

//  myFriends.forEach((element,index,array)=>{
//     console.log(element+" index : "+ index+ " "+array)
// });

// var myFriends=['Ellen','Vinod','Nipurn','thapa','arjun','vishal','Nipurn','thapa'];
// console.log(myFriends.indexOf("Thapa"));
// console.log(myFriends.lastIndexOf("Nipurn",3))

// console.log(myFriends.includes('thapa'));

// const prices=[200,300,350,400,450,500,600];

// const findElem=prices.find((currval)=>{
//     return currval<400;
// })
// console.log(findElem);

// console.log(prices.find((currVal)=>currVal<400));

// console.log(prices.findIndex((currVal)=>currVal > 1400));

// const newPriceTag=prices.filter((elem,index)=>{
//     return elem<400;
// });
// console.log(newPriceTag);

// const months=['March','Jan','Feb','April','Dec','Nov'];
// console.log(months.sort());

// const array1=[1,30,4,21,10000,99];

// console.log(array1.sort());

// const animals=['pigs','goats','sheep'];

// const count=animals.push('chicken');
// const count=animals.push('chicken','cats','cow')
// animals[0]=1;
// animals.unshift('chicken','cats','cow');
// console.log(animals);
// console.log(count);

// console.log(animals.pop());
// console.log(animals.shift());
// animals[0]='hello';
// console.log(animals);
// function func1(input1,input2){
//     return function(input1,input2){
//         return input1+input2;
//     }
// }

// console.log(func1(2,3)(3,4));\

// const months=['Jan','march','April','June','July'];
// const newMonth=months.splice(months.length,0,"Dec");
// console.log(months);
// console.log(newMonth);

// const indexOfMonth=months.indexOf('June');

// if(indexOfMonth!=-1){
//     const updateMonth=months.splice(indexOfMonth,3);
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data');
// }

// const array1=[1,4,9,16,25];
// let newArr=array1.map((currElem,index,arr)=>{
//     // console.log(index);
//     return currElem>9;
// })

// let newArr=array1.map((currElm,index,arr)=>{
//     return `Index no = ${index} and the value is ${currElm} belongs to ${arr}`;
// })

// console.log(array1);
// console.log(newArr);

// let arr=[25,36,49,64,81];

// let arrSqr=arr.map((curElem)=>{
//     return Math.sqrt(curElem);
// })

// console.log(arrSqr);

// let arr=[2,3,4,6,8];

// let arr2=arr.map((curElem)=>{
//     return curElem*2;
// }).filter((currElem)=>{
//     return currElem>10;
// })

// let arr2=arr.map((curElem)=>curElem*2).filter((currElem)=>currElem>10).reduce((accumulator,currElem)=>{
//     return accumulator+=currElem;
// });

// console.log(arr2);

// let arr3=[2,3,4,5,6,7,8,9];

// let arr4=arr3.reduce((accumulator,currElem)=>{
//     return accumulator+=currElem;
// },7)

// console.log(arr4)

// const arr=[
//     ['z1','z2'],
//     ['z3','z4'],
//     ['z4','z5'],
//     ['z6',['z7','z8']]
// ];

// let flatArr=arr.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })
// console.log(flatArr);

// let myName="Nipurn  Bhaal";

// let ytName=new String("Ellen");

// console.log(myName);
// console.log(ytName);

// console.log(myName.length)

// let anySen="We are the so-called \"Vikings\" from the north.";
// console.log(anySen);

// var str="Apple, Banana, Kiwi, mango";

// let res=str.slice(7,-2);
// console.log(res);

// let res=str.substring(0,8);

// let res=str.substr(-4);
// console.log(res);

// let myBioData=`I am nipurn bhaal bhaal nipurn`
// let replaceData=myBioData.replace('nipurn','Nipurn');
// console.log(myBioData)
// console.log(replaceData);

// let str="HELLO WORLD";

// console.log(str.charAt(0));
// let lastChar=str.length-1;
// console.log(str.charCodeAt(lastChar));

// let fname="Nipurn";
// let lname="Bhaal";
// console.log(fname.concat(" ",lname));

// let str="         Hello          World!           ";
// console.log(str.trim());

// let txt="a,b,c|d,e ,f,g";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));

// Date and Time

// let currDate=new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now());

// var d=new Date(2023,0,5,20,33,30,0);
// console.log(d.toLocaleString());

// var d=new Date("October 13, 2023 11:13:00");
// console.log(d.toLocaleString());

// console.log(Date.now());

// var d=new Date(1676927322037);
// console.log(d.toLocaleString());

// const currDate=new Date();
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// console.log(currDate.setFullYear(2022,11,5))
// console.log(currDate.setFullYear(2022));
// console.log(currDate.setMonth(10));
// console.log(currDate.setMonth(10));
// console.log(currDate.setDate(5));
// console.log(currDate.toLocaleString());

// const currTime=new Date();

// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// ******************Math Object*************
// console.log(Math.PI);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.trunc(4.6));
// console.log(Math.floor(-99.1))
// console.log(Math.trunc(-99.1));

// ********************Object***************

// 1st way
// let biodata={
//     myName:"Nipurn Bhaal",
//     myAge :21,
//     getData:function(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }

// 2nd way
// let biodata={
//     myName:"Nipurn Bhaal",
//     myAge :21,
//     getData(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }

// biodata.getData();

// object inside object

// let biodata={
//     myName:{
//         realName:"Nipurn",
//         channelName:"Nipurn Technical"
//     },
//     myAge:21,
//     getData(){
//         console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//     }
// }

// console.log(biodata.myName.channelName);

// let myNames='Nipurn';

// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj={
//     myAge:20,
//     myName(){
//         console.log(this.myAge);
//     }
// }
// obj.myName();

// *********Array Destructuring***********

// const myBioData=['Nipurn','Bhaal',20];

// let[myFName,myLName,myAge]=myBioData;
// let[myFName,myLName,myAge,myDegree="B.Tech"]=myBioData;
// console.log(myDegree);

// const myBioData={
//     myFname:'Nipurn',
//     myLname:'Bhaal',
//     myAge:20
// }

// let{myFname,myLname,myAge,myDegree="B.Tech"}=myBioData;
// console.log(myFname);

// let myName="Nipurn";

// const myBio={
//     [myName]:"hello how are you?",
//     [20+6]:"is my age"
// }

// console.log(myBio);

// let myName="Nipurn Bhaal";
// let myAge=20;

// const myBio={myName,myAge};

// console.log(myBio);

// const colors=['red','green','blue','white','pink'];

// const MyFavColors=[... colors,'yellow','black'];

// console.log(MyFavColors);

//**********************ES8********************
// let myName="Nipurn".padStart(70);
// console.log(myName);

// const person={name :'Nipurn',age:20};

// console.log(Object.values(person));
// console.log(Object.entries(person));

// const person={name:'Nipurn',age:20,degree:'B.Tech'};
// const sperson={...person};

// console.log(person);
// console.log(sperson);

// const arr=[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7'],['zone_8',['zone_5','zone_6']]
// ]

// console.log(arr.flat(Infinity));

// const person={name:'Nipurn',age:20};

// const arrObj=Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// const foo=null??'default string';
// console.log(foo);

// let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(9007199254740991n +12n);
// const newNum=9007199254740991n+12n;
// console.log(newNum);
// console.log(typeof newNum);

// ES2014
// "use strict";
// x=3.14;
// console.log(x)

// Higher order functions and callback functions

// const add=(a,b)=>{
//     return a+b;
// }
// const subs=(a,b)=>{
//     return Math.abs(a-b);
// }

// const mult=(a,b)=>{
//     return a*b;
// }

// const calculator=(num1,num2,operator)=>{
//     return operator(num1,num2);
// }
// console.log(calculator(5,2,add));

// let a="Hello guys";

// const first=()=>{
//     let b="How are you ?";
//     const second= ()=>{
//         let c="Hi i am fine";
//         console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c);//this line will not work
// }
// first();

// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`the sum is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);

// const outerFun=(a)=>{
//         let b=10;
//         const innerFun=()=>{
//             let sum=a+b;
//             console.log(`the sum is ${sum}`);
//         }
//     return innerFun;
// }

// let checkClosure=outerFun(5);
// checkClosure();

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(5)(3)(8);

// const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
// sum(5)(3)(8);

// var my_object={key_1:"some text",key_2:true,key_3:5};
// var object_as_string=JSON.stringify(my_object);
// typeof(object_as_string);
// console.log(object_as_string);

// var object_as_string_as_object=JSON.parse(object_as_string);
// console.log(object_as_string_as_object);
// typeof(object_as_string_as_object);

// Promises

// let p=new Promise((resolve,reject)=>{
//     let a=1+2
//     if(a==2){
//         resolve('Success')
//     }else{
//         reject('Failed')
//     }
// })

// p.then((message)=>{
//     console.log('This is the then '+message);
// }).catch((message)=>{
//     console.log('This is in the catch '+message)
// })

// const userLeft=false
// const userWatchingCatMeme=false

// function watchTutorialCallback(callback,errorCallback){
//     if(userLeft){
//         errorCallback({
//             name:'User Left',
//             message: ':('
//         })
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name:'User',
//             message:'Web Dev simplified < Cat'
//         })
//     }else{
//         callback("Thumbs up and Subscribe")
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log('Succes '+message)
// },(error)=>{
//     console.log(error.name+' '+error.message)
// })

// function watchTutorialPromise(){
//     return new Promise((resolve,reject)=>{
//         if(userLeft){
//             reject({
//                 name:'User Left',
//                 message:':('
//             })
//         }else if(userWatchingCatMeme){
//             reject({
//                 name :'user Watching Cat Meme',
//                 message:'Web Dev simplified < cat'
//             })
//         }else{
//             resolve('Thumbs up')
//         }
//     })
// }

// watchTutorialPromise().then((message)=>{
//     console.log('Success '+ message)
// }).catch((error)=>{
//     console.log(error.name+ ' ' +error.message)
// })

// const recordVideoOne=new Promise((resolve,reject)=>{
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo=new Promise((resolve,reject)=>{
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree=new Promise((resolve,reject)=>{
//     resolve('Video 3 recorded')
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message)=>{
//     console.log(message)
// })
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message)=>{
//     console.log(message)
// })

// function makeRequest(location){
//     return new Promise((resolve,reject)=>{
//         console.log(`Making Request to ${location}`)
//         if(location==='Google'){
//             resolve('Google says Hi')
//         }else{
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve,reject)=>{
//         console.log('PRocessing response')
//         resolve(`Extra Information + ${response}`)
//     })
// }

// makeRequest('Google').then(response=>{
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processResponse=>{
//     console.log(processResponse)
// }).catch(err=>{
//     console.log(err)
// })

// async function doWork(){
//     try{
//         const response=await makeRequest('Google')
//         console.log('Response Received')
//         const processResponse=await processRequest(response)
//         console.log(processResponse)
//     }catch(err){
//         console.log(err)
//     }
// }
// doWork()
