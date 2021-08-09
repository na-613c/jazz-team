import React, { useState, useEffect } from 'react';
import LeftBtn from './svg/LeftBtn';
import RightBtn from './svg/RightBtn';

import './Calendar.css';
import Days from './days/Days';
import Modal from './modal/Modal';
import Search from './svg/Search';
import Filter from './filter/Filter';

const { datesGenerator } = require('dates-generator');


const months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'];

const Calendar = ({ events, addEvent, updEvent }) => {

    const [selectDate, setSelectDate] = useState();

    const [modal, setModal] = useState({
        isShowModal: false,
        type: 'Добавить'
    });

    const [dates, setDates] = useState([]);
    const [calendar, setCalendar] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        startingDay: 1,
    });

    useEffect(() => {
        const body = {
            month: calendar.month,
            year: calendar.year,
            startingDay: 1,
        };
        const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

        setDates([...dates]);
        setCalendar({
            ...calendar,
            nextMonth,
            nextYear,
            previousMonth,
            previousYear
        });
    }, [])

    const onClickToday = () => {
        const body = {
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            startingDay: 1,
        };
        const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

        setDates([...dates]);
        setCalendar({
            ...calendar,
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            nextMonth,
            nextYear,
            previousMonth,
            previousYear
        });
    }

    const onClickNext = () => {
        const body = { month: calendar.nextMonth, year: calendar.nextYear, startingDay: 1 };
        const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

        setDates([...dates]);
        setCalendar({
            ...calendar,
            month: calendar.nextMonth,
            year: calendar.nextYear,
            nextMonth,
            nextYear,
            previousMonth,
            previousYear
        });
    }

    const onClickPrev = () => {
        const body = { month: calendar.previousMonth, year: calendar.previousYear, startingDay: 1 };
        const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

        setDates([...dates]);
        setCalendar({
            ...calendar,
            month: calendar.previousMonth,
            year: calendar.previousYear,
            nextMonth,
            nextYear,
            previousMonth,
            previousYear
        });
    }

    const onSelectDate = (date) => {
        setSelectDate(date)
    }

    const onCancel = () => {
        setModal({
            isShowModal: false,
            type: ''
        })
    }

    const onAdd = () => {
        setModal({
            isShowModal: true,
            type: 'Добавить'
        })
    }

    const onUpd = () => {
        setModal({
            isShowModal: true,
            type: 'Обновить'
        })
    }


    const dateElements = dates.length > 0 && dates.map((week, id_week) => {
        return (
            <Days
                key={{ id_week }}
                week={week}
                id_week={id_week}
                onSelectDate={onSelectDate}
                events={events}
                selectDate={selectDate}
            />
        )
    })

    return (
        <div className='calendar'>
            {modal.isShowModal && (
                <Modal
                    selectDate={selectDate}
                    addEvent={addEvent}
                    updEvent={updEvent}
                    type={modal.type}
                    cancel={onCancel}
                />)}
            <div className='calendar-header'>
                <div className='calendar-container'>
                    <div>
                        <div className='btn-prime' onClick={onAdd}>Добавить</div>
                        <div className='btn-prime' onClick={onUpd}>Обновить</div>
                    </div>
                    <div className='calendar-search'>
                        <Search />
                        <div>
                            <Filter events={events} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='calendar-table'>
                <div className='calendar-container'>
                    <div className='calendar-title'>
                        <LeftBtn onClick={onClickPrev} className='calendar-title-child' />
                        <span className='calendar-title-child'>{months[calendar.month] + ' ' + calendar.year}</span>
                        <RightBtn onClick={onClickNext} className='calendar-title-child' />
                        <div onClick={onClickToday} className='calendar-title-child calendar-today'>Сегодня</div>
                    </div>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                {dateElements}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default React.memo(Calendar);