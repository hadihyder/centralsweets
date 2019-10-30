import React from "react";
import "../components/FooterGallery.css";
import facebookLogo from "../catalog/facebook.png";
import instagramLogo from "../catalog/instagram.png";
import twitterLogo from "../catalog/twitter.png";
import youtubeLogo from "../catalog/youtube.png";

export default function AppFooter() {
  return (
    <footer>
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
                <a href="/Contact"> CONTACT US</a>
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
  );
}