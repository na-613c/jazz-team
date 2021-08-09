import React from 'react';
import './Profile.css';

const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5ZtMI-JUuiy9vblAsbVS6T5n-jXqYTLgyg&usqp=CAU'

const Profile = ({ username, events }) => {

    let userEvents = events.map((e) => (
        <div key={e.uId}>
            <p>Время: {e.dateTime}</p>
            <p>Тема: {e.title}</p>
            <p>Имя: {e.name}</p>
            <hr />
        </div>))

    return (
        <div className='profile'>
            <div className='profile-avatar' >
                <img src={imgUrl} alt="avatar" />
            </div>
            <div className='profile-info'>
                <p> Username: </p> <p>{username}</p>
                <p>Имя:</p><p>Иван</p>
                <p>О себе:</p><p>
                    В последние годы проходил обучение.
                    Желаю развиваться в профессиональной сфере.
                    Изучал HTML, CSS, SCSS, Java Script, Type Script, GIT, React js, React-Redux, MobX, Rest API. Писал тесты. Работал с такими дизайн-системами как Ant Design и Bootstrap. Так же взаимодействовал с jQuery и Node.js, в том числе делал парсер сайта и бота для Discord.
                    Окончил курсы IT-ACADEMY "Курс React и Angular для разработки веб-приложений".</p>
            </div>
            <h2>События:</h2>
            <div style={{ marginTop: 6 }}>{userEvents}</div>
        </div>
    );
}

export default React.memo(Profile);