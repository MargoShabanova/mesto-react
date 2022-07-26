import {useEffect, useState} from 'react';

export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  // const handleEditAvatarClick = () => {
  //   document.querySelector('.profile__avatar-button').addEventListener('click', () => {
  //     console.log('я нажался')
  //     //document.querySelector('.popup_type_avatar-edit').classList.add('popup_opened');
  //   })
  // }

  // const handleEditProfileClick = () => {
  //   document.querySelector('.profile__edit-button').addEventListener('click', () => {
  //     document.querySelector('.popup_type_profile-edit').classList.add('popup_opened');
  //   })
  // }

  // const handleAddPlaceClick = () => {
  //   document.querySelector('.profile__add-button').addEventListener('click', () => {
  //     document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  //   })
  // }

  return (
    <main>
  		<section className="profile">
        <div className="profile__container">
  			  <div className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" src="./images/image.jpg" alt="фото пользователя" />
          </div>
  			  <div className="profile__info">
  				  <h1 className="profile__name">User name</h1>
  				  <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
  				  <p className="profile__metier">About user</p>
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