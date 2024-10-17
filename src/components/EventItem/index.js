import './index.css'

const EventItem = props => {
  const {eventDetails, updateActiveStatus} = props
  const {name, location, imageUrl, registrationStatus} = eventDetails

  const onClickEventItem = () => {
    updateActiveStatus(registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onClickEventItem}>
        <img className="event-img" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
