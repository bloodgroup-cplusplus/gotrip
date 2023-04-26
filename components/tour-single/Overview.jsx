const Overview = () => {
  return (
    <>
      <div className="row x-gap-40 y-gap-40">
        <div className="col-12">
          <h3 className="text-22 fw-500">Overview</h3>

          <p className="text-dark-1 text-15 mt-20">
          Gangtok is a city, municipality, the capital and the most populous city of the Indian state of Sikkim. It is also the headquarters of the Gangtok District. Gangtok is in the eastern Himalayan range, at an elevation of 1,650 m (5,410 ft). The citys population of 100,000 are from different ethnicities of Sikkimese people such as Sikkimese Nepalis, Bhutia and Lepchas. Within the higher peaks of the Himalayas and with a year-round mild temperate climate, Gangtok is at the centre of Sikkims tourism industry. 
          </p>

        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Available languages</h5>
          <div className="text-15 mt-10">
            English, Hindi, Nepali
          </div>
        </div>

        <div className="col-md-6">
          <h5 className="text-16 fw-500">Cancellation policy</h5>
          <div className="text-15 mt-10">
            For a full refund, cancel at least 24 hours in advance of the start
            date of the experience.
          </div>
        </div>

        <div className="col-12">
          <h5 className="text-16 fw-500">Highlights</h5>
          <ul className="list-disc text-15 mt-10">
            <li>

             UNESCO World Heritage Site
The Khangchendzonga National Park stands in a premier place amongst the high altitude National Parks in India. In 2016, the park was inscribed on UNESCO World Heritage List as India’s first ‘Mixed World Heritage Site’. You need a special pass to enter this national park.

            </li>
            <li>World’s 3rd highest mountain
Kanchenjunga, which is the mountain bordering Sikkim is the world’s 3rd highest mountain. It is called Dzonka in the local language. To worship Mt. Kanchenjunga, the Pang Lhabsol Festival is held on the 15th day of the 7th month of the Tibetan calendar</li>
            <li>The most respected research institute in the world
Established in 1958, the Namgyal Research Institute of Tibetology is one of the most respected research institutes around the globe. It houses a huge collection of unusual Sanskrit, Lepcha and Tibetan manuscripts alongside statues and Thankas that are scarcely found. Thanks are colourfully beautiful tapestries put to use in rituals performed by Buddhists. This institute is very popularly all around the world for being a centre of studying Buddhist philosophy and religion.</li>
          </ul>
        </div>
      </div>

      <div className="mt-40 border-top-light">
        <div className="row x-gap-40 y-gap-40 pt-40">
          <div className="col-12">
            <h3 className="text-22 fw-500">What&lsquo;s Included</h3>

            <div className="row x-gap-40 y-gap-40 pt-20">
              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Entry ticket to
                  Harry Potter Warner Bros Studio Tour London
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-check text-10 mr-10"></i> Return transfers
                  in air-conditioned coach
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i> Food
                  and drinks
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Gratuities
                </div>
                <div className="text-dark-1 text-15">
                  <i className="icon-close text-green-2 text-10 mr-10"></i>{" "}
                  Digital guide available in 10 different languages at
                  additional cost
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
