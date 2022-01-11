let set ={

}
let number = 1;
for(let i = 1; i < 5; i++) {

    if(number < 5) {
        set[number] = {
            name: prompt('Введите имя'),
            age: prompt('Введите возраст')
        }
    }
    number = number + 1;
}
console.log(set);