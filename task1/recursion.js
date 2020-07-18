let randomGen = (num1) => {
    let num = 0,
        number = 0,
        counter = num1;

    if (counter == 0) {
        return 0
    }
    else {
        number = Math.floor(Math.random() * 10);
        num = (Math.pow(10, counter - 1) * number) + randomGen(counter - 1)
        return num
    }

}

console.log(randomGen(prompt('Enter the number')))