import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/OfferPage.css';
import Offer from '../components/Offer';
import offer1 from '../images/offer1.jpg';
import offer2 from '../images/offer2.jpg';
import offer3 from '../images/offer3.JPG';
import offer4 from '../images/offer4.JPG';
import offer5 from '../images/offer5.JPG';
import offer6 from '../images/offer6.JPG';

const offersList = [
  {
    id: '1',
    title: 'Śluby i sesje ślubne',
    price: '800 - 1200 zł',
    img: offer1
  },
  {
    id: '2',
    title: 'Imprezy urodzinowe',
    price: '300 - 400 zł',
    img: offer2
  },
  {
    id: '3',
    title: 'Imprezy firmowe',
    price: '400 - 650 zł',
    img: offer3
  },
  {
    id: '4',
    title: 'Imprezy w plenerze',
    price: '350 - 450 zł',
    img: offer4
  },
  {
    id: '5',
    title: 'Koncerty',
    price: '200 - 400 zł',
    img: offer5
  },
  {
    id: '6',
    title: 'Sesje indywidualne',
    price: '150 zł',
    img: offer6
  }
]

class OfferPage extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $("html").animate({ scrollTop: 285 }, 1000, 'swing');
    });

    $('.offer').each(function (i) {
      $(this).delay(500 * i).fadeTo(1000, 1);
    });
  }

  render() {

    const offers = offersList.map(offer => (
      <Offer key={offer.id} {...offer} />
    ))

    return (
      <>
        {offers}
      </>
    );
  }
}

export default OfferPage;