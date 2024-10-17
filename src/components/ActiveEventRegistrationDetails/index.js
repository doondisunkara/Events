import './index.css'

const registrationStatusConstants = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderRegisteredView = () => (
    <div className="registered-view-container">
      <img
        className="registered-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the Event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-view-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-heading">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registrations-closed-view-container">
      <img
        className="registrations-closed-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderNoActiveEventView = () => (
    <div className="no-event-container">
      <p className="no-event-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (activeRegistrationStatus) {
    case registrationStatusConstants.registered:
      return renderRegisteredView()
    case registrationStatusConstants.yetToRegister:
      return renderYetToRegisterView()
    case registrationStatusConstants.registrationsClosed:
      return renderRegistrationsClosedView()
    default:
      return renderNoActiveEventView()
  }
}

export default ActiveEventRegistrationDetails
