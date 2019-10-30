import React, {useState} from 'react';
import "./modules/components/FooterGallery.css"
import facebookLogo from "./modules/catalog/facebook.png";
import instagramLogo from "./modules/catalog/instagram.png";
import twitterLogo from "./modules/catalog/twitter.png";
import youtubeLogo from "./modules/catalog/youtube.png";
import './modules/views/contactus.css';

function Contact(){
let [name, setName] = useState("");
let [email, setEmail] = useState("");
let [subject, setSubject] = useState("");
let [message, setMessage] = useState("");
return(
  <>
  <div class="wrapper">
  <form>
    <div class="contact-logo">
      <h2>Contact us</h2>
    </div>

    <div class="info">
      <div class="name" style={{border: 1}}>
        <h2>Your Name (required)</h2>
        <input type="text" 
        onChange={
          function(event){
            setName(event.target.value);
            
          }
        }
        />
      </div>

      <div class="email">
        <h2>Your Email (required)</h2>
        <input type="text" 
        onChange={
          function(event){
            setEmail(event.target.value);
            
          }
        }
        />
      </div>

      <div class="subject">
        <h2>Subject</h2>
        <input type="text"
        onChange={
          function(event){
            setSubject(event.target.value);
            
          }
        }
        />
      </div>

      <div class="message">
        <h2>Your message</h2>
        <input type="text"
        onChange={
          function(event){
            setMessage(event.target.value);
            
          }
        }
         />
      </div>

      <div class="but">
        <button type="button" 
        onClick={async function(event){
          console.log("Sending ...")
          try{
            let response = await fetch(`https://server.hyderhadi.now.sh/index.js?name=${name}&email=${email}&message=${message}&subject=${subject}`);
            console.log("Done");
            console.log(response);
          } catch (err){
            console.log(err)
          }
        }} >SEND</button>
      </div>
    </div>
  </form>
</div>
  
  <footer > 
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
</>
);
}

export default Contact;