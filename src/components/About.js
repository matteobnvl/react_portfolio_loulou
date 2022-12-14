import photo from '../assets/images/bg.jpg'
import School from './about/school'


function About(){

    


    return <main>
    <div className="home">
        <div className="home-intro about">
            <div className="title title-big">
                <h3>À propos de moi</h3>
            </div>
            <div className="box-about">
                <div className="text about text-big">
                    <div className="img">
                        <img src={photo} alt="photo de loulou" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus eveniet unde quaerat iusto accusantium esse animi placeat doloribus harum? Maxime beatae explicabo libero ullam deserunt soluta recusandae veritatis numquam!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sed quaerat in suscipit dignissimos, laudantium a neque iste magnam facere dicta eaque optio nihil est aut adipisci, quibusdam doloremque doloribus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates vero vel illum fugit, necessitatibus voluptas reiciendis ipsam esse, voluptatibus repellat consequatur nobis a eligendi? Nam doloribus optio a aliquam.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="about">
        <div className="about-inner">
            <div className="title title-big">
                <h3>Mes skills</h3>
            </div>
            <div className="box-about">
                <h3>front-end</h3>
                <div className="box-skills">
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-html5"></i>
                        </div>
                        <span>HTML</span>
                    </div>
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-sass"></i>
                        </div>
                        <span>SASS</span>
                    </div>
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-vuejs"></i>
                        </div>
                        <span>VUEJS</span>
                    </div>
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <span>REACT</span>
                    </div>
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-square-js"></i>
                        </div>
                        <span>JAVASCRIPT</span>
                    </div>
                </div>
                <h2>back-end</h2>
                <div className="box-skills">
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-node-js"></i>
                        </div>
                        <span>NODEJS</span>
                    </div>
                    <div className="box">
                        <div className="box-icon">
                            <i className="fa-brands fa-php"></i>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about">
        <div className="about-inner">
            <div className="title title-big">
                <h3>Ma formation</h3>
            </div>
            <div className="box-formation">
                <div className="box magnet">
                    <h2>2019</h2>
                </div>
                <div className="box magnet">
                    <h2>2021</h2>
                </div>
                <div className="box magnet">
                    <h2>2024</h2>
                </div>
            </div>
            <div className="info">
                <School h1="BIA - Brevet d'Initiation Aéronautique" h2="Lycée Georges Cabanis - Brive-La-Gaillarde (19100)" />
                
            </div>
        </div>
    </div>
</main>
}


export default About