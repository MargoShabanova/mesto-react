import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopup, setIsEditProfilePopup] = React.useState(false);
  const [isAddCardPopup, setIsAddCardPopup] = React.useState(false);
  const [isEditAvatarPopup, setIsEditAvatarPopup] = React.useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopup(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddCardPopup(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopup(true);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopup}
        // onClose={closeAllPopups}
      >
        <fieldset className="form__container">
          <input id="name-input" name="name" type="text" className="form__item form__item_type_name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="name-input-error form__item-error"></span>
          <input id="metier-input" name="description" type="text" className="form__item form__item_type_metier" placeholder="О себе" required minLength="2" max="200" />
          <span className="metier-input-error form__item-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddCardPopup}
      >
        <fieldset className="form__container">
          <input id="place-name-input" name="name" type="text" className="form__item form__item_place-name" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="place-name-input-error form__item-error"></span>
          <input id="place-url" name="link" type="url" className="form__item form__item_picture-link" placeholder="Ссылка на картинку" required />
          <span className="place-url-error form__item-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopup}
      >
        <fieldset className="form__container">
          <input id="avatar-input" name="avatar-url" type="url" className="form__item form__item_avatar-link" placeholder="Ссылка на картинку" required />
          <span className="avatar-input-error form__item-error"></span>
        </fieldset>
      </PopupWithForm>
      <Footer />
    

    <div className="popup popup_type_delete-confirm">
      <div className="popup__container popup__content">
        <button className="popup__close popup__close-cards"></button>
        <form className="form form-delete" name="delete-card" noValidate>
          <h2 className="form__title">Вы уверены?</h2>
          <input type="hidden" name="input-id" value="" />
          <button type="submit" className="form__submit form__submit_delete">Да</button>
        </form>
      </div>
    </div>

    {/* <div className="popup popup_type_avatar-edit">
      <div className="popup__container popup__content">
        <button className="popup__close popup__close-avatar-edit"></button>
        <form className="form form_type_avatar-edit" name="avatar" noValidate>
          <h2 className="form__title">Обновить аватар</h2>
          <fieldset className="form__container">
            <input id="avatar-input" name="avatar-url" type="url" className="form__item form__item_avatar-link" placeholder="Ссылка на картинку" required />
            <span className="avatar-input-error form__item-error"></span>
          </fieldset>
          <button type="submit" className="form__submit form__submit_edit">Сохранить</button>
        </form>
      </div>
    </div> */}

    <div className="popup popup_type_open-card">
      <div className="popup__card-container popup__content">
        <button className="popup__close popup__close_image" type="button"></button>
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__image-title"></h2>
      </div>
    </div>

    <template id="initial-template">
      <li className="element element_checked">
        <img className="element__photo" src="#" alt="" />
        <button className="element__delete" type="button"></button>
        <div className="element__name-container">
          <h2 className="element__name"></h2>
          <div className="element__like-container">
            <button className="element__button" type="button"></button>
            <span className="element__like-count"></span>
          </div>
        </div>
      </li>
    </template>
    
  </div>
  );
}

export default App;
