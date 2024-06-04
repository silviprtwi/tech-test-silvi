const Footer = () => {
  const menu = [
    { name: "Tentang Kami", to: "#" },
    { name: "Syarat dan Ketentuan", to: "#" },
    { name: "Acara", to: "#" },
    { name: "Hubungi Kami", to: "#" },
  ];

  const social = [
    { alt: "instgram", icon: "/icon/instagram.png" },
    { alt: "fb", icon: "/icon/fb.png" },
    { alt: "tw", icon: "/icon/tw.png" },
    { alt: "yt", icon: "/icon/yt.png" },
  ];

  return (
    <footer>
      <hr className="my-6 border-grey" />
      <div className="flex flex-row items-center text-center gap-5 justify-center md:justify-between px-8 md:px-20 flex-wrap">
        <div className="flex gap-5">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/sahabat-pegadaian.png"
              className="w-auto h-10"
              alt=""
            />
          </a>
          <a
            href="https://pegadaian.co.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/pegadaian.png" className="w-auto h-10" alt="" />
          </a>
        </div>

        <div className="flex justify-center gap-3">
          {menu.map((item, idx) => (
            <a
              key={idx}
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <hr className="my-6 border-grey" />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between mx-8 md:mx-20 mb-6 gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 justify-center md:justify-start">
            {social.map((item, idx) => (
              <img
                key={idx}
                src={item.icon}
                className="w-auto h-8"
                alt={item.alt}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © 2020 
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sahabat.pegadaian.co.id/"
              className="text-label cursor-pointer underline"
            >
              Sahabat Pegadaian 
            </a>{" "}
            All Right Reserved.
          </p>
        </div>

        <div className="flex gap-3 md:gap-5">
          <img src="/images/cs.png" className="w-auto h-10" alt="" />
          <span className="text-sm text-info">
            Terdaftar dan <br />
            Diawasi Oleh :
          </span>
          <img src="/images/ojk.png" className="w-auto h-10" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
