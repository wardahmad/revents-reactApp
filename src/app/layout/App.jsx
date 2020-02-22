import React, { Component, Fragment } from "react";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          
          <EventDashboard />

          {/* <Route exact path='/' Component={HomePage} />
          <Route path='/events' Component={EventDashboard} />
          <Route path='/events/:id' Component={EventDetailedPage} />
          <Route path='/people' Component={PeopleDashboard} />
          <Route path='/profile/:id' Component={UserDetailedPage} />
          <Route path='/settings' Component={SettingsDashboard} />
          <Route path='/createEvent' Component={EventForm} /> */}
        </Container>
      </Fragment>
    );
  }
}

export default App;
