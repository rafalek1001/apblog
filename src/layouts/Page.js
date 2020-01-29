import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OfferPage from '../pages/OfferPage';
import PhotosPage from '../pages/PhotosPage';
import RatingsPage from '../pages/RatingsPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/offer" component={OfferPage} />
        <Route path="/photos" component={PhotosPage} />
        <Route path="/ratings" component={RatingsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default Page;