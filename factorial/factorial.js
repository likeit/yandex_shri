/**
 * Created by megadozz on 23.07.13.
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

function factorial(n) {
    return (n>1) ? n * factorial(n-1) : 1;
}