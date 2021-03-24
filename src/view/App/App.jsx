import React from "react";
import './App.scss';
import FAQList from "../../components/FAQList";

function App() {

  return (
    <div className="page">
      <section className="page-content">
        <img className="page-content-img-cub" src="/assets/illustration-box-desktop.svg" alt="cub_img"/>

        <img className="page-content-img-woman_mobile" src="/assets/illustration-woman-online-mobile.svg"
             alt="woman_mobile"/>

        <img className="page-content-img-bg_mobile" src="/assets/bg-pattern-mobile.svg" alt="bg_mobile"/>

        <div className="page-content-column img">
          <img className="page-content-img-woman" src="/assets/illustration-woman-online-desktop.svg" alt="woman"/>

          <img className="page-content-img-bg" src="/assets/bg-pattern-desktop.svg" alt="bg"/>
        </div>

        <div className="page-content-column">
          <div className="page-content-column-list">
            <FAQList/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
