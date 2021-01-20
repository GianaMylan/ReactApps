import React from 'react';


class Home extends React.Component{
    render() {
      return ( 
      <div className="homeClass">
        <h2>Studio Ghibli
        </h2>
        <div className="slider-wrapper">
            <div className="slider">
                <input type="radio" name="slider" className="trigger" id="1" checked="checked" />
                <div className="slide">
                    <figure className="slide-figure">
                    <img alt='1' className="slide-img" src="./images/1.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="2" />
                <div className="slide">
                    <figure className="slide-figure">
                    <img alt='2' className="slide-img" src="./images/2.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
                
                <input type="radio" name="slider" className="trigger" id="3" />
                <div className="slide">
                    <figure className="slide-figure">
                    <img alt='3' className="slide-img" src="./images/3.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="4" />
                <div className="slide">
                <figure className="slide-figure">
                    <img alt='4' className="slide-img" src="./images/4.png" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="5" />
                <div className="slide">
                <figure className="slide-figure">
                    <img alt='5' className="slide-img" src="./images/5.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="6" />
                <div className="slide">
                    <figure className="slide-figure">
                    <img alt='6' className="slide-img" src="./images/6.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="7" />
                <div className="slide">
                <figure className="slide-figure">
                    <img alt='7' className="slide-img" src="./images/7.png" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="8" />
                <div className="slide">
                <figure className="slide-figure">
                    <img alt='8' className="slide-img" src="./images/8.jpg" />
                    <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="9" />
                <div className="slide">
                    <figure className="slide-figure">
                        <img alt='9' className="slide-img" src="./images/9.jpg" />
                        <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
        
                <input type="radio" name="slider" className="trigger" id="10" />
                <div className="slide">
                    <figure className="slide-figure">
                        <img alt='10' className="slide-img" src="./images/10.png" />
                        <figcaption className="slide-caption"><p></p></figcaption>
                    </figure>{/* .slide-figure */}
                </div>{/* .slide */}
            </div>{/* .slider */}
            <ul className="slider-nav">
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="1"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="2"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="3"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="4"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="5"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="6"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="7"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="8"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="9"></label></li>
                <li className="slider-nav__item"><label className="slider-nav__label" htmlFor="10"></label></li>
            </ul>{/* slider-nav */}
        </div> {/* slider-wrapper */} <br></br> <br></br>
        <div className="about">
          <h5> Hayao Miyazaki's films and media have been popular for many years. This page is dedicated to information about the iconic films he created. </h5>
        </div>
        <div>
          <footer> All information sourced from: 
          The Studio Ghibli API<br></br>
          Page created by: Giana Mylan</footer>
        </div>
  
      </div>
      )
    }
  }

  export default Home;