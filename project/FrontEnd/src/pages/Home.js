import mapVertical from '../default/images/mapVertical.svg';
import map from '../default/images/map.svg';
import icon1 from '../default/images/icon1.svg';
import icon2 from '../default/images/icon2.svg';
import icon3 from '../default/images/icon3.svg';
import icon4 from '../default/images/icon4.svg';
import icon5 from '../default/images/icon5.svg';
import icon6 from '../default/images/icon6.svg';
import icon7 from '../default/images/icon7.svg';
import info from '../default/images/info.svg';
import en from '../default/images/EN.svg';

const Home = () => {

  var modal = document.getElementById("modal1");
  var title = document.getElementById("modalTitle");
  var span = document.getElementById("close");

  function displayModal() {
    title.innerText = "Test";
    modal.style.display = "block";
  }

  /*function hideModal() {
    modal.style.display = "none";
  }*/

  /*
  <script>
    var modal = document.getElementById("modal1");
    var title = document.getElementById("modalTitle");
    var span = document.getElementById("close");

    // Display the modal.
    function displayModal(titleData) {
      title.innerText = titleData;
      modal.style.display = "block";
    }

    // Hides the modal on clicking the X.
    span.onclick = function () {
      modal.style.display = "none";
    };

    var modalInfo = document.getElementById("modalInfo");
    var spanInfo = document.getElementById("closeInfo");

    // Display the modal.
    function displayInfo() {
      modalInfo.style.display = "block";
    }

    // Hides the modal on clicking the X.
    spanInfo.onclick = function () {
      modalInfo.style.display = "none";
    };

    var modalLang = document.getElementById("modalLang");
    var spanLang = document.getElementById("closeLang");

    // Display the modal.
    function displayLang() {
      modalLang.style.display = "block";
    }

    // Hides the modal on clicking the X.
    spanLang.onclick = function () {
      modalLang.style.display = "none";
    };

    // Hides the modal when clicking outside it.
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      if (event.target == modalInfo) {
        modalInfo.style.display = "none";
      }
      if (event.target == modalLang) {
        modalLang.style.display = "none";
      }
    };
  </script>
  */

  return (
    <div>
      <section id="content-container" class="inside">
        <div id="interactiveMap">
          <picture>
            <source
              media="(min-width: 768px)"
              srcset={map}
            />
            <img
              id="mapImage"
              src={mapVertical}
              alt="Niagara-on-the-Lake Museum map"
            />
          </picture>

          <img
            id="icon1"
            class="icon"
            src={icon1}
            alt="Arrow head"
            onClick={displayModal}//"displayModal(1)"
            role="button"
          />
          <img
            id="icon2"
            class="icon"
            src={icon2}
            alt="Flag of the United Kingdom"
            onClick="displayModal(2)"
            role="button"
          />
          <img
            id="icon3"
            class="icon"
            src={icon3}
            alt=""
            onClick="displayModal(3)"
            role="button"
          />
          <img
            id="icon4"
            class="icon"
            src={icon4}
            alt="Cannon"
            onClick="displayModal(4)"
            role="button"
          />
          <img
            id="icon5"
            class="icon"
            src={icon5}
            alt=""
            onClick="displayModal(5)"
            role="button"
          />
          <img
            id="icon6"
            class="icon"
            src={icon6}
            alt="Monument"
            onClick="displayModal(6)"
            role="button"
          />
          <img
            id="icon7"
            class="icon"
            src={icon7}
            alt="Grapes"
            onClick="displayModal(7)"
            role="button"
          />
          <h1 id="icon8" onClick="displayModal(8)" role="button">Memorial Hall</h1>

          <h1 id="icon8-2" onClick="displayModal(8)" role="button">
            Memorial<br />Hall
          </h1>
        </div>

        <img
          id="info"
          class="ui"
          src={info}
          alt="Information icon"
          onClick="displayInfo()"
          role="button"
        />

        <img
          id="en"
          class="ui"
          src={en}
          alt="Language select icon"
          onClick="displayLang()"
          role="button"
        />

        <div id="modal1" class="modal">
          <div class="modal-content">
            <span id="close" class="close">&times;</span>
            <h1 id="modalTitle"></h1>
            <p>
              Native people have lived in Niagara for 11 thousand years, a
              considerable period of time compared to “the discovery of America”
              accomplished by European explorers in the 15th century. These first
              nomadic inhabitants practiced hunting and gathering. Over time,
              indigenous villages became more permanent because of the growing
              importance in their diet of vegetable cultivation. Around the year
              1300 distinct nations emerged, including the Neutrals, who inhabited
              Niagara until their defeat by the Iroquois in 1650. Following their
              disappearance, the Seneca and the Mississaugas briefly settled in the
              region.
            </p>
          </div>
        </div>

        <div id="modalInfo" class="modal">
          <div class="modal-content">
            <span id="closeInfo" class="close">&times;</span>
            <div id="menu-button-container"></div>
            <h1>Hours of Operation:</h1>
            <p>
              Open every day from 1 pm - 5 pm November through April<br />
              (10 am - 5 pm May through October)<br />
              The <b>Museum is closed</b> on the following holidays: Good Friday,
              Easter Sunday, Thanksgiving Day, and during the Christmas season
              between December 18th and January 1st.<br />
              <b>PARKING:</b> Free street parking in available out front for Museum
              patrons, but it is limited. More free street parking can be found on
              both Castlereagh and Davy Streets. Paid parking lots are available on
              Platoff Street, at Fort George and at the Court House.
            </p>
            <h1>Admissions:</h1>
            <p>
              Adults - $5<br />
              Seniors (60+) - $3<br />
              Students (full-time) - $2<br />
              Age 18 and under - FREE
            </p>

            <h1>Location:</h1>
            <p>The museum is located on 43 Castlereagh Street.</p>
          </div>
        </div>

        <div id="modalLang" class="modal">
          <div id="modalLang-content" class="modal-content">
            <span id="closeLang" class="close">&times;</span>
            <button class="buttonLang">English</button>
            <button class="buttonLang">Français</button>
          </div>
        </div>
      </section>

      <div id="modalInfo" class="modal">
        <div class="modal-content">
          <span id="closeInfo" class="close">&times;</span>
          <div id="menu-button-container"></div>
          <h1>Hours of Operation:</h1>
          <p>
            Open every day from 1 pm - 5 pm November through April<br />
            (10 am - 5 pm May through October)<br />
            The <b>Museum is closed</b> on the following holidays: Good Friday,
            Easter Sunday, Thanksgiving Day, and during the Christmas season
            between December 18th and January 1st.<br />
            <b>PARKING:</b> Free street parking in available out front for Museum
            patrons, but it is limited. More free street parking can be found on
            both Castlereagh and Davy Streets. Paid parking lots are available on
            Platoff Street, at Fort George and at the Court House.
          </p>
          <h1>Admissions:</h1>
          <p>
            Adults - $5<br />
            Seniors (60+) - $3<br />
            Students (full-time) - $2<br />
            Age 18 and under - FREE
          </p>

          <h1>Location:</h1>
          <p>The museum is located on 43 Castlereagh Street.</p>
        </div>
      </div>

      <div id="modalLang" class="modal">
        <div id="modalLang-content" class="modal-content">
          <span id="closeLang" class="close">&times;</span>
          <button class="buttonLang">English</button>
          <button class="buttonLang">Français</button>
        </div>
      </div>
    </div>
  )
}

export default Home