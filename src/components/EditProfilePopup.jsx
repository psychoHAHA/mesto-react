import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props) {

  const [name, setName] = useState("")
  const [about, setAbout] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
  }
  useEffect(() => {})

  return (
    <PopupWithForm 
      name="card"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onCLose={props.onClose}
      onCloseOverlay={props.onCloseOverlay}
      onSubmit={handleSubmit}
    >
      <label className="popup__form">
        <input 
          type="text" 
          placeholder="Имя" 
          className="popup__input 
          popup__input_edit_profile-name" 
          name="name" 
          required 
          minLength="2" 
          maxLength="40" 
          id="name-input"
          value={name ?? ""}
        />
        <span className="popup__input-error name-input-error"></span>

        <input 
          type="text"
          placeholder="О себе" 
          className="popup__input popup__input_edit_profile-info" 
          name="about" 
          required 
          minLength="2" 
          maxLength="200" 
          id="info-input"
          value={about ?? ""}
        />
        <span className="popup__input-error info-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup