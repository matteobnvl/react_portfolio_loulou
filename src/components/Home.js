import { Link } from "react-router-dom"
import image from '../assets/images/projet1.jpg'
import image2 from '../assets/images/projet2.jpg'

function Home(){

    return <main>
                <div className="home">
                    <div className="home-intro">
                        <div className="title title-big">
                            Étudiant en développement web full-stack
                        </div>
                        <div className="text text-big">
                            <div>Bienvenue sur mon portfolio !</div>
                            <div>
                                Vous pouvez me découvrir <Link to="/about" className="cursor-hover-element">en apprenant un peu plus sur moi</Link> et <Link to="/project" className="cursor-hover-element"> mes projets réalisés</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="about-inner">
                        <div className="box-about">
                            <div className="text text-big text-home" >
                                <div className="image-home">
                                </div>
                                <p>
                                    Hello, <br /><br />
                                    Je suis Louis Bouet étudiant en développement web full-stack à Bordeaux. Je vous présente 
                                    mon portfolio.
                                </p>
                                <a href="/">Télécharger mon CV</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projet">
                    <div className="box-projet">
                        <div className="box">
                            <div className="box-title">
                                <h1>Nom projet</h1>
                            </div>
                            <div className="box-image">
                                <img src={ image } alt="image projet 1" />
                            </div>
                        </div>
                    </div>
                    <dic className="box-projet">
                        <div className="box">
                            <div className="box-title">
                                <h1>Nom projet</h1>
                            </div>
                            <div className="box-image">
                                <img src={ image2 } alt="image projet 1" />
                            </div>
                        </div>
                    </dic>
                </div>
            </main>
}

export default Home