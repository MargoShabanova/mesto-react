import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState("");

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setIsOpen(false);
    setSelectedCard(false);
  };

  const handleCardClick = (selectedCard) => {
    setIsOpen(true);
    setSelectedCard(selectedCard);
  };

  const handleUpdateUser = (data) => {
    api
      .editProfile(data.name, data.about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <input
              id="place-name-input"
              name="name"
              type="text"
              className="form__item form__item_place-name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="place-name-input-error form__item-error"></span>
            <input
              id="place-url"
              name="link"
              type="url"
              className="form__item form__item_picture-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="place-url-error form__item-error"></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="form__container">
            <input
              id="avatar-input"
              name="avatar-url"
              type="url"
              className="form__item form__item_avatar-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="avatar-input-error form__item-error"></span>
          </fieldset>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={isOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
