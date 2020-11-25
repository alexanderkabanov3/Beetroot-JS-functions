
//  Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

let first = (n1, n2) => {
    let num = 0;

    if(n1 > n2){
        num = 1;
    } else if (n1 < n2){
        num = -1;
    } else if (n1 === n2){
        num = 0;
    }
    return num;
}

function updateResult1() {
  const h1 = document.getElementById('result1');
  const input = document.getElementById('input11');
  const input1 = document.getElementById('input12');

  const num1 = +input.value;
  const num2 = +input1.value;

  if (isNaN(num1) || isNaN(num2)){
    h1.innerText = 'Не числовое значение';
  } else {
    h1.innerText = first(num1, num2);
  }
}

// Написать функцию, которая вычисляет факториал переданного ей числа.

let second = (n1) => {
    let b = 1;

    for(n1 ; n1 !== 1 ; n1--){
        b = b * n1;
    }
    return b;
}

function updateResult2() {
    const h1 = document.getElementById('result2');
    const input = document.getElementById('input2');
  
    const num = +input.value;
  
    if (isNaN(num)) {
      h1.innerText = 'Не числовое значение';
    } else {
      h1.innerText = second(num);
    }
  }

//   Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

let third = (n1, n2, n3) => {
    const a = String(n1);
    const b = String(n2);
    const c = String(n3);

    const d = a + b + c;
    const err = 'Много цифр';

    if (a.length !==1 || b.length !==1 || c.length !==1){
        return err;
    } else{
        return d;
    }
 
}

function updateResult3() {
    const h1 = document.getElementById('result3');
    const input = document.getElementById('input31');
    const input1 = document.getElementById('input32');
    const input2 = document.getElementById('input33');
  
    const num1 = +input.value;
    const num2 = +input1.value;
    const num3 = +input2.value;
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      h1.innerText = 'Не числовое значение';
    } else {
      h1.innerText = third(num1, num2, num3);
    }
  }

//   Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

let fourth = (n1 = 0, n2 = 0) => {
    let a;
    let b = 0;
    
    if (n1 == 0 && n2 == 0) {
        return b;
    } else if (n1 == 0 && n2 !== 0){
        a = n2 * 4;
    } else if (n1 !== 0 && n2 == 0){
        a = n1 * 4;
    } else {
        a = (n1 + n2) * 2;
    }

    return a;
}

function updateResult4() {
    const h1 = document.getElementById('result4');
    const input = document.getElementById('input41');
    const input1 = document.getElementById('input42');

    const num1 = +input.value;
    const num2 = +input1.value;
 
    if (isNaN(num1) || isNaN(num2)) {
      h1.innerText = 'Не числовое значение';
    } else {
      h1.innerText = fourth(num1, num2);
    }
  }

  // Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


  let fifth = (n1) => {
      const positive = 'Число совершенное';
      const negative = 'Число не совершенное';

      let a;
      let b = 0;

      for (let i = 0 ; i < n1 ; i++) {
         a = n1 % i;

         if (a == 0){
            b = b + i;
         }
      }
      
      if (b == n1){
          return positive;
      } else {
          return negative;
      }

  }


  function updateResult5() {
    const h1 = document.getElementById('result5');
    const input = document.getElementById('input5');

    const num1 = +input.value;
 
    if (isNaN(num1)) {
      h1.innerText = 'Не числовое значение';
    } else {
      h1.innerText = fifth(num1);
    }
  }

  // Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

  let sixth = (n1, n2) => {
    for (n1 ; n1 <= n2 ; n1++){
        if (fifth(n1) == 'Число совершенное'){
            let li = document.createElement('li');
            li.innerText = n1;
            result6.append(li);
        }
    }
  }



  function updateResult6() {
    const h1 = document.getElementById('result6');
    const input = document.getElementById('input61');
    const input1 = document.getElementById('input62');

    const num1 = +input.value;
    const num2 = +input1.value;
 
    if (isNaN(num1) || isNaN(num2)) {
      h1.innerText = 'Не числовое значение';
    } else if (num1 > num2) {
      h1.innerText = 'Начало диапазона выше конечного';
    } else {
        sixth(num1, num2);
    }
  }

//   Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.


