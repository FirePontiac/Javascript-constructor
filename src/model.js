import image from './images/test.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import { css } from './utils'
const text = `I will best code contributor` // Стили этого элемента описаны ниже
export const model = [  // Работая через классы избавляемся от опечаток
    new TitleBlock ('Awsome Photo Landings', {
        tag: 'h1',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            'text-align': 'center',
            color: '#99ccff', // Цвет шрифта
            padding: '1.5rem'
        })
        // styles: 'background: darkred; color: #fff; text-align: center;'
     } ),
     
    new ImageBlock (image, { // После рефактора в класс нетривиальным становится подключение картинки
        styles: 'display: flex; padding: 2rem 0; justify-content:center', // padding: 2rem 0 - это отступы по вертикали, display: flex для корневого элемента блока чтобы по центру было
        alt: 'My Only',
        imageStyles: 'width: 150px; height: auto;'
    }),

    // {type: 'image', value: image, options: { // В value важно, но путь до картинки в templates.js и в этом же файле в шапке
    //     styles: 'display: flex; padding: 2rem 0; justify-content:center', // padding: 2rem 0 - это отступы по вертикали, display: flex для корневого элемента блока чтобы по центру было
    //     alt: 'My Only',
    //     imageStyles: 'width: 150px; height: auto;'
    // }},

    // Solid: Open close principle

    new TextBlock (text,{
        styles: 'Font-size:40px; color: #cfff3; background: rgba(15,3,8, .1); padding: 1rem; text-align: center;'
    }),

    // {type: 'text', value: 'Nice to see You on our site Welcome', options: {
    //     styles: 'Font-size:40px; color: #cc9933; background: rgba(15,3,8, .1); padding: 1rem; text-align: center; '
    // }}, 

    new TextColumnsBlock ( [ 
    'Position 1',
    'Position 2',
    'Position 3',
    'Position 4',
    ], {styles: 'Font-size:25px; padding: 1rem; text-align: center;'}),

    // С классом на 1 строчку выше менее читабельно, нетривиально что в {} это Options
    // {type: 'textColumns', value: [
    //     'Вариант 1',
    //     'Вариант 2',
    //     'Вариант 3',
    //     'Вариант 4',
    // ], options: {
    //     styles: 'Font-size:25px; padding: 1rem; background: #ffffcc; text-align: center;'
    // }}
]