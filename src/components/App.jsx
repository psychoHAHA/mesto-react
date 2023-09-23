import { useEffect, useState } from 'react'
import '../pages/index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import AddPlacePopup from './AddPlacePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
    console.log('open')
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    console.log('close')
  }

  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups()
    }
  }

  return (
    <>
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={handleOverlayClick}
        />
        <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCloseOverlay={handleOverlayClick}
        />
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
