/**
 * выводит список всех чисел в указанном диапозоне, которые равны сумме факториалов своих цифр
 * @name findFactorials
 * @param {Number} min начало диапозона
 * @param {Number} max конец диапозона
 * @example findFactorials(100,50000)   // [145,40585]
 */
function findFactorials(min,max) {
    var result = [];
    if (min < max) {
        for (var i = min; i <= max; i++) {

            var str, sum = 0;
            str = i.toString();

            for (var j=0; j < str.length; j++) {
                sum += factorial(str[j]);
            }

            if (i == sum) {
                result.push(i);
            }
        }
    }

    return result;
}

/**
 * Возвращает факториал числа n
 * @name factorial
 * @example factorial(5) //120
 */
function factorial(n) {
    return (n>1) ? n * factorial(n-1) : 1;
}