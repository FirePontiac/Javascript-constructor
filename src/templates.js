import {col, row} from './utils'

function title(block) { // Title тут условно компонет генерируемый HTML, далее избаляемся от <div class="col-sm">
    const {tag, styles} = block.options // Таким образом избавляемся от излишнего кода, заносим в переменную , потом к ней обращаемся
    return row(col(   `  
            <${tag}>${block.value}</${tag}>    
    `), styles) // В ${} - динамически ченерируемый контент, в return подключаем обьект возвращаемый из гругого файла
} // <div class="col-sm"> избаляемся путём передачи функции в функцию, не оченб удачно

function text(block) { // Далее выносим <div class="row"> в отдельную функцию в другом файле, чтобы не повторять
    return row(col(`
        <p style="margin-bottom: 0">${block.value}</p>
    `), block.options.styles)
}

function image(block) { 
    const {alt, styles, imageStyles} = block.options
    const html = `<img src="${block.value}" alt "${alt}" style="${imageStyles}" />`
        return row(html, styles) // (col( функцию удалили, так как стили некоректно применялись
}


function textColumns(block) { // Скопировали из индекса полный вариант и удалили, а далее будем тут же генерировать количество колонок
    // const html = block.value.map(item => `<div class="col-sm">${item}</div>`) // Map для перебора по массиву, и возврата тоже массива, это метод, item -это текст который динамически добавляется
    const html = block.value.map(item => col(item))
    return row(html.join(''), block.options.styles) // Стало, упростили  
   
} // Засуныли block value в массив и уже массив добавили в ${html}
// Чуть выше было ${html.join('')} , а <div class="row"> уже убрали до этого
export const templates = {title, text, textColumns, image} // Это обьект экспортирующий эти функции 
   // title: title, Сперва было так
   // text: text,
   // textColumns: textColumns()
