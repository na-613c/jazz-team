import React from 'react';


const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

const Days = ({ week, id_week, onSelectDate, events, selectDate }) => {

    const onCurrentDate = (each) => {

        let day = new Date().getDate().length !== 1 ? new Date().getDate() : '0' + new Date().getDate();
        let month = new Date().getMonth().length === 1 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1);

        let today = `${day}.${month}.${new Date().getFullYear()}, 00:00:00`;
        return each.jsDate === today;
    }

    const dateTimeEvents = events.map(e => e.dateTime)

    const eventsDay = (each) => {
        if (dateTimeEvents.includes(each.jsDate)) {
            return events.filter(e => e.dateTime === each.jsDate).map((fe) => {
                return (
                    <div key={fe.uId}>
                        <p>{fe.title}</p>
                        <p style={{ fontSize: 10 }}>{fe.name}</p>
                    </div>
                )
            })
        }
    }

    const onClickSelectDate = (each) => {
        if (dateTimeEvents.includes(each.jsDate)) {
            return events.filter(e => e.dateTime === each.jsDate).map((fe) => {
                return onSelectDate(fe)
            })
        } else {
            onSelectDate({ dateTime: each.jsDate })
        }

    }

    return (
        <tr key={JSON.stringify(week)} className='calendar-week'>
            {week.map((each, id_day) => (
                <td
                    key={JSON.stringify(each)}
                    className={`calendar-day ${dateTimeEvents.includes(each.jsDate) && 'calenar-event'} ${onCurrentDate(each) && 'calendar-day-today'} ${selectDate?.dateTime === each.jsDate && 'calendar-day-active'} `}
                    onClick={() => onClickSelectDate(each)}
                >
                    <p>
                        {id_week === 0 && `${days[id_day]},`} {each.date}
                        {eventsDay(each)}
                    </p>
                </td>
            ))
            }
        </tr >
    );
}

export default React.memo(Days);