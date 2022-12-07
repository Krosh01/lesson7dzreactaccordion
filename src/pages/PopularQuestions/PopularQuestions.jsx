import React from 'react'
import { QueshionPop } from '../../data/popularData'
import PopularLi from './popularLi/popularLi'

const PopularQuestions = () => {

  return (
    <section className='popualarQue'>
        <div className='container'>
            <div className='popualarQue__head'>
                <p className='popualarQue__head-top'>Главная</p>
                <p className='popualarQue__head-bottom'>Популярные вопросы</p>
            </div>
            <h2 className='popualarQue__title'>Популярные вопросы</h2>
            <div className='popualarQue__content'>
                <div className='popualarQue__content_first'>
                    <h2 className='popualarQue__content_first-title'>ПОКУПКИ</h2>
                    <ul className='popualarQue__content_first-accordion'>
                    {
                        QueshionPop.map((item) => (
                            <PopularLi item={item}/>
                        ))
                    }
                    </ul>
                    <h2 className='popualarQue__content_first-title'>ВОЗВРАТ И ОБМЕН</h2>
                    <ul className='popualarQue__content_first-accordion'>
                        {
                            QueshionPop.map((item) => (
                                <PopularLi item={item}/>
                            ))
                        }
                    </ul>
                </div>
                <div className='popualarQue__content_second'>
                    <h2 className='popualarQue__content_second-title'>
                    Есть вопросы<br/>
                    или предложения?<br/>
                    НАПИШИТЕ НАМ
                    </h2>
                    <form action="">
                        <input className='popualarQue__content_second-input' type="text" placeholder='Имя' required/>
                        <input className='popualarQue__content_second-input' type="text" placeholder='E-mail'/>
                        <br/>
                        <label className='popualarQue__content_second-label'>Что вас интересует:</label>
                        <select className='popualarQue__content_second-label_select' name="" id="">
                            <option value="Вопрос">Вопрос</option>
                            <option value="одежда">lorem</option>
                            <option value="одежда">lorem</option>
                            <option value="одежда">lorem</option>
                        </select>
                        <label className='popualarQue__content_second-arrow'>▼</label>
                        <textarea className='popualarQue__content_second-textArea' cols="32" rows="5" placeholder='Текстовое собщение' required></textarea>
                        <button className='popualarQue__content_second-btn' type="submit">Отправить</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularQuestions