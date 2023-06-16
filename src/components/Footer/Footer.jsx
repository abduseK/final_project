import fb from "./social-imgs/facebook.png";
import twitter from "./social-imgs/twitter.png";
import whatsapp from "./social-imgs/whatsapp.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-div">
            <h4>Services</h4>
            <a href="/id">
              <p>ID Applications</p>
            </a>
            <a href="/birth">
              <p>Birth Cert. Applications</p>
            </a>
            <a href="/death">
              <p>Death Cert. Applications</p>
            </a>
            <a href="/wedding">
              <p>Wedding Cert. Applications</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Volunteer</h4>
            <a href="/education">
              <p>Education</p>
            </a>
            <a href="/health">
              <p>Health</p>
            </a>
            <a href="/sport">
              <p>Sport</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Daily Stat</h4>
            <a href="/children">
              <p>Number of childs</p>
            </a>
            <a href="/death">
              <p>Deaths</p>
            </a>
            <a href="/wedding">
              <p>Wedding</p>
            </a>
          </div>
          <div className="sb_footer-links-div">
            <h4>Our Social Media</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={whatsapp} alt="" />
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
