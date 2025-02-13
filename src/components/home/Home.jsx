// import React from 'react'
import "../home/Home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
// import Mainpic from '../../assets/umidu-pic.png'

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container conatiner grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img">
                  {/* <img src={Mainpic} alt="" className="home__img" /> */}
                </div>

                <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home