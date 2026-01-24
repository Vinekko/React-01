function Profile() {    
    const avatar = "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/05/Joker-Persona-5-feature.jpg"
    const description = "Persona 5"
    return (
        <>
        <h1>Foto de {description}</h1>
        <img
            src= {avatar}
            alt= {description}
            width={500}
            className="Foto"
        />
        </>
        
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Personajes de Videojuegos</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
