function generateFooter() {
    return `
    <footer class='footer'>
    <div class="container">
      <div class="col1">
        <a href="#" class="brand">AUTOBAHN</a>
        <ul class="media-icons">
          <li>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-discord"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </li>
        </ul>
      </div>
      <div class="col2">
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">MotorSport</a></li>
          <li><a href="#">Support</a></li>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem excepturi ipsam unde obcaecati iusto velit labore consequuntur officiis aut neque?</p>
        </ul>
      </div>
      <div class="col3">
        <p>Subscribe to our newslatter</p>
        <form>
          <div class="input-wrap">
            <input type="email" placeholder="ex@gmail.com" /><button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </form>
        <ul class="services-icons">
          <li>
            <a href="#"><i class="fa-brands fa-cc-paypal"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-cc-apple-pay"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-google-pay"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-cc-amazon-pay"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="mekk">
        <p>@SAMAH 2023 - All Rights Reserved</p>
      </div>
    </div>
  </footer>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = generateFooter();
    }
});

