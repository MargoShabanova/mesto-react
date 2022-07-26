
export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}  >
      <div className="popup__container popup__content">
        <button className="popup__close" onClick={props.onClose}></button>
        <form className={`form form_type_${props.name}`} name={props.name} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="form__submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}