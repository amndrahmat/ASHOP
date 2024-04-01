import React from "react";
import "../../App.css";
//import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Content from "../Content";
import Footer from "../Footer";
import "../Cards.css";
import CardItem from "../CardItem";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="cards">
        <h1>Latest Post</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/a1.png"
                text="Mom Jeans in Light Blue MJ2004"
                label="$15.5"
                path="/"
              />

              <CardItem
                src="images/a3.png"
                text="Sport Bra"
                label="$20.0"
                path="/"
              />
              <CardItem
                src="images/a4.png"
                text="Ladies Long Sleeve Top"
                label="$22.9"
                path="/"
              />
              <CardItem
                src="images/a2.png"
                text="Aruna Training Pants"
                label="$14.0"
                path="/"
              />
              <CardItem
                src="images/a5.png"
                text="Ladies Bathrobe"
                label="$32.9"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="cards">
        <h1>New Arrivals</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/a6.png"
                text="Aura Gaun Dress Party Modern Grey"
                label="$35.5"
                path="/"
              />

              <CardItem
                src="images/a7.png"
                text="Ladies Sandals 02673Za"
                label="$29.0"
                path="/"
              />
              <CardItem
                src="images/a8.png"
                text="EN-JI by Palomino
                Dahee"
                label="$102.9"
                path="/"
              />
              <CardItem
                src="images/a9.png"
                text="Crochet Lace Playsuit"
                label="$45.0"
                path="/"
              />
              <CardItem
                src="images/a10.png"
                text="ALDO
                Kedaovia"
                label="$320.9"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>
      <Content />
      <div className="cards">
        <h1>Featured Products</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/a11.png"
                text="Hush Puppies
                Justine"
                label="$150.9"
                path="/"
              />

              <CardItem
                src="images/a12.png"
                text="Puma ESS Longsleeve Tee"
                label="$20.0"
                path="/"
              />
              <CardItem
                src="images/a13.png"
                text="Clame Bi Fold Medium Wallet"
                label="$12.9"
                path="/"
              />
              <CardItem
                src="images/a14.png"
                text="Cessily Convertible Crossbody Flap Bag"
                label="$240.0"
                path="/"
              />
              <CardItem
                src="images/a15.png"
                text="Mixed Print Tunic Blouse"
                label="$320.9"
                path="/"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="images/a16.png"
                text="Satin Crepe Lapel Blouse"
                label="$160.9"
                path="/"
              />

              <CardItem
                src="images/a17.png"
                text="Mix Print Palazzo Pant"
                label="$205.9"
                path="/"
              />
              <CardItem
                src="images/a18.png"
                text="Calvin Klein Jeans
                010 HR SKINNY A"
                label="$102.9"
                path="/"
              />
              <CardItem
                src="images/a19.png"
                text="Floral Turtleneck Top"
                label="$150.0"
                path="/"
              />
              <CardItem
                src="images/a20.png"
                text="Flounced Ruffle Mini Dress"
                label="$221.9"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
