import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Listings from './Listings.jsx';
import ListingEntryDetail from './ListingEntryDetail.jsx';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route path="/listings/:id" component={ListingEntryDetail} />
        </Switch>
      </main>
    )
  }
}
