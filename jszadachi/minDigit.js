function minDigit(x) {
    if (x < 0) {
        throw new Error("Число должно быть неотрицательным.");
    }

    // Инициализируем переменную для хранения наименьшей цифры
    let min = 9; // Максимально возможная цифра

    // Обрабатываем каждую цифру числа
    while (x > 0) {
        let digit = x % 10; // Получаем последнюю цифру
        if (digit < min) {
            min = digit; // Обновляем минимальную цифру
        }
        x = Math.floor(x / 10); // Убираем последнюю цифру
    }

    
    if (min === 9) {
        return min; // Если число было 0, возвращаем 0
    } else {
        return min; // Возвращаем найденную минимальную цифру
    }
}

// Примеры использования
console.log(minDigit(235425));   
console.log(minDigit(122));   
console.log(minDigit(999)); 
