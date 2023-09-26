import React from "react";

function ImagePopup(props) {

  return (
    <aside className={`popup popup-${props.name}  ${props.isOpen ? "popup_opened" : ""}` } onClick={props.onCloseOverlay}>
        <div className="popup-image__content" onClick={event => event.stopPropagation()}>
            <button type="button" aria-label="Закрыть" className="popup__button-close popup-image__button-close" onClick={props.onClose}></button>
            <img src={props.card.link} alt={props.card.name} className="popup-image__photo" />
            <h2 className="popup-image__title">{props.card.name}</h2>
        </div>
    </aside>
  )
}

export default ImagePopup