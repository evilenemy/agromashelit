import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer-item">
              <h4>Agrotexnika-olami.Uz</h4>
              <p>Eng sifatli maxsulotlar faqat bizda!</p>
              <ul className="social-icons">
                <li>
                  <a
                    rel="nofollow"
                    href="https://fb.com/templatemo"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-item">
              <h4
                className="meda"
                style={{
                  position: "relative",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                Bizni ijtimoiy tarmoqlarda kuzating!
              </h4>
              <ul className="menu-list">
                <li>
                  <a href="#">Facebook Kanalimiz</a>
                </li>
                <li>
                  <a href="#">Instagram Kanalimiz</a>
                </li>
                <li>
                  <a href="#">Youtube kanalimiz</a>
                </li>
                <li>
                  <a href="https://t.me/agrotexnika_olami">
                    Telegram Kanalimiz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                &copy; Copyright {new Date().getFullYear()} Agromash elit MCHJ
                Co., Ltd. - Design:{" "}
                <a
                  rel="nofollow noopener"
                  href="https://telegram.me/black_evilenemy"
                  target="_blank"
                >
                  Evil Enemy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <footer className="w-full h-[300px] mt-10">
    //   <div className="flex w-full h-[95%]">
    //     <div className="w-[50px] h-full grid grid-rows-3">
    //       <img src="telegram.png" alt="Telegram" className="w-[40px]" />
    //       <img src="/intagram.png" alt="Instagram" className="w-[40px]" />
    //       <img src="/facebook.jpg" alt="Facebook" />
    //     </div>
    //     <div className="w-[calc(100%-50px)] h-full"></div>
    //   </div>
    // </footer>
  );
};

export default Footer;
