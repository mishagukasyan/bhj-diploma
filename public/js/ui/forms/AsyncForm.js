/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {'use strict';

  class AsyncForm {
  
    constructor( element ) {
      if ( !element ) { throw Error }
      this.element = element;
      this.formData = new FormData( this.element );
      this.registerEvents();
    };
  
    registerEvents() {
      this.element.onsubmit = event => {
        this.submit( event );
        return false;
      }
    };
  
    getData() {
      let data = {};
      let formData = new FormData( this.element );
      for ( let key of this.formData.keys() ) {
        data[key] = formData.get(key);
      }
      return data;
    }
  
    onSubmit( options ) {
    };
  
    submit() {
      this.onSubmit( this.getData() );
    };
  
    resetFormData() {
      this.element.querySelectorAll('input').forEach( element => {
        element.value = '';
      })
    };
  
  }

  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {

  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData() {

  }

  onSubmit(options){

  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit() {

  }
}