import { Link } from "react-router-dom"

function NoPage(){
    return <main>
        <div className="home">
            <div className="home-intro">
                <div className="title title-big">
                    Erreur 404
                </div>
                <div className="text text-big">
                    <Link to="/">Retourner à la page d'accueil</Link>
                </div>
            </div>
        </div>
    </main>
}


export default NoPage