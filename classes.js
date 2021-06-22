// class Demo
// {
//     a=20;

//     m1() {
//         console.log("Hello from m1()")
//         let z='DINGA';
//         console.log(z);
//        function test()
//         {
//             console.log("I am TEST")
//         }

//         test();
//     }

//   static b=20;

//    static m2() {
//         console.log("Hello from m2()")
//     }
// }

// let d1=new Demo();

// d1.m1();
// console.log(d1.a);

// console.log(Demo.b);
// Demo.m2()

// class Father
// {
//     color="WHEAT";
// }

// class Son extends Father
// {

// }

// let s1=new Son();

// console.log(s1.color);


// class Sample
// {
//     constructor()
//     {
//         console.log("Hello I am Sample Constructor with no parameter");
//     }

//     constructor(a)
//     {
//         console.log("Hello I am Sample Constructor with parameter");
//     }
// }

// let s1=new Sample();


// console.log(this);

// function m1()
// {
//     console.log(this)
// }

// m1();

// let m1=()=>
// {
//     console.log(this)
// }

// m1();

// let student=
// {
//     name:"Syed",
//     age:30,
//     details:function()
//     {
//         console.log(this);
//     }
// }
// student.details();

// let student=
// {
//     name:"Syed",
//     age:30,
//     details:function()
//     {
//         return ()=>
//         {
//             console.log(this)
//         }
//     }
// }
// let res=student.details();

// res();

// class Demo
// {
//     a="dinga"
//     m1()
//     {
//         let a=20;
//         console.log(this.a)
//     }

//     static m2()
//     {
//         console.log(this)
//     }
// }

// let d1=new Demo();


// d1.m1();

// Demo.m2()

// let student=
// {
//     name:"Syed",
//     age:30,
//     details:()=>
//     {
//         let age=45;
//         console.log(this.age)
//     }
// }
// student.details();


// function main()
// {

//     console.log("I am main");

//     function child1()
//      {
//         console.log('I am Child One');
//         function child2()
//          {
//             console.log('I am Child 2')
//         }
//         child2()
//     }
//     child1()

// }

// main()

function m1()
{
    let a=40;

    return function(b) {
        console.log(a+b);
    }
}


let res=m1();

res(1)