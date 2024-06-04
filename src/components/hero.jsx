const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-animate-hero flex flex-col pt-24 pb-0 md:pb-24 bg-no-repeat bg-cover bg-icon"
    >
      <div className="flex flex-wrap  gap-20 px-8 md:px-48">
        <img className="w-[309px] h-[376px]" src="/images/hero.png" alt="" />
        <div className="grow shrink basis-0 py-[50px] flex-col justify-center items-start gap-5 inline-flex">
          <div className="text-label font-bold text-3xl flex justify-center text-center">
            Kemudahan transaksi Pegadaian
          </div>
          <div className="text-info font-medium text-xl flex justify-center text-start">
            Bisa dilakukan dimana saja melalui smartphone kamu dengan aplikasi
            Pegadaian Digital. Download sekarang juga!
          </div>
          <div className="justify-start items-center inline-flex">
            <img
              className="w-[154px] h-[52px]"
              src="/images/appstore.png"
              alt=""
            />
            <img
              className="w-[154px] h-[52px]"
              src="/images/playstore.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-12/12 md:w-11/12 h-auto py-8 px-8 md:px-24 flex flex-wrap md:flex-nowrap bg-green gap-10 rounded-none md:rounded-l-xl items-center relative md:absolute">
          <div className="text-white text-4xl font-bold text-start border-b-2 md:border-b-0 md:border-r-2 pb-10 md:pb-0 md:pr-10">
            Apa itu <br />
            Pegadaian Digital
          </div>
          <div className=" text-white text-lg font-normal ">
            Pegadaian ingin membantu mempermudah nasabah bertransaksi secara
            digital melalui aplikasi Pegadaian Digital. Layanan ini dapat
            diunduh lalu diakses secara online untuk berbagai transaksi
            Pegadaian.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
