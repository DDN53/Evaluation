import React from "react";
import {
  Header,
  ImageSlider,
  SiteIntro,
  SearchCollection,
  ContactUs,
  Footer,
} from "../components";

import { slide1, slide2, slide3, slide4 } from "../images";

export default function Home() {
  const slides = [slide1, slide2, slide3, slide4];

  return (
    <>
      <Header />
      <div className="imageSlider">
        <ImageSlider slides={slides} />
      </div>
      <SiteIntro />
      <SearchCollection />
      <ContactUs />
      <Footer />
    </>
  );
}
