import React, { useState } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({
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
      title='Обновить профиль'
      buttonText='Сохранить'
      >
      <input type="url" placeholder="Ссылка на аватар профиля" className="popup__input popup-avatar__input popup-avatar__input_edit_image-url" name="avatar" required id="avatar-input" />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup