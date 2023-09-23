import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onCLose={props.onClose}
      onCloseOverlay={props.onCloseOverlay}
      onSubmit={handleSubmit}
    >
      <label className='popup__form'>
        <input 
          type="url" 
          placeholder="Ссылка на аватар профиля" className="popup__input popup-avatar__input popup-avatar__input_edit_image-url"
          name="avatar"
          required
          id="avatar-input"
        />
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup