import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  
  const [namePlace, setNamePlace] = useState("")
  const [link, setLink] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
  }
  useEffect(() => {
    setNamePlace('')
    setLink('')
  }, [props.isOpen])

  return (
    <PopupWithForm 
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onCLose={props.onClose}
      onCloseOverlay={props.onCloseOverlay}
      onSubmit={handleSubmit}
    >
      <label className="popup__form">
        <input 
          type="text" 
          placeholder="Название" 
          className="popup__input popup-card__input popup-card__input_edit_image-name" 
          name="name" 
          required 
          minLength="2" 
          maxLength="30" 
          id="title-input"
          value={namePlace ?? ""}
        />
        <span className="popup__input-error title-input-error"></span>

        <input 
          type="url"
          placeholder="Ссылка на картинку" 
          className="popup__input popup-card__input popup-card__input_edit_image-url" 
          name="link" 
          required 
          id="url-input"
          value={link ?? ""}
        />
        <span className="popup__input-error url-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup