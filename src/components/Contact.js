function Contact(){
    return <main>
    <div className="home">
        <div className="home-intro about">
            <div className="title title-big">
                Me contacter
            </div>
            <div className="form">
                <form action="#" method="post">
                    <div className="text-champ">
                        <div>
                            <input type="text" name="name" id="name" placeholder="Nom prénom" required />
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div>
                            <input type="text" name="objet" id="objet" placeholder="Objet" required />
                        </div>
                    </div>
                    <div className="text-champ">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                    <button>Envoyer <i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    </div>
</main>
}


export default Contact