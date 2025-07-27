/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

// const game = {
//   resources: {
//     gold: 250,
//     lumber: 100,
//   },
//   addResource() {}
// }

class Game {
    constructor(resources) {
        this.resources = resources || {};
    }

    addResource(resource, amount) {
        // Проверяем существование указанного типа ресурса
        if (!this.resources.hasOwnProperty(resource)) {
            console.error("Invalid resource");
            return error;
        }
        
        // Добавляем указанное количество ресурса
        this.resources[resource] += amount;
    }
}

// Пример использования класса и метода
const game = new Game({
    gold: 100,
    lumber: 50
});

// Корректное добавление ресурса
game.addResource('gold', 50);       // Теперь gold = 150
console.log(game.resources.gold);   // Выведет: 150

// Некорректный ресурс
game.addResource('iron', 20);      // Выведет ошибку: Invalid resource
console.log(game.resources.iron);