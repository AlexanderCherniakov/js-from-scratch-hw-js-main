// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
// инициализация счётчика и итоговой суммы
let i = 1;
let sum = 0;

// запускаем цикл, пока счётчик не превысит 20
while(i <= 20){
    // добавляем текущее значение счётчика к сумме
    sum += i;
    
    // увеличиваем счётчик на 1
    i++;
}

console.log(sum); // выведем результат в консоль