import React from "react";
import '/Users/___ISMAIL___/Desktop/react-first-test/src/Styles/HomePageStyles/VideoSection.css';
import videoBg from '/Users/___ISMAIL___/Desktop/react-first-test/src/Video/Berkshire Yoga Dance & Fitness - Promo Video.mp4';







  function VideoSection(props) {
    return (

      <div>
          <section className="box">
            <div className="overlay"></div>
            <video
              src={videoBg} autoPlay muted loop/>
            <div className="kkio">
            <h1>Yoga Centre</h1>
            <h3>Trouvez votre propre chemin dans le yoga avec des instructeurs qualifiés dans <br/>diverses disciplines !</h3>
            <a href="#" className="boxBtn">
              commencez maintenant
            </a>
            </div>
          </section>
          <section className="kkio2">
          <div className="kkio2">
            <h1>Yoga Centre</h1>
            <h3>Trouvez votre propre chemin dans le yoga avec des instructeurs qualifiés dans <br/>diverses disciplines !</h3>
            <a href="#" className="boxBtn">
              commencez maintenant
            </a>
            </div>
          </section>
    </div>


    );
  }
  





export default VideoSection ;





