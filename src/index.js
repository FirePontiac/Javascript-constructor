// Запускает Код 
import {model} from './model'
import { Site } from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'
// import {title, textColumns, text} from './templates' Было
// import {templates} from './templates'

const site = new Site('#site') // Но просто так раболтать не будет, это легко исправить в 14 строке, пример написан в 15 ой строке

// Создадим новую функцию которая обновляет модель и сайт когда мы добавляем новый элемент
const updateCallback = newBlock => {
    model.push(newBlock) // Так как model это массив, то можно просто push в массив
    site.render(model)
}

new Sidebar ('#panel', updateCallback) // Проинициализировали, Далеко потом добавили функцию updateCallback
    


site.render(model)
//console.log(templates['text']) // к обьекту можно обращаться через [] ; у каждого блока block.type есть Type который совпадаем с ключами данного обьекта
// Без коментов тут универсальный код, тут модифицировать не надо ничего, просто добавлять в blocks.js

// model.forEach(block => {                                   Legacy )))
//     site.insertAdjacentHTML('beforeend', block.toHTML())   Было
// })
    // site.$el.insertAdjacentHTML('beforeend', block.toHTML())
    // block это один из элементов массима model
    // console.log(block) // На данном этапе это должны быть инстансы класса Block
    // const generate = templates[block.type] // на каждой итерации мы забираем из templates block.type
    // // console.log(generate)
    // if (generate) { // проверка, если мы нашли данную функцию, то только в таком случае мы можем генерировать html
    //     const html = generate(block)
    //     site.insertAdjacentHTML('beforeend', html)
    // }


    // let html
    // if (block.type === 'title') { // Снизу функция titlle снизу возвращает спец полуцченную строку
    //     html = title(block)
    // } else if (block.type === 'text') {
    //     html = text(block)     
    // } else if (block.type === 'textColumns') {
    //     html = textColumns(block)   
    // } 
    
   //  site.insertAdjacentHTML('beforeend', html) // insertAdjacentHTML указывает куда добавить, html в конце это сформированая строка. тут же есть проблемма с DOM деревом

// За пределами model пишем то что должно быть в условии, дабы сразу не усложнать и подумать
// Было document.querySelector('#site').insertAdjacentHTML('beforeend', html) а для оптимизации времени вынесем в отдельную переменную

// document.querySelector('h1').style.color = 'red';
// console.log('I m Index');

// import _ from 'lodash';
// function component() {
//     const element = document.createElement('div');
// }
//  // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element
