import React from 'react'
import Card from './Card'

function Main(props) {
  return (
    <>
      <main className="main">
        <section className="profile">
            <div className="profile__info">
              <div className="profile__overlay">
                <img src={props.userAvatar} alt={props.userName} className="profile__avatar" onClick={props.onEditAvatar} />
              </div>
              <div className="profile__container">
                  <div className="profile__text">
                    <h1 className="profile__title">{props.userName}</h1>
                    <button type="button" aria-label="Редактировать профиль" className="profile__button-edit" onClick={props.onEditProfile}></button>
                  </div>
                <p className="profile__subtitle">{props.userAbout}</p>
              </div>
            </div>
            <button type="button" aria-label="Добавить изображение" className="profile__button" onClick={props.onAddPlace}></button>
          </section>
              
        <li className="group">
          {props.cards.map((card) => (
            <Card
              card={card} 
              key={card._id}
              name={card.userName}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
            />
          ))}
        </li>
      </main>
    </>
  )
}

export default Main