import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/header-5";
import Hero5 from "../../components/hero/hero-5";
import Footer4 from "../../components/footer/footer-4";
import Tours2 from "../../components/tours/Tours2";
import CallToActions from "../../components/home/home-5/CallToActions";

const home_5 = () => {
  return (
    <>
      <Seo pageTitle="Home-5" />
      {/* End Page Title */}

      <Header5 />
      {/* End Header 5 */}

      <Hero5 />
      {/* End Hero 5 */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Most Popular Trips in  Sikkim 
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
            <Tours2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Tours Sections */}

      {/* End Tours Categories */}
  
      {/*<CallToActions />*/}
      {/* End CallToActions */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_5), { ssr: false });
