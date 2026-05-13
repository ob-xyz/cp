import { Link } from "@remix-run/react";
import Altcha from "./altcha";

import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";

export default function Footer() {
  return (
<footer className="footer">

  <h1>The Poast</h1>

<div className="footer-top">
  <div className="footer-signup">
    <h1>Screw it, let's do it.</h1>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Let's do it</button>
        </div>
        <Altcha />
              <input id="bcd05" type="hidden" name="l" checked value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
        <input type="hidden" name="nonce" />
      </form>
  </div>

<div className="footer-links">
  <div className="column">
    <h4>Company</h4>
        <Link to="/ads/advertise-with-us">Advertise with us</Link>
    <Link to="/subscribe">Subscribe</Link>
    <Link to="/">Home</Link>
  </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
    <Link to="/policies/privacy">Privacy Policy</Link>
  <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
  </div>
  <div className="footer-social">
  <a href="https://instagram.com/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={ig} alt="Instagram" />
  </a>
  <a href="https://x.com/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="X (formerly Twitter)" />
  </a>
  <a href="https://linkedin.com/company/thepoast" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <a href="mailto:chris@thepoast.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</footer>
  );
}
