import {TitleBlock, TextBlock} from '../classes/blocks'

export class Sidebar {
    // constructor (selector) { было, добавим функцию Update для добавления элементов на сайт, Это без применения паттерна Observer
    // Обработаем добавление этих элементов через call back
    constructor (selector, update) { // selector в конструкторе чтобы через него можно было управлять, с каким корневым элементом нужно было бы взаимодействовать
        this.$el = document.querySelector(selector)  // Эту херню скопировали из SIte.js файла там и описание есть
        this.update = update // Sidebar вторым параметром принимает функцию update
        this.init() // Чтобы вручную этот метод не вызывать тут прописали
    }

    //let textOne = 'Description: How to creacte element on this form'

    // Должен проинициализировать наш Sidebar
    init() { // 
        this.$el.addEventListener('submit', this.addBlock.bind(this)) // addEventListener добавляем новое собитие, которое делает 'submit' через функцию this.addBlock 
        // Тут же теряем контекст ! Так как сперва this.update = update а потом this.init() 
        // Чтобы такого не было - делаем  .bind(this) т.е. мы к функции addBlock чётко привязываем контекст this
        // this.$el.innerHTML = '<H1>Test</H1>' // Сгенерировали заголовок для Sidebar, было
        this.$el.innerHTML = this.template // Фишка геттера что без () в конце, т.е. просто как переменную
    }
    // // Создадим Геттер
    // get template () {
    //     return '<H1>Test</H1>'
    // }
    get template () {
      let textOne = 'Description: How to creacte element on this form' // Как добавить заголовок в форму ???
        return [
            block('text'), // Каждый элемент массива это будет функция описанная ниже
            block('title')
        ].join(''); // join помогает избавится от запятой
        
    }

    addBlock(event) {
        event.preventDefault() // это даёт работу с Event и не перезагружает страницу постоянно
        
        const type = event.target.name // Эти опции хорошо просматриваются в Console в браузере, обязательно туда смотреть, там куча значений
        const value = event.target.value.value // Не очень удачно, нечитаемо вообще, переделать в HTML коде
        const styles = event.target.styles.value // 
        // event.target Это сама форма и у неё к примеру берём атрибут name
    
    const Constructor = type === 'text' ? TextBlock : TitleBlock// Можно и не Constructor назвать а как угодно; ? вместо IF тут; 
    // : это знак иначе тут; Тут фашка Constructor Т.е. неважно какие параметры он принимает, пусть это будет TextBlock или TitleBlock неважно 
    // console.log(Constructor)
    const newBlock = new Constructor(value, {styles}) // value получили из формы чуть выше value = event.target.value.value
    // console.log(newBlock)
    this.update(newBlock) // Тут добавили функционал по добавлению элемента на страницу
        // Чистим форму отправки; Далее для того чтобы добавлять Элементы на страницу лучше пользоваться паттерном Observer
    event.target.value.value = ''
    event.target.styles.value = ''

    }
}

// 2 Блока позволяющие создавать контент для Text and Title

function block(type) { // Функция block помогает генерировать HTML
    // Нюанс name="value" placeholder="value" совпадают со значениями описанными в файле model
    return `
        <h5> Description: Input HTML Element to this page </h5>
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="Любое значение, ну почти">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="html code стиля без <>">
            </div>
            <button type="submit" class="btn btn-primary btn-sm"> Создать </button>
        </form>
            <hr />
            <h5> Here will be form to Upload image </h5>
    `
}