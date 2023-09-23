import { useEffect, useState } from 'react'
import '../pages/index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function handleEditProfileClick() {
    const handleButtonProfile = document.querySelector('.profile__button-edit')
    handleButtonProfile.addEventListener('click', () => {
      const popupProfile = document.querySelector('.popup-profile')
      popupProfile.classList.add('popup_opened')
    })
  }

  function handleAddPlaceClick() {
    const handleButtonPlace = document.querySelector('.profile__button')
    handleButtonPlace.addEventListener('click', () => {
      const popupCard = document.querySelector('.popup-card')
      popupCard.classList.add('popup_opened')
    })
  }

  function handleEditAvatarClick() {
    const handleButtonPlace = document.querySelector('.profile__avatar')
    handleButtonPlace.addEventListener('click', () => {
      const popupAvatar = document.querySelector('.popup-avatar')
      popupAvatar.classList.add('popup_opened')
    })
  }

  return (
    <>
        <Header />
        <Main onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm />
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
