import React, { useRef, useState } from 'react';

const emptyMsgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}

const Filter = ({ events }) => {
    const filterEl = useRef(null);
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState();

    const eventsToString = events.map((e) => {
        return {
            ...e,
            dateTime: e.dateTime.slice(0, 10)
        }
    })

    const handleChange = (event) => {
        let eventFiltred = eventsToString
            .filter((e) => e.dateTime === event.target.value || e.title === event.target.value || e.name === event.target.value)
            .map((e) => {
                return (
                    <p>{e.dateTime} - {e.title}:<br /> {e.name} <hr /></p>
                )
            })
        setValue(eventFiltred)
    }

    return (
        <>
            <input
                ref={filterEl}
                type="text"
                placeholder='Событие, дата или участник'
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={handleChange}
            />
            {isFocus && (
                <div className='calendar-filter'>
                    {value.length ? value : <span style={emptyMsgStyle}>Нет совпадений</span>}
                </div>
            )}
        </>
    )
}

export default React.memo(Filter);