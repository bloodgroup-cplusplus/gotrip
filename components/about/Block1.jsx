import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About GoTrip</h2>
        <p className="mt-5">These popular destinations have a lot to offer</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
        Extremely alluring, pleasantly boisterous and wreathed in clouds - Gangtok, the capital city of the Sikkim can also give you a spectacular view of Mt. Kanchenjunga, at a distant skyline. The pristine hill station nestled in mountains and clouds is also a base for a whole lot of trekkers to the Himalayan mountain ranges. The mesmerising prismatic beauty and the beautiful winding hill roads are even more breathtaking if seen from a bird’s eye view in a cable car.


          
          <br />
          <br />
          he name meaning hill-top, Gangtok can be safely said to be one of the most beautiful hill stations in the country. With everything in just the right amount from a blend of cultural identities to urbanisation, Gangtok is a breathing and dynamic bit of paradise of the northeast. It has an amazing view of mount Kanchenjunga, the third highest mountain peak in the world. Also like everything around it, Gangtok is abundant in natural beauty and has various natural attractions such as the Tsomgo Lake, Ban Jhakri falls, Tashi viewpoint and more. Other places to visit include the Enchey Monastery, Ganesh Tok, Do Drul Chorten Rumtek Monastery, etc. Also, river Teesta is one of the best spots for white water rafting in North East India.
          
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
