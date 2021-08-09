import React, { useRef } from 'react';

const Modal = ({ selectDate, addEvent, updEvent, cancel, type }) => {

    const titleEl = useRef(null);
    const nameEl = useRef(null);

    const onClick = () => {
        if (!condition) {
            if (type === 'Добавить') {
                addEvent(selectDate.dateTime, titleEl.current.value, nameEl.current.value)
            } else {
                updEvent(selectDate.dateTime, titleEl.current.value, nameEl.current.value, selectDate.uId)
            }
            cancel()
        }
    }
    console.log(selectDate?.dateTime === undefined)

    let condition = (type === 'Добавить' && selectDate?.uId !== undefined) || (type !== 'Добавить' && selectDate?.uId === undefined) || (selectDate?.dateTime === undefined)

    let editDate = selectDate?.dateTime.slice(0, 10) || 'Выберите дату';

    return (
        <div className='calendar-modal'>
            <div className='calendar-modal-container'>
                <div>
                    <div
                        onClick={cancel}
                        style={{ position: 'absolute', top: 0, right: 10, cursor: 'pointer' }}
                    >
                        x
                    </div>
                    {type}
                    <p>{editDate}</p>
                    <input ref={titleEl} type='text' placeholder='Название события' defaultValue={selectDate?.title} />
                    <input ref={nameEl} type='text' placeholder='Участники' defaultValue={selectDate?.name} />
                </div>
                <input
                    type="button"
                    className={`${condition && 'disabled'} btn-prime`}
                    onClick={onClick}
                    disabled={condition}
                    value={type}
                />
            </div>
        </div>
    )
}

export default React.memo(Modal);