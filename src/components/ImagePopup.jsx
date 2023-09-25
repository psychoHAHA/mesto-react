import React from "react";

function ImagePopup(props) {

  return (
    <aside className="popup popup-image">
          <div className="popup-image__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-image__button-close"></button>
              <img src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popup-image__photo" />
              <h2 className="popup-image__title">Новое место</h2>
          </div>
      </aside>
  )
}

export default ImagePopup