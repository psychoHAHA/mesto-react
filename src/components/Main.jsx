export default function Main(props) {
  return (
    <main className="main">
      <section className="profile">
          <div className="profile__info">
            <div className="profile__overlay">
              <img src= {require('../images/profile.png')} alt="Жак-Ив Кусто́ — французский исследователь Мирового океана, фотограф, режиссёр, изобретатель, автор множества книг и фильмов. Являлся членом Французской академии. Командор ордена Почётного легиона. Известен как Капитан Кусто." className="profile__avatar" onClick={props.onEditAvatar} />
            </div>
            <div className="profile__container">
                <div className="profile__text">
                  <h1 className="profile__title">Жак-Ив Кусто</h1>
                  <button type="button" aria-label="Редактировать профиль" className="profile__button-edit"  onClick={props.onEditProfile}></button>
                </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
          </div>
          <button type="button" aria-label="Добавить изображение" className="profile__button" onClick={props.onAddPlace}></button>
        </section>
            
      <section className="group"></section>
    </main>
  )
}