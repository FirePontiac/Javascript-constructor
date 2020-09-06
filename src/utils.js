export function row(content, styles = '') {
    const Style=`margin:0 ${styles}` // Отступы в колонках
    return `<div class="row" style = "${styles}">${content}</div>`
}

export function col (content) {
    return `<div class="col-sm">${content}</div>`
}

// Сюда добавим функционал для более легкой обработки стилей в файле model
export function css(styles = {}) { // styles это обьект по умолчанию, если его не передаём
    const toString = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toString).join(';') // Обьект можно перебрать по ключам, далее в массив и к строке
    // toString принимает key (ключ) данного styles далее всё это в строку `${key}: ${styles[key]}`; где key принимает значение styles по ключу key
    // Теперь можно в файле Model более удобно оформлять Styles
}