export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
      <li className="element element_checked">
        <img className="element__photo" src={props.link} alt={props.name} onClick={handleClick} />
        <button className="element__delete" type="button"></button>
        <div className="element__name-container">
          <h2 className="element__name">{props.name}</h2>
          <div className="element__like-container">
            <button className="element__button" type="button"></button>
            <span className="element__like-count">{props.likes}</span>
          </div>
        </div>
      </li>
  )
}