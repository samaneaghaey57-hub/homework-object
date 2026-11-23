let order ={
   costomer:'sara',
    totalPrice:780000,
    isMember:true
};

if(order.totalPrice>1000000 || order.isMember===true)
{ 
    console.log('ارسال رایگان');
}
else{
    console.log('هزینه ارسال 50000 تومان');

}

//سوال2

let student={
name:'reza',
attendance:14,
totalsessions:16,


};

if(student.attendance===student.totalsessions){
    console.log('حضور کامل');
}
else if(student.attendance<10){
    console.log('محروم از امتحان');
}
else{
    console.log('اجازه شرکت در امتحان را دارد');
}



//سوال 3


let users={
    ali:{
        name:'ali'
        ,blance:250000,
        isActive:true
    },
        sara:{
        name:'sara'
        ,blance:80000,
        isActive:true
    },
            reza:{
        name:'reza'
        ,blance:150000,
        isActive:false
            },
                mina:{
        name:'mina'
        ,blance:400000,
        isActive:true
                }
};

for(let key in users){
    if(users[key].isActive===true){
        users[key].blance+=100000;
        console.log(users[key].name+'هدیه دریافت کرده است');
    }
    else{
        console.log(users[key].name+'هدیه دریافت نکرده است');
    }
}
console.log(users);


//سوال 4


let products={
    bread:25000,
    milk:45000,
    cheese:180000,
    rice:950000,
    oil:220000
};
console.log('محصولات ارزانتر از50 هزار تومان');

for(let products in products){
    if(products[product]<50000){
        console.log(product)
    }
}
console.log('محصولات گرانتر از 500 هزار تومان');

for(let products in products){
    if(products[product]>500000){
        console.log(product)
    }
}

let count=0;

for(let products in products){
    if(products[product]>500000){
       count++;


    }
}

console.log(count,'تعداد محصولات گرانتر از 500 هزار تومان');



//سوال5


let grades ={
    math:18,
    physics:9,
    programming:20,
    database:14,
    english:7
};

for(let subject in grades){

    if(grades[subject]<10){
        console.log(subject+'مردود');
    }

    else if(grades[subject]>=10 && grades[subject]<=15){
        console.log(subject+'متوسط');
    }else{
        console.log(subject+'عالی')
    }
}




