//1. Написать функцию, преобразующую число в объект. 
//Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
//в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//Например, для числа 245 мы должны получить следующий объект: 
//{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
//Если число превышает 999, необходимо выдать соответствующее сообщение 
//с помощью console.log и вернуть пустой объект.
function func_1(a) {
    var a = String(a);
    var length = a.length
    var chislo = { } 
    if (length < 4){
        var i = 1;           
        for (var el in a){
            if (i == 1){
            chislo.ed = a[a.length - i]
            };
            if (i == 2){
                chislo.des = a[a.length - i]};
            if (i == 3){
            chislo.sotni = a[a.length - i]};
            i++
            }
        console.log(chislo)
    } else {
        console.log("Число большее 999")
    }
}

//2. Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. 
//Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.
        
        
        function totalSum() {
            return this.price*this.quantity;
        }
        
        var basket = [
            {product: 'shirt',
            price: 200,
            quantity: 2,
            total: totalSum},
            {product: 'shorts',
            price: 700,
            quantity: 1,
            total: totalSum},
            {product: 'dress',
            price: 1100,
            quantity: 3,
            total: totalSum},
            {product: 'socks',
            price: 150,
            quantity: 5,
            total: totalSum},
        ]

        function countBasketPrice(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum += arr[i].total();
            }
            return sum;
        }
        
        function descBasketPrice(arr) {
            var str = '';
            for (var i = 0; i < arr.length; i++) {
                str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
            }
            return str;
        }
        
        alert('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));