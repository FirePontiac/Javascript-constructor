// import { model } from "../model"

export class Site {
    // Когда мы создаём экземпляр класса Site мы хотим его привязывать к определённому элементу в DOM дереве
    // в текущей пизиции это const site = document.querySelector('#site') в файле index.js
    constructor (selector) { // selector по нему будем привязывать свойство к определённому элементу в DOM дереве
        this.$el = document.querySelector(selector)  // $  - это для тго что просто для себя понять что тут DOM нода
        // selector передаём обратно как параметр в конструктор; теперь страничку создаём по другому
    }

    render(model) { // Элемент React технологии
        // this.$el
        // Перед добавлением почистим шаблон
        this.$el.innerHTML = ''
        model.forEach(block => {
           this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
   }
}