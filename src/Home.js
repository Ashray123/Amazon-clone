import React from 'react'
import "./Home.css";
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB403958842_.jpg"
             alt=""
             />
             <div className="home__row">
             <Product id="12345"
              title="ASUS ZenBook Duo UX481 Intel Core i5 10th Gen 14-inch FHD Thin & Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/2GB GeForce MX250 Graphics/ScreenPad Plus/Celestial Blue/1.50 Kg), UX481FL-B5811T"
              price={96900}
              rating={5}
              image="https://m.media-amazon.com/images/I/81K9Es2DDFL._AC_UY218_.jpg" 
              />
              <Product id="12346"
              title="Sony Bravia 189.3 cm (75 inches) 4K Ultra HD Smart Certified Android LED TV 75X8000H (Black)"
              price={218490}
              rating={5}
              image="https://m.media-amazon.com/images/I/81qyKO1xwKL._AC_UY218_.jpg" 
              />
              </div>


              <div className="home__row">
             <Product id="12347"
              title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
              price={59995}
              rating={5}
              image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UY218_.jpg" 
              />
              <Product id="12348"
              title="Elon Musk -14 June 2015"
              price={230}
              rating={5}
              image="https://images-eu.ssl-images-amazon.com/images/I/51I-QgidWHL._AC_SX184_.jpg" 
              />
              <Product id="12349"
              title=" Laptop Table"
              price={1200}
              rating={5}
              image="https://m.media-amazon.com/images/I/81VzlVr0PWL._AC_UL320_.jpg" />
              </div>

              <div className="home__row">
             <Product id="12350"
              title="LG 34-inch UltraWide Monitor, 75 Hz,  AMD Freesync, IPS Display with sRGB 99% for Gaming & Design, HDMI x 2-34WK500 (Black)"
              price={30990}
              rating={5}
              image="https://m.media-amazon.com/images/I/81f7lh1x6lL._AC_UY218_.jpg" 
              />
              </div>
              </div>
    )
}

export default Home;
