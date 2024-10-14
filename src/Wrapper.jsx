import React from 'react';
import './Wrapper';


const collections = [
    {
      id: '1',
      title: "SpringSummer 22'",
      description: "Embrace the Season with the most delicately crafted gowns where ethereal textures...",
      image: "https://www.teutamatoshi.com/cdn/shop/collections/WhatsAppImage2022-03-17at9.55.43AM.jpg?v=1681271408",
      link: "/collections/springsummer22",
    },
    {
      id: '2',
      title: "Bridal 21'",
      description: "Introducing our Bridal 2021 Collection, a stunning blend of romance and artistry....",
      image: "https://www.teutamatoshi.com/cdn/shop/collections/image_0531329a-751b-4835-a3f0-66b8d6fc15dc.png?v=1667828688",
      link: "/collections/bridal-21",
    },
    {
      id: '3',
      title: "FallWinter 22'",
      description: "Explore all the must-have looks you need this Holiday season! Sequins, velvet and tulle...",
      image: "https://www.teutamatoshi.com/cdn/shop/collections/image_4db82137-42a5-46e4-9d67-dc20d9de9d77.png?v=1667831462",
      link: "/collections/fallwinter22-1",
    },
  ];
  
  const SliderComponent = () => {
    return (
      <div className="slider-mobile-gutter">
        <ul className="homepage_collectiongrid collection-list">
          {collections.map(collection => (
            <li key={collection.id} className="collection-list__item">
              <a href={collection.link}>
                <div className="card-wrapper">
                  <div className="card card--standard card--media">
                    <div className="card__inner gradient">
                      <div className="card__media">
                        <img src={collection.image} alt={collection.title} loading="lazy" />
                      </div>
                      <div className="card__content">
                        <div className="card__information">
                          <h3 className="card__heading">
                            <a href={collection.link} className="full-unstyled-link">{collection.title}</a>
                          </h3>
                          <p className="card__caption">{collection.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper_content_collectionlist">
                    <h2>{collection.title}</h2>
                    <p>{collection.description}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="slider-buttons no-js-hidden">
          <button type="button" className="slider-button slider-button--prev" aria-label="Slide left" disabled>
            {/* Previous Button Icon */}
          </button>
          <div className="slider-counter caption">
            <span className="slider-counter--current">1</span>
            <span aria-hidden="true"> / </span>
            <span className="slider-counter--total">{collections.length}</span>
          </div>
          <button type="button" className="slider-button slider-button--next" aria-label="Slide right">
            {/* Next Button Icon */}
          </button>
        </div>
      </div>
    );
  };
  
  export default SliderComponent;