let seventh = (n1 = 0, n2 = 0, n3 = 0) => {
    let a = String(n1);
    let b = String(n2);
    let c = String(n3);

    let d;

    const err = 'Error';

    if (n1 >= 24 || n2 >= 60 || n3 >= 60){
        return err;
    } else if (n1 >= 10 && n2 >= 10 && n3 >=10){
        return d = `${a}:${b}:${c}`;
    } else if (n1 < 10 && n2 < 10 && n3 < 10) {
        return d = `0${a}:0${b}:0${c}`;
    } else if (n1 < 10 && n2 >= 10 && n3 >= 10) {
        return d = `0${a}:${b}:${c}`;
    } else if (n1 < 10 && n2 < 10 && n3 >= 10) {
        return d = `0${a}:0${b}:${c}`; 
    } else if (n1 < 10 && n2 >= 10 && n3 < 10) {
        return d = `0${a}:${b}:0${c}`; 
    } else if (n1 >= 10 && n2 < 10 && n3 >= 10) {
        return d = `${a}:0${b}:${c}`;
    } else if (n1 >= 10 && n2 < 10 && n3 < 10) {
        return d = `${a}:0${b}:0${c}`;
    } else if (n1 >= 10 && n2 >= 10 && n3 < 10 ) {
        return d = `${a}:${b}:0${c}`;
    }
}

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

let eighth = (n1 = 0, n2 = 0, n3 = 0) => {
    const err = 'Error';

    let sec; 

    if (n1 >= 24 || n2 >= 60 || n3 >= 60){
        return err;
    } else {
        return sec = (n1 * 60) * 60 + n2 * 60 + n3;
    }
}


function updateResult7() {
    const h1 = document.getElementById('result7');
    const input = document.getElementById('input71');
    const input1 = document.getElementById('input72');
    const input2 = document.getElementById('input73');

    const num1 = +input.value;
    const num2 = +input1.value;
    const num3 = +input2.value;
 
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      h1.innerText = 'Не числовое значение';
    } else {
        let time = document.createElement('li');
        time.innerText = 'Время ' + seventh(num1, num2, num3);
        result7.append(time);
        let sec = document.createElement('li');
        sec.innerText = 'Время в секундах ' + eighth(num1, num2, num3);
        result7.append(sec);
    }
  }

  // Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

  let ninth = (n1) => {
      let err = 'error';

      let hour;
      let min;
      let sec;

      let res;
    

      if (n1 >= 86400){
          return err;
      } else if (Math.floor(n1 / 3600) < 0) {
        hour = '00';
      } else {
          hour = Math.floor(n1 / 3600);
          if (hour < 10){
            hour = `0${hour}`;
          } else {
              hour;
          }
      }

    // Нашли час

    if (Math.floor((n1 - Math.floor(n1 / 3600) * 3600) / 60) < 0) {
        min = '00';
    }  else {
        min = Math.floor((n1 - Math.floor(n1 / 3600) * 3600) / 60);
        if (min < 10) {
            min = `0${min}`;
        } else {
            min;
        }
    }

    // Нашли минуты
    
    let a = n1 - Math.floor(n1 / 3600) * 3600;
    sec = a - Math.floor(a / 60) * 60;

    if (sec == 0) {
        sec = 0;
    } else if (sec < 10) {
        sec = `0${sec}`;
    } else {
        sec;
    }
    
    res = (`${hour}:${min}:${sec}`);
    return res;
  }


  function updateResult9() {
    const h1 = document.getElementById('result9');
    const input = document.getElementById('input9');

    const num1 = +input.value;
 
    if (isNaN(num1)) {
      h1.innerText = 'Не числовое значение';
    } else {
        h1.innerText = ninth(num1);
    }
  }

//   Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» 

let tenth = (n1, n2, n3, n4, n5, n6) => {
    let first = eighth(n1, n2, n3);
    let second = eighth(n4, n5, n6);

    let dif;
    let res;
    let z = 0;
    let err = 'error';

    if (isNaN(first) || isNaN(second)){
        return err;
    } else if (first == second) {
        return z;
    } else if (first > second) {
         dif = first - second;
    } else {
         dif = second - first;
    }
    
    res = ninth(dif);
    return res;
}



function updateResult10() {
    const h1 = document.getElementById('result10');
    const input = document.getElementById('input101');
    const input1 = document.getElementById('input102');
    const input2 = document.getElementById('input103');
    const input3 = document.getElementById('input104');
    const input4 = document.getElementById('input105');
    const input5 = document.getElementById('input106');

    const num1 = +input.value;
    const num2 = +input1.value;
    const num3 = +input2.value;
    const num4 = +input3.value;
    const num5 = +input4.value;
    const num6 = +input5.value;
 
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) {
      h1.innerText = 'Не числовое значение';
    } else {
        h1.innerText = tenth(num1, num2, num3, num4, num5, num6)
    }

  }


 
  
