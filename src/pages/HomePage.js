import React from "react";
import { Link } from "react-router-dom";
import profile from "../components/images/profile.png";
import print from "../components/images/print.png";
import web from "../components/images/web.png";
import video from "../components/images/video.png";
import WorkList from "../components/cats/WorkList";
import FormPirabu from "../components/FormPirabu";
import { Helmet } from "react-helmet";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Graphic Design Specialist Web - Motion & UX-UI Designer | Pirabu
          CHANDRAN
        </title>
        <meta
          name="description"
          content="Design Specialist Graphic - Web - Motion & UX-UI Designer,  I help transform ideas into stunning visuals."
        />
        <meta
          name="og:title"
          content="Graphic UX UI Designer Paris &#8211; Pirabu Chandran | Pirabu CHANDRAN"
        />
        <meta name="og:type" content="project" />
        <meta name="og:site_name" content="Pirabu.com" />
        <meta
          name="og:description"
          content="Design Specialist Graphic - Web - Motion & UX-UI Designer,  I help transform ideas into stunning visuals."
        />
        <meta name="fb:page_id" content="" />
        <meta name="og:email" content="pirabu.chandran@gmail.com" />
        <meta name="og:phone_number" content="+33(0)7 60 77 49 34" />

        <meta
          property="twitter:card"
          content="Graphic UX UI Designer Paris &#8211; Pirabu Chandran | Pirabu CHANDRAN"
        />
        <meta
          property="twitter:title"
          content="Graphic UX UI Designer Paris &#8211; Pirabu Chandran | Pirabu CHANDRAN"
        />
        <meta
          property="twitter:description"
          content="Design Specialist Graphic - Web - Motion & UX-UI Designer,  I help transform ideas into stunning visuals."
        />
      </Helmet>
      <div className="page-container home">
        <div className="proContent">
          <div className="profileHolder">
            <img className="profile" src={profile} alt="profile" />
          </div>
          <h1 className="title">
            Hi, I'm Pirabu,
            <br />
            I help transform ideas into stunning visuals. <br />
            <br />
            <b>
              Design Specialist <br />
              (Graphic - Web - Motion)
              <br />& UX-UI Designer
            </b>
            .
          </h1>
          <div className="name">
            <h3>Pirabu</h3>
            <h4>Chandran</h4>
          </div>
        </div>
      </div>
      <div className="page-container whatIDo">
        <div className="proContent">
          <h2 className="title">What I do</h2>
          <div className="txt">
            <p>
              I offer web, motion, print, and social media design and marketing
              services.
            </p>
          </div>
          <div className="box">
            <img className="" src={web} alt="web" />
            <h3>Web Site</h3>
            <p>
              Transform your online presence with my comprehensive web design
              service. From unique visuals to user experience and search engine
              optimization, I offer end-to-end solutions for your website and
              even mobile app development. Ready to elevate your project?
              <br />
              <br />
              <Link className="linkA" to="/contact">
                Let's chat about your web project !
              </Link>
            </p>
          </div>
          <div className="box">
            <img className="" src={print} alt="print" />
            <h3>Print & Branding</h3>
            <p>
              Stand out in the market with a strong visual identity for your
              business. From logos to all print materials, I can help you tell
              your story and showcase your services to the world. With my
              expertise, let's create a unique brand that represents you.
              <br />
              <br />
              <Link className="linkA" to="/contact">
                Ready to make an impact?
              </Link>
            </p>
          </div>
          <div className="box">
            <img className="" src={video} alt="video" />
            <h3>Motion & Animation</h3>
            <p>
              In today's fast-paced world, videos are a powerful tool for
              getting your message across and standing out from the competition.
              As a professional motion designer, I have the skills and expertise
              to create engaging and attention-grabbing videos for your brand.
              <br />
              <br />
              <Link className="linkA" to="/contact">
                Ready to add motion to your brand?
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="proContent">
          <h2 className="title">My Work</h2>
          <div className="txt">
            <p>
              Check out some of my creations! Click here for all the juicy
              details.
            </p>
          </div>
          <WorkList />
        </div>
      </div>
      <div className="page-container">
        <div className="proContent">
          <h2 className="title">What they said</h2>

          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <p>
                  Pirabu is a very talented web-designer who listened to what I
                  needed and created a professional and efficient website and
                  interface for my estate agency business...
                </p>
                <h4>Tony</h4>
                <h6>Estate Agent</h6>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  It wasn’t an easy project that he helped us within. He just
                  sort the problem within a couple of week. I would highly
                  recommend him to people who are struggling with the
                  challenging projects to complete. “He gave us what we wanted”
                </p>
                <h4>Athavan</h4>
                <h6>CLU</h6>
              </SwiperSlide>

              <SwiperSlide>
                <p>
                  A great web developer and designer. Pirabu was very efficient
                  and professional. I highly recommend him. Thanks Pirabu for
                  your beautiful work. Good luck to you.{" "}
                </p>
                <h4>AWA Bolden</h4>
                <h6>Project Manager</h6>
              </SwiperSlide>

              <SwiperSlide>
                <p>
                  Pirabu est une personne qui respecte les délais et qui arrive
                  à connaître les besoins de ses clients très rapidement.{" "}
                </p>
                <h4>Natacha</h4>
                <h6>Conseiller en Insertion</h6>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
      <div className="page-container gabB5">
        <div className="proContent">
          <h2 className="title">Contact me</h2>

          <FormPirabu />
        </div>
      </div>
    </>
  );
}
