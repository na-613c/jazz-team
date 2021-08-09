import React, { useRef } from 'react';


const FriendsTbody = ({ user, onSetUserData, onSetEditMode, onSetActive }) => {

    const nameEl = useRef(null);
    const ageEl = useRef(null);
    const genderEl = useRef(null);
    const birthdayEl = useRef(null);



    const onClick = (event) => {
        event.stopPropagation();

        if (user.isEdit) {
            let newName = nameEl.current.value;
            let newAge = ageEl.current.value;
            let newGender = genderEl.current.value;
            let newBirthday = birthdayEl.current.value;

            onSetUserData(user.id, newName, newAge, newGender, newBirthday);
        } else {
            onSetEditMode(user.id);
        }
    }

    return (
        <tr onClick={() => !user.isEdit && onSetActive(user.id)} className={user.isActive && 'friends-active'}>
            <td className={`${user.isActive && 'friends-active'} friends-td-sticky`}>
                <input ref={nameEl} type='text' disabled={!user.isEdit} defaultValue={user.name} />
            </td>
            <td><input ref={ageEl} type='number' disabled={!user.isEdit} defaultValue={user.age} /></td>
            <td><input ref={genderEl} type='text' disabled={!user.isEdit} defaultValue={user.gender} /></td>
            <td><input ref={birthdayEl} type='text' disabled={!user.isEdit} defaultValue={user.birthday} /></td>
            <td >
                <div onClick={onClick} className='btn-prime' style={{ padding: 0, width: 150 }}>
                    {user.isEdit ? 'Сохранить' : 'Редактировать'}
                </div>
            </td>
        </tr>

    );
}

export default React.memo(FriendsTbody);