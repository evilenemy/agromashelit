import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider text-white">
          <div className="item item-1">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="https://telegram.me/agrotexnika_olami"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  aloqa uchun
                </a>
              </div>
            </div>
          </div>
          <div className="item item-2">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="https://telegram.me/agrotexnika_olami"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
          <div className="item item-3">
            <div className="img-fill">
              <div className="text-content">
                <h6 style={{ color: "black" }}>
                  Qishloq xo'jalik texnikalari <br />
                  olamidiga xalol savdo
                </h6>
                <h4>Agromash Elit</h4>
                <p style={{ color: "black" }}>Biz bilan eng oldinda bo'ling!</p>
                <a
                  href="contact.html"
                  className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="request-form" style={{ background: "#4ADE80" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>Bizga taklifingiz bormi?</h4>
              <span>
                Taklif yoki Havkorlik bo'yicha bog'lanish uchun tugmani bosing!
              </span>
            </div>
            <div className="col-md-4">
              <a
                href="https://telegram.me/agrotexnika_olami"
                className="border-button"
              >
                Aloqa uchun
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="/assets/images/logo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 align-self-center">
                    <div className="right-content text-white">
                      <span>Biz kimmiz?{")"}</span>
                      <h2 className="text-black">
                        Biz haqimizda bilib olish{" "}
                        <em style={{ color: "#4ADE80" }}>Vaqti keldi!</em>
                      </h2>
                      <p>
                        Biz qishloq xo'jaligi sohasida ishlaydigan fermerlarga
                        Agrotexnika yetkazib beradigan eng ishonchli firmalardan
                        birimiz, bizning maqsadimiz mijozlarimizga eng qulay va
                        zamonaviy texnikalarni taqdim etish!
                      </p>
                      <a
                        href="#"
                        className="bg-green-400 py-2 px-4 inline-block mt-2 rounded ml-2 hover:bg-white hover:text-green-400 transition duration-300"
                      >
                        Ko'proq bilib olish
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Bizning <em style={{ color: "#4ADE80" }}>Xizmatlar</em>
                </h2>
                <span>Biz o'z xizmatlirimizni halolligini kafolatlaymiz!</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/qulay to'lov.jpg" alt="" />
                <div className="down-content">
                  <h4 className="text-black">Oliy sifat</h4>
                  <p>
                    Biz sizga eng sifatli narxda chet el texnikasini kirgazib
                    beramiz!
                  </p>
                  <a
                    href="https://telegram.me/agrotexnika_olami"
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/texnikxizmat.jpg" className="h-[250px] object-cover" alt="" />
                <div className="down-content">
                  <h4 className="text-black">Qulay to'lov</h4>
                  <p>
                    {" "}
                    Har qanday texnikani lizing va malum muddatga bo'lib
                    berishga siz xohlaganday qulaylik yaratishga tayyormiz.
                  </p>
                  <a
                    href="https://telegram.me/agrotexnika_olami"
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <img src="/sifat.jpeg" alt="" />
                <div className="down-content">
                  <h4 className="text-black">Texnik xizmat</h4>
                  <p>
                    Barcha turdagi qishloq xo'jaligi texnikalari har qanday
                    sharoitga qaramay servis va ta'mirlash ishlarini olib
                    boramiz.
                  </p>
                  <a
                    href="https://telegram.me/agrotexnika_olami"
                    className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                  >
                    Buyurtma berish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <span>10 yildan beri xalq ishonchida!</span>
                <h2>
                  Biz bilan eng{" "}
                  <em style={{ color: "#4ADE80" }}>
                    <br />
                    birinchilar qatorida bo'ling!
                  </em>
                </h2>
                <p>
                  Agrotexnika Olami MCHJ Oʻzbekiston hududida Qishloq xojalik
                  texnikalarini halol savdosi bilan shugʻulanish maqsadida
                  yaratilgan firma boʻlib bizda dunyoning yetakchi davlatlarinig
                  eng ilgoʻr texnikalari bor 100 dan ortiq traktorlar turli
                  davrlardan keltirilgan 1000 dan ortiq agregatlar
                  <br />
                  <br />
                  Yurtimizning fermerlari va qishloq xoʻjaligi
                  azolarininishlarini yengil qilish maqsadida xizmat larini
                  yengilashtirish uchun yaratilgan Biz bilan enag katta lizing
                  firmalari hamkorlik da ishlashadi.
                  <br />
                  Manzilimiz Toshkent shaxar Chilonzor 18 A{" "}
                </p>
                <a
                  href=""
                  className="bg-green-400 py-2 px-4 inline-block rounded hover:bg-white hover:text-green-400 transition duration-300 "
                >
                  Buyurtma berish
                </a>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      1800
                    </div>
                    <div className="count-title">Soat faol ish</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      524
                    </div>
                    <div className="count-title">
                      Muvaffaqiyatli shartnomalar
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      823
                    </div>
                    <div className="count-title">Sotilgan Agrotexnika</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit" style={{ color: "#4ADE80" }}>
                      10
                    </div>
                    <div className="count-title">Yil mehnat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2>
            <em style={{ color: "#4ADE80" }}>T</em>raktorlar
          </h2>
        </div>
        <div className="flex justify-around">
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2>
            <em style={{ color: "#4ADE80" }}>A</em>grotexnikalar
          </h2>
        </div>
        <div className="flex justify-around">
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className="w-[95%] mx-auto mt-24">
        <div className="section-heading">
          <h2 className="">
            Mavsumiy <em style={{ color: "#4ADE80" }}>texnikalar</em>
          </h2>
        </div>
        <div className="flex justify-around flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className="testimonials">
        <div className="partners" style={{ marginTop: 0 }}>
          <h1 style={{ position: "relative", left: "630px", top: "-100px" }}>
            Bizning Hamkorlar!
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="owl-partners owl-carousel">
                  <div className="partner-item">
                    <img src="/assets/images/client-01.png" title="1" alt="1" />
                  </div>

                  <div className="partner-item">
                    <img src="/assets/images/client-03.png" title="3" alt="3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
