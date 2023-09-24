import React from 'react'

function Main(props) {
  return (
    <main className="main">
      <section className="profile">
          <div className="profile__info">
            <div className="profile__overlay">
              <img src={props.userInfo.avatar} alt={props.userInfo.avatar} className="profile__avatar" onClick={props.onEditAvatar} />
            </div>
            <div className="profile__container">
                <div className="profile__text">
                  <h1 className="profile__title">{props.userInfo.name}</h1>
                  <button type="button" aria-label="Редактировать профиль" className="profile__button-edit" onClick={props.onEditProfile}></button>
                </div>
              <p className="profile__subtitle">{props.userInfo.about}</p>
            </div>
          </div>
          <button type="button" aria-label="Добавить изображение" className="profile__button" onClick={props.onAddPlace}></button>
        </section>
            
      <section className="group">
        {props.cardList.cards}
      </section>
    </main>
  )
}

export default Main