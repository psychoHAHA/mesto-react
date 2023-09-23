function PopupWithForm(props) {
  return (
    <>
      <aside className="popup popup-profile">
          <div className="popup__content popup-profile__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-profile__button-close" onClick={() => setIsOpen(false)}></button>
              <h2 className="popup__title popup-profile__title">Редактировать профиль</h2>
              <form name="profile-form" className="popup__form popup-profile__form" noValidate>
                  <input type="text" placeholder="Имя" className="popup__input popup__input_edit_profile-name" name="name" required minLength="2" maxLength="40" id="name-input" />
                  <span className="popup__input-error name-input-error"></span>
                  <input type="text" placeholder="О себе" className="popup__input popup__input_edit_profile-info" name="about" required minLength="2" maxLength="200" id="info-input" />
                  <span className="popup__input-error info-input-error"></span>
                  <button aria-label="Сохранить изменения" type="submit" className="popup__button popup-profile__button button" disabled>Сохранить</button>
              </form>
          </div>
      </aside>

      <aside className="popup popup-card">
          <div className="popup__content popup-card__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-card__button-close"></button>
              <h2 className="popup__title popup-card__title">Новое место</h2>
              <form name="card-form" className="popup__form popup-card__form" noValidate>
                  <input type="text" placeholder="Название" autoComplete="off" className="popup__input popup-card__input popup-card__input_edit_image-name" name="name" required minLength="2" maxLength="30" id="title-input" />
                  <span className="popup__input-error title-input-error"></span>
                  <input type="url" placeholder="Ссылка на картинку" className="popup__input popup-card__input popup-card__input_edit_image-url" name="link" required id="url-input" />
                  <span className="popup__input-error url-input-error"></span>
                  <button aria-label="Создать" type="submit" className="popup__button popup-card__button button" disabled>Создать</button>
              </form>
          </div>
      </aside>
      
      <aside className="popup popup-image">
          <div className="popup-image__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-image__button-close"></button>
              <img src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className="popup-image__photo" />
              <h2 className="popup-image__title">Новое место</h2>
          </div>
      </aside>

      <aside className="popup popup-confirm">
          <div className="popup__content popup-confirm__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-confirm__button-close"></button>
              <h2 className="popup__title popup-confirm__title">Вы уверены?</h2>
              <button aria-label="Подтверждение действия" type="submit" className="popup__button popup-confirm__button button">Да</button>
          </div>
      </aside>

      <aside className="popup popup-avatar">
          <div className="popup__content popup-avatar__content">
              <button type="button" aria-label="Закрыть" className="popup__button-close popup-avatar__button-close" ></button>
              <h2 className="popup__title popup-avatar__title">Обновить аватар</h2>
              <form name="avatar-form" className="popup__form popup-avatar__form" noValidate>
                  <input type="url" placeholder="Ссылка на аватар профиля" className="popup__input popup-avatar__input popup-avatar__input_edit_image-url" name="avatar" required id="avatar-input" />
                  <span className="popup__input-error avatar-input-error"></span>
                  <button aria-label="Сохранить" type="submit" className="popup__button popup-avatar__button button" disabled>Сохранить</button>
              </form>
          </div>
      </aside>
    </>
  )
}

export default PopupWithForm