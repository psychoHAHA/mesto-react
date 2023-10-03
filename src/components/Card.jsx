import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, handleCardClick}) {

  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some(i => i._id === currentUser._id)
  const cardLikeButtonClassName = ( 
    `group__button ${isLiked && 'card__like-button_active'}` 
  )

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="group__element">
          <img src={card.link} alt={card.name} className="group__image" onClick={handleCardClick} />
          {isOwn && <button className="group__button-delete" type="button" aria-label="Удалить"></button>}
          <div className="group__items">
              <h2 className="group__title">{card.name}</h2>
              <div className="group__like-container">
                  <button type="button" aria-label="Отметить как понравившееся" className={cardLikeButtonClassName}></button>
                  <p className="group__like-counter">{card.likes.length}</p>
              </div>
          </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default Card