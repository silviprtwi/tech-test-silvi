import paymentData from "../data/payment.json";
import financeData from "../data/finance.json";
import serviceData from "../data/service.json";
import Finance from "./feature/finance";
import Payment from "./feature/payment";
import Service from "./feature/service";

const Feature = () => {
  return (
    <div className="gap-10 bg-animate flex flex-col pt-14 md:py-10 pb-0 bg-no-repeat bg-left-bottom bg-icon">
      <div className="text-label font-bold text-3xl flex justify-center px-8 text-center">
        Apa Saja Layanan Pegadaian Digital?
      </div>

      {/* START SERVICE */}
      <div className="max-w-screen-xl p-10 mx-auto bg-white rounded-xl shadow-sm">
        <div className="text-label font-bold text-3xl flex justify-center">
          Investasi Emas
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 xl:grid-cols-2 md:grid-cols-2">
          {serviceData.map((item) => (
            <Service
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* END SERVICE */}

      {/* START FINANCE */}
      <div className="max-w-screen-xl p-10 mx-auto bg-white rounded-xl shadow-sm">
        <div className="text-label font-bold text-3xl flex justify-center">
          Gadai & Pembiayaan
        </div>
        <div className="grid grid-cols-1 gap-0 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {financeData.map((item) => (
            <Finance
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* END FINANCE */}

      {/* START PAYMENT */}
      <div className="max-w-screen-xl p-10 mx-auto bg-white rounded-xl shadow-sm">
        <div className="text-label font-bold text-3xl flex justify-center">
          Pembayaran & Topup
        </div>
        <div className="flex justify-center flex-wrap">
          {paymentData.map((item) => (
            <Payment
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
      {/* END PAYMENT */}
    </div>
  );
};

export default Feature;
