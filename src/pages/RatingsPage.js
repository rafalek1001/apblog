import React, { Component } from 'react';
import $ from 'jquery';
import Rating from '../components/Rating';

const ratings = [
  {
    id: 1,
    title: "To grzeczna dziewczyna!",
    author: "Pani Bożenka",
    stars: 5,
    text: "Anitka to moja ulubiona mieszkanka akademika. Często przychodzi na plotki i ploteczki hehe. Jakiś czas temu robiła zdjęcia na ślubie mojej córki. Byliśmy z mężem zachwyceni! Pani Anita zrobiła prześliczne zdjęcia, które uwiecznią tę chwilę na zawsze. Kultura i miła obsługa w ceni. Mówię wam, to grzeczna dziewczyna!"
  },
  {
    id: "2",
    title: "Talent większy niż myślicie",
    author: "Padre",
    stars: 5,
    text: "Witam, Dariusz jestem. Moje dziecie to urodzony fotograf. Na komunie kupiłem jej pierwszy aparat na kliszę i potem ona była już fanką. Raz mi dała jej zrobić zdjęcie z kogutem, ale tak to tylko ona mogła pstrykać. Wydaje wam się, że w lubelskim jest lepszy fotograf od mojej córki? No to nie ma."
  },
  {
    id: "3",
    title: "Rozmazane zdjęcia, ale może być",
    author: "Anonim",
    stars: 3,
    text: "Anita robiła zdjęcia na naszym przyjęciu. Wyszły trochę rozmazane, ale i tak jestem co do nich przekonany. Ocena końcowa: może być."
  },
  {
    id: "4",
    title: "Wspaniałe ujęcia",
    author: "Ludzie",
    stars: 4,
    text: "Oglądaliśmy zdjęcia Anity i jesteśmy zdumieni artyzmem jaki wkłada ta artystka w swoje kadrowe zdobycze. Ekspresja jaka wyłania się ze zdjęć Pani Anity jest nie do opisania. Dech w piersiak to niejedyny element, który was napotka podczas przeglądania prac tej artystki. Fajne. Fajne!"
  }
]

class RatingsPage extends Component {

  componentDidMount() {
    $(document).ready(function () {
      $("html").animate({ scrollTop: 280 }, 1000, 'swing');
    });

    $(".rating").each(function (i) {
      $(this).delay(500 * i).fadeTo(1500, 1);
    });
  }

  render() {

    const ratingsList = ratings.map(rating => (
      <Rating key={rating.id} {...rating} />
    ))

    return (
      <div className="home">
        {ratingsList}
      </div>
    );
  }
}

export default RatingsPage;