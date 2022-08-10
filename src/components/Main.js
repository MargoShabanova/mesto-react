import {useContext, useEffect, useState} from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLked = card.likes.some(i => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  };

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      });
  }

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
  			  <div className="profile__avatar-button" type="button" onClick={onEditAvatar}>
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}