import React, { useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({
  isOpen,
  onClose,
  onCloseOverlay 
}) {

  const currentContext = React.useContext(CurrentUserContext)

  return (
    <PopupWithForm 
      isOpen={isOpen}
      onClose={onClose}
      onCloseOverlay={onCloseOverlay}
      title='Новое место'
      buttonText='Создать'
      >
      <input type="text" placeholder="Название" autoComplete="off" className="popup__input popup-card__input popup-card__input_edit_image-name" name="name" required minLength="2" maxLength="30" id="title-input" />
      <span className="popup__input-error title-input-error"></span>
      <input type="url" placeholder="Ссылка на картинку" className="popup__input popup-card__input popup-card__input_edit_image-url" name="link" required id="url-input" />
      <span className="popup__input-error url-input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup