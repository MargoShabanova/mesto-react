import {useContext, useEffect, useState} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
  		<section className="profile">
        <div className="profile__container">
  			  <div className="profile__avatar-button" onClick={onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt="фото пользователя" />
          </div>
  			  <div className="profile__info">
  				  <h1 className="profile__name">{currentUser.name}</h1>
  				  <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
  				  <p className="profile__metier">{currentUser.about}</p>
  			  </div>
        </div>
  			<button className="profile__add-button" type="button" onClick={onAddPlace}></button>
  		</section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) => (
            <Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}