import React from 'react';

import './Friends.css';
import FriendsTbody from './tbody/FriendsTbody';

const Friends = ({ columns, users, onSetUserData, onSetEditMode, onSetActive }) => {

    let tableColumns = [...columns, 'Действие'].map((i, id) => (
        <td
            className='friends-td-sticky'
            style={{
                position: id === 0 && 'sticky',
                background: 'white',
                zIndex: id === 0 && 100,
                width: 300
            }}
        > {i}</td >))

    let tbody = users.map((user) => (
        <FriendsTbody
            key={user.id}
            user={user}
            onSetUserData={onSetUserData}
            onSetEditMode={onSetEditMode}
            onSetActive={onSetActive} /
        >));

    let activeUsers = users.filter((u) => u.isActive);

    return (
        <div className='friends'>
            <div className='friends-container'>
                <div className='friends-table'>
                    <div className='friends-table-body' >
                        <table style={{ width: 900, minWidth: '100%', tableLayout: 'fixed' }}>
                            <colgroup>
                                <col style={{ width: 300 }} />
                                <col style={{ width: 300 }} />
                                <col style={{ width: 300 }} />
                                <col style={{ width: 300 }} />
                                <col style={{ width: 300 }} />
                            </colgroup>
                            <thead style={{ width: 900, minWidth: '100%', position: 'sticky ' }}>
                                <tr>
                                    {tableColumns}
                                </tr>
                            </thead>
                            <tbody>
                                {tbody}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <p>
                            Всего выбрано {activeUsers.length} полей
                        </p>
                        <p>
                            Суммарный возраст: {activeUsers.reduce(((acc, cur) => +acc + (+cur.age)), 0)}
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default React.memo(Friends);