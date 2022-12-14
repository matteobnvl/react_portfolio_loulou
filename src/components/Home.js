import { Link } from "react-router-dom"

function Home(){

    return <main>
    <div class="home">
        <div className="home-intro">
            <div class="title title-big">
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
</main>
}

export default Home