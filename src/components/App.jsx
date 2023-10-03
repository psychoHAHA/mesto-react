import { useEffect, useState } from 'react'
import '../pages/index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import { api } from '../utils/Api'

function App() {

  const [userInfo, setUserInfo] = useState({})
  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  useEffect(() => {
    Promise.all([api.getUserData(), api.getAllCards()])
    .then(([user, cards]) => {
      setCurrentUser(user)
      setCards(cards)
    })
    .catch((err) => alert(err))
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
  }

  function handleOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
      closeAllPopups()
    }
  }

  function handleCardClick(card) {
    setSelectedCard({name: card.name, link: card.link})
    setIsImagePopupOpen(true)
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'></div>
      <Header/>

        
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        userName={userInfo.name}
        userAbout={userInfo.about}
        userAvatar={userInfo.avatar}
        cards={cards}
      />

        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Редактирование профиля'
          buttonText='Сохранить'
          >
          
          <input type="text" placeholder="Имя" className="popup__input popup__input_edit_profile-name" name="name" required minLength="2" maxLength="40" id="name-input" />
          <span className="popup__input-error name-input-error"></span>
          <input type="text" placeholder="О себе" className="popup__input popup__input_edit_profile-info" name="about" required minLength="2" maxLength="200" id="info-input" />
          <span className="popup__input-error info-input-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Новое место'
          buttonText='Создать'
          >
            <input type="text" placeholder="Название" autoComplete="off" className="popup__input popup-card__input popup-card__input_edit_image-name" name="name" required minLength="2" maxLength="30" id="title-input" />
            <span className="popup__input-error title-input-error"></span>
            <input type="url" placeholder="Ссылка на картинку" className="popup__input popup-card__input popup-card__input_edit_image-url" name="link" required id="url-input" />
            <span className="popup__input-error url-input-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Обновить профиль'
          buttonText='Сохранить'
          >
          <input type="url" placeholder="Ссылка на аватар профиля" className="popup__input popup-avatar__input popup-avatar__input_edit_image-url" name="avatar" required id="avatar-input" />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
        <ImagePopup 
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
        />
    </CurrentUserContext.Provider>
  )
}
export default App;
