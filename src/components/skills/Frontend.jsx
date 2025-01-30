// import React from 'react'
// import { FaLayerGroup } from "react-icons/fa";
// import { FaRegEye } from "react-icons/fa";
import { FaReact, FaAngular,FaNodeJs  } from "react-icons/fa";
import { SiNextdotjs, 
SiJavascript,
SiTypescript,
SiHtml5,
SiCss3,
SiSass,
SiBootstrap,
SiTailwindcss,
SiMui,
SiStorybook,
SiRedux,
SiFigma,
SiMysql,
SiMongodb
// SiJira,

 } from "react-icons/si";

const Frontend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Frontend Developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                {/* <i className='bx bxl-react'></i> */}
                <FaReact size={25} color="#61DAFB" />
                {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/> */}

                <div>
                    <h3 className="skills__name">React</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-angular' ></i> */}
                <SiNextdotjs size={25} color="black" />

                <div>
                    <h3 className="skills__name">Next.js</h3>
                    {/* <span className="skills__level">Advanced</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-javascript' ></i> */}
                <SiTypescript size={25} color="#007ACC" />

                <div>
                    <h3 className="skills__name">TypeScript</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxs-data'></i> */}
                <SiCss3 size={25} color="#1572B6" title="CSS3" />

                <div>
                    <h3 className="skills__name">CSS</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-typescript'></i> */}
                <SiBootstrap size={25} color="#7952B3"/>

                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-typescript'></i> */}
                <SiMui size={25} color="#007FFF" />
                
                <div>
                    <h3 className="skills__name">Material UI</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-typescript'></i> */}
                <SiRedux size={25} color="#764ABC" title="Redux" />

                <div>
                    <h3 className="skills__name">Redux Toolkit</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>


            <div className="skills__data">
                {/* <i className='bx bxl-typescript'></i> */}
                <FaNodeJs size={25} color="#339933" title="Node.js" />

                <div>
                    <h3 className="skills__name">Node.js</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-typescript'></i> */}
                <SiMongodb size={25} color="#47A248"/>

                <div>
                    <h3 className="skills__name">MongoDB</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

        </div>



        <div className="skills__group">
            <div className="skills__data">
                {/* <i className='bx bxl-angular' ></i> */}
                <FaAngular size={25} color="#DD0031" />

                <div>
                    <h3 className="skills__name">Angular</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-git' ></i> */}
                <SiJavascript size={25} color="#F7DF1E" />

                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    {/* <span className="skills__level">Intermediate</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-react' ></i> */}
                <SiHtml5 size={25} color="#E34F26" />

                <div>
                    <h3 className="skills__name">HTML</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-nodejs' ></i> */}
                <SiSass size={25} color="#CC6699" />

                <div>
                    <h3 className="skills__name">Sass</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-tailwind-css' ></i> */}
                <SiTailwindcss size={25} color="#06B6D4" />

                <div>
                    <h3 className="skills__name">Tailwind CSS</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>


            <div className="skills__data">
                {/* <i className='bx bxl-nodejs' ></i> */}
                <SiStorybook size={25} color="#FF4785" />

                <div>
                    <h3 className="skills__name">Storybook</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-nodejs' ></i> */}
                <SiFigma size={25} color="#F24E1E" />

                <div>
                    <h3 className="skills__name">Figma</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">
                {/* <i className='bx bxl-nodejs' ></i> */}
                <SiMysql size={25} color="#4479A1" />

                <div>
                    <h3 className="skills__name">MySQL</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

{/* 
            <div className="skills__data">
                <i className='bx bxl-nodejs' ></i>

                <div>
                    <h3 className="skills__name">PrimeReact</h3>
                    
                </div>
            </div> */}

        </div>
    </div>
</div>

// html5
// bx bxl-css3
  )
}

export default Frontend