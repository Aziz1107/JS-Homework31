// Проценты

const timerDegree = document.querySelector(".header__timer-extra");
let timerDegreeSpeed = 30
function recursiveDegree(i = 0){
    timerDegree.innerHTML = i
    i++
    console.log('')
    if (i === 50){
        timerDegreeSpeed = 50
    }else if (i === 70){
        timerDegreeSpeed = 100
    }else if (i === 80){
        timerDegreeSpeed = 150
    }else if (i === 90){
        timerDegreeSpeed = 200
    }
    else if (i === 95){
        timerDegreeSpeed = 250
    }
    if (i <= 100){
        setTimeout(() => {
            recursiveDegree(i)
        }, timerDegreeSpeed)
    }
}
recursiveDegree()

// Обьекты

const burgerInfo = {
    freshBurger:{
        name: 'freshBurger',
        price: 0,
        img: 'images/product1.jpg',
        amount: 0,
        get totalPrice(){
            return this.price * this.amount;
        }
    },
    freshCombo:{
        name: 'freshBurger',
        price: 0,
        img: 'images/product2.jpg',
        amount: 0,
        get totalPrice(){
            return this.price * this.amount;
        }
    },
    plainBurger: {
        name: 'plainburger',
        price: 0,
        img: 'images/product3.jpg',
        amount: 0,
        get totalPrice(){
            return this.price * this.amount;
        }
    },
}