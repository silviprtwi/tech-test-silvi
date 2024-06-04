import superiorData from "./data/superior.json";
import faqData from "./data/faq.json";
import Faq from "./components/faq";
import Hero from "./components/hero";
import Superior from "./components/superior";
import Feature from "./components/feature";

const LandingPage = () => {
  return (
    <div>
      <Hero />

      {/* START SUPERIOR */}
      <div
        id="superior"
        className="max-w-screen-xl px-8 lg:px-0 pt-16 md:pt-32 pb-10 mx-auto bg-white rounded-xl shadow-sm"
      >
        <div className="text-label font-bold text-3xl flex justify-center text-center">
          Mengapa Pegadaian Digital?
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 xl:grid-cols-3 md:grid-cols-3">
          {superiorData.map((item) => (
            <Superior
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* END SUPERIOR */}

      {/* START FEATURE */}
      <div id="feature">
        <Feature />
      </div>
      {/* END FEATURE */}

      {/* START FAQ */}
      <div
        id="faq"
        className="max-w-screen-xl px-8 lg:px-0 py-20 md:pt-24 mx-auto bg-white rounded-xl"
      >
        <div className="text-label font-bold text-3xl flex justify-center text-center">
          Pertanyaan Yang Sering Diajukan
        </div>
        <div className="shadow-md rounded-3xl p-8">
          {faqData.map((item) => (
            <Faq
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      {/* END FAQ */}
    </div>
  );
};

export default LandingPage;
