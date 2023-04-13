const Footer = () => {
    return (
        <footer id="footer-container">
    <div class="wrapper">
      <div class="footer-item-container grid four">
        <div class="footer-item">
          <div class="footer-logo"><a href="/"><img src="src/default/images/footer-logo.svg" alt="Niagara-on-the-Lake Museum"></img></a></div>
        </div>

        <div class="footer-item">
          <div class="contact-flex-item address">43 Castlereagh Street, PO Box 208 <br />Niagara-on-the-Lake, ON L0S 1J0 <br />Canada</div>
        </div>

        <div class="footer-item">
          <div class="contact-flex-item phone"><span>Phone</span><a href="tel:9054683912">905 468 3912</a></div>
          <div class="contact-flex-item phone"><span>Fax</span><a href="tel:9054681728">905 468 1728</a></div>
          <div class="contact-flex-item email"><span>Email</span><a href="mailto:contact@nhsm.ca">contact@nhsm.ca</a></div>
        </div>

        <div class="footer-item">
          <div class="social-media-buttons">
            <a href="https://www.facebook.com/NOTLMuseum/" target="_blank" class="facebook social-button"><img alt="Like us on Facebook" src="src/default/images/social/facebook.svg"></img></a>
            <a href="https://twitter.com/NOTLMuseum" target="_blank" class="twitter social-button"><img alt="Follow us on Twitter" src="src/default/images/social/twitter.svg"></img></a>
            <a href="https://www.instagram.com/notlmuseum/" target="_blank" class="instagram social-button"><img alt="Follow us on Instagram" src="src/default/images/social/instagram.svg"></img></a>
            
            <a href="https://www.youtube.com/user/NOTLMuseum" target="_blank" class="youtube social-button"><img alt="Subscribe to us on Youtube" src="src/default/images/social/youtube.svg"></img></a>
            
          </div>
          <p class="muted">Copyright &copy; Niagara-on-the-Lake Museum <script type="text/javascript">document.write(new Date().getFullYear());</script></p>
          <p class="muted"><a target="_blank" href="http://www.symetricproductions.com">Web Design & Development by Symetric_</a></p>
        </div>

      </div>
    </div>
  </footer>  
    )}

    export default Footer