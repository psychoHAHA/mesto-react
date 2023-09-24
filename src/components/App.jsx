import { useEffect, useState } from 'react'
import '../pages/index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

import { api } from '../utils/Api'

function App() {

  const [userInfo, setUserInfo] = useState({})
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    Promise.all([api.getUserData(), api.getAllCards()])
    .then(([user, cards]) => {
      setUserInfo(user)
      setCardList(cards)
    })
    .catch((err) => alert(err))
  }, [])

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

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
  }

  function handleOverlayClick(event) {
    if (event.target.classList.contains('popup')) {
      closeAllPopups()
    }
  }

  return (
    <>
        <div className='page'></div>
        <Header/>

        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userInfo={userInfo}
          cardList={cardList}
        />

        <Footer />

        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Редактирование профиля'
          buttonText='Сохранить'
          >
          
          <input type="text" placeholder="Имя" className="popup__input popup__input_edit_profile-name" value="Жак-Ив Кусто" name="name" required minLength="2" maxLength="40" id="name-input" />
          <span className="popup__input-error name-input-error"></span>
          <input type="text" placeholder="О себе" className="popup__input popup__input_edit_profile-info" value="Исследователь океана" name="about" required minlength="2" maxlength="200" id="info-input" />
          <span className="popup__input-error info-input-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Новое место'
          buttonText='Создать'
          >
            <input type="text" placeholder="Название" autocomplete="off" class="popup__input popup-card__input popup-card__input_edit_image-name" name="name" required minLength="2" maxLength="30" id="title-input" />
            <span class="popup__input-error title-input-error"></span>
            <input type="url" placeholder="Ссылка на картинку" class="popup__input popup-card__input popup-card__input_edit_image-url" name="link" required id="url-input" />
            <span class="popup__input-error url-input-error"></span>
        </PopupWithForm>

        <PopupWithForm 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
          title='Обновить профиль'
          buttonText='Сохранить'
          >
          <input type="url" placeholder="Ссылка на аватар профиля" class="popup__input popup-avatar__input popup-avatar__input_edit_image-url" name="avatar" required id="avatar-input" />
          <span class="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
        
      <template id="template-element" className="card">
          <div className="group__element">
              <img src="#" alt="#" className="group__image" />
              <button className="group__button-delete" type="button" aria-label="Удалить"></button>
              <div className="group__items">
                  <h2 className="group__title"></h2>
                  <div className="group__like-container">
                      <button type="button" aria-label="Отметить как понравившееся" className="group__button"></button>
                      <p className="group__like-counter"></p>
                  </div>
              </div>
          </div>
      </template>

    </>
  )
}
export default App;
