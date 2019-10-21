import React from 'react';
//import ReactDom from 'react-dom';
import Gallery from 'react-grid-gallery';
import "./modules/components/FooterGallery.css"
import facebookLogo from "./modules/catalog/facebook.png";
import instagramLogo from "./modules/catalog/instagram.png";
import twitterLogo from "./modules/catalog/twitter.png";
import youtubeLogo from "./modules/catalog/youtube.png";

function LadduGallery(){
const IMAGES =
[{
        src: require('/home/hadi/central/src/modules/catalog/tilladdu.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/tilladdu.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "Gulab Jamun"
},
{
        src: require('/home/hadi/central/src/modules/catalog/rasgulla.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/rasgulla.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Bengali Sweet", title: "Bengali Sweet"}],
        caption: "Rasgulla"
},

{
        src: require('/home/hadi/central/src/modules/catalog/agrapetha.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/agrapetha.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

return(
    <>
    <footer style={{position:"absolute", bottom:0}}> 
    <div class="footer">
      <div class="footer-logo">
        <div class="footer-logo-img"></div>
      </div>
      <nav>
        <div class="footer-list">
          <ul>
            <li>
              <a href="/"> HOME</a>
            </li>
            <li>
              <a href="/"> ABOUT US</a>
            </li>
            <li>
              <a href="/"> CONTACT US</a>
            </li>
            <li>
              <a href="/"> TERMS & CONDITION</a>
            </li>
          </ul>
        </div>
      </nav>
      <section class="bottom">
        <div class="sm">
          <ul>
            <li class="facebook">
              <a href="https://facebook.com">
                <img src={facebookLogo} alt="fb" />
              </a>
            </li>
            <li class="instagram">
              <a href="https://instagram.com">
                <img src={instagramLogo} alt="insta" />
              </a>
            </li>
            <li class="youtube">
              <a href="https://youtube.com">
                <img src={youtubeLogo} alt="youtube" />
              </a>
            </li>
            <li class="twitter">
              <a href="https://twitter.com">
                <img src={twitterLogo} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>Copyright © 2019 Central Sweets</p>
        </div>
      </section>
    </div>
  </footer>
      
    <Gallery images={IMAGES}/>
    </>
    );


}
export default LadduGallery;