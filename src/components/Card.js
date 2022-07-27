export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
      <li className="element element_checked">
        <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
        <button className="element__delete" type="button"></button>
        <div className="element__name-container">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__like-container">
            <button className="element__button" type="button"></button>
            <span className="element__like-count">{card.likes.length}</span>
          </div>
        </div>
      </li>
  )
}