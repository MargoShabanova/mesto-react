import React, {useEffect, useState} from 'react';
import { api } from '../utils/api';

export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  const [userName, setUserName] = useState('User name');
  const [userDescription, setUserDescription] = useState('About user');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
  		<section className="profile">
        <div className="profile__container">
  			  <div className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="фото пользователя" />
          </div>
  			  <div className="profile__info">
  				  <h1 className="profile__name">{userName}</h1>
  				  <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
  				  <p className="profile__metier">{userDescription}</p>
  			  </div>
        </div>
  			<button className="profile__add-button" type="button" onClick={onAddPlace}></button>
  		</section>

      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  )
}