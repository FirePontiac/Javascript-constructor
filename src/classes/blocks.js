// import { extend } from "lodash";
import {col, row} from '../utils' // Col и Row смотри соответств файл (Оч важно !)

export class Block {
    constructor(value, options){ // Тут избавились от type, перед value,
        this.value = value,
        this.options = options
    }

    // Новый метод, но его базовый функционал использовать не будем, если дойдём до базового функционала, то сообщим об ошибке
    toHTML () {
        throw new Error ('Метод to HTML должен быть реализован') // Если в частном классе не реаализуется метод toHTML то выведется ошибка
    }

}
// Тут и реализуем Solid: Open close principle
// Сперва создадим различные типы классов которые будут наследоваться от базового класса Block
// И сразу дбудем их экспортиролвать, так как ими дальше будем пользоваться

// Снизу примеры export это базовые примекры наслодования в JS

export class TitleBlock extends Block { // TitleBlock наследуется от Block
    constructor(value, options) {
    super(value, options) // Тут сам тип
    }
    toHTML() { // Параметр () для этого метода хранится в this, поэтому переделам снизу:
    
    const {tag = 'H2', styles} = this.options // Таким образом избавляемся от излишнего кода, заносим в переменную , потом к ней обращаемся
    return row(col(`<${tag}>${this.value}</${tag}>`), styles) // Из Файла Templates

    //     const {tag, styles} = block.options // Таким образом избавляемся от излишнего кода, заносим в переменную , потом к ней обращаемся
    // return row(col(   `  
    //         <${tag}>${block.value}</${tag}>    Так было
    // `), styles) // Из Файла Templates
    }
}

export class ImageBlock extends Block { // ImageBlock наследуется от Block
    constructor(value, options) {
        super(value, options) // Тут сам тип, Тут избавились от type, перед value, стало менее читаемо
    }
    toHTML() {
        const {alt, styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt "${alt}" style="${imageStyles}" />`
        return row(html, styles) // (col( функцию удалили, так как стили некоректно применялись
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
    super(value, options)
    }
    toHTML() {
        return row(col(`<p style="margin-bottom: 0">${this.value}</p>`), this.options.styles) // (col( функцию удалили, так как стили некоректно применялись
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
    super(value, options)
    }
    toHTML() {
    const html = this.value.map(item => col(item))
    return row(html.join(''), this.options.styles) // (col( функцию удалили, так как стили некоректно применялись
    }
}

// Домашка - добавить пару модулей через класс и метод на сайт как выше описано