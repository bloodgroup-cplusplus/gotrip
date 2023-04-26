import Image from "next/image";

const ItineraryContent = () => {
  const itineraryContent = [
    {
      id: 1,
      targetCollapse: "item_1",
      itemNo: " Day 1",
      title: "NJP Rly Station /IXB Airport-Gangtok (120Kilometers/4hours)",
      img: "/img/tours/tour.png",
      content:"As you will arrive at NJP station or Bagdogra Airport our representative will be waiting for you to transfer you to Gangtok (5,500ft). On your journey to Gangtok(5,500 feet), you will be passing through rolling tea plantations up and down the hill. Overnight dinner and stay at Gangtok hotel.",
      classShowHide: "",
    },
    {
      id: 2,
      targetCollapse: "item_2",
      itemNo: "Day 2",
      title: "Gangtok Sightseeing",
      img: "/img/tours/1.png",
      //content:"This rope way of about less than 1 km long has three entry points or stops. The lowest point is at Deorali market and the highest point is at Tashiling (below the state secretariat). There is a midpoint stop at Nam-Nang. One can enter from any point and return to same point after touching other two points. Cable car journey provides spectacular view of Gangtok market, valley and State Assembly hall of the state of Sikkim on its 15 to 20 minutes journey. The ticket fee for adult is Rs 50 and Rs 30 for kids below 6 years. One can carry a video camera by paying a fee of Rs 50. No extra charge for normal still camera." ,
      content:"Dig into early morning breakfast and go for a sightseeing tour. As per you itinerary, today you will be visiting Tashi View point, Ganesh Tok, Hanuman Tok , Cottage Industry and Handicraft centre, Deorali Ropeway, Institute of Tibetology, Dro-dul Chorten, Enchey Monastry and Banjakhri Falls (maximum 6 hours). Dinner and overnight stay at Gangtok hotel",
      classShowHide: "show",
    },
    {
      id: 3,
      targetCollapse: "item_3",
      itemNo: "Day 3",
      title: "Excursion to Tsomgo Lake and Baba Mandir",
      img: "/img/tours/tsongmo.png",
      //content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      content:"Kickstart your day with a hearty meal as today is going to be a fun day. According to your pre-decided schedule, you will be visiting Tsomgo Lake (12,400 Feet), a high-altitude lake that is sacred to both Hindus and Buddhists. After spending Minutes at the lake, you will visit the Baba Mandir(13,200 Feet). Dinner and Overnight stay at Gangtok. P.S: In the case of the landslide, you won't be able to reach Tsomgo Lake(12,400 Feet), thus, an alternative will be arranged for you",
      classShowHide: "",
    },
    {
      id: 4,
      targetCollapse: "item_4",
      itemNo: "Day 4",
      title: "Gangtok-NJP Rly Station/ IXB Airport (120 Kilometers/4 hours)",
      img: "/img/tours/bagdogra.png",
      //content: `Our first stop is Windsor Castle, the ancestral home of the British Royal family for more than 900 years and the largest, continuously occupied castle in Europe.`,
      content:"Post breakfast, Check out and embar on a drive from hotel to reach NJP railway station (Siliguri) or Bagdogra Airport (Siliguri). Your arrival at railway station or airport will mark the end of the tour",
      classShowHide: "",
    },
  ];

  return (
    <>
      {itineraryContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item ">
            <div className="d-flex">
              <div className="accordion__icon size-40 flex-center bg-blue-2 text-blue-1 rounded-full">
                <div className="text-14 fw-500">{item.itemNo}</div>
              </div>
              {/* End item number */}

              <div className="ml-20">
                <div className="text-16 lh-15 fw-500">{item.title}</div>
                <div className="text-14 lh-15 text-light-1 mt-5">
                  Stop: 60 minutes - Admission included
                </div>
                <div
                  className={`accordion-collapse collapse ${item.classShowHide}`}
                  id={item.targetCollapse}
                  data-bs-parent="#itineraryContent"
                >
                  <div className="pt-15 pb-15">
                    <Image
                      width={350}
                      height={160}
                      src={item.img}
                      alt="image"
                      className="rounded-4 mt-15"
                    />
                    <div className="text-14 lh-17 mt-15">{item.content}</div>
                  </div>
                </div>
                {/* End accordion conent */}

                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.targetCollapse}`}
                >
                  <button className="d-block lh-15 text-14 text-blue-1 underline fw-500 mt-5">
                    See details &amp; photo
                  </button>
                </div>
                {/* End accordion button */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItineraryContent;
