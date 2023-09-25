import React from "react";

function Card(props) {
  // const {name, link, likes} = card

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <>
      <div className="group__element">
          <img src={props.link} alt={props.name} className="group__image" onClick={handleCardClick} />
          <button className="group__button-delete" type="button" aria-label="Удалить"></button>
          <div className="group__items">
              <h2 className="group__title">{props.name}</h2>
              <div className="group__like-container">
                  <button type="button" aria-label="Отметить как понравившееся" className="group__button"></button>
                  <p className="group__like-counter">{props.likes}</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Card