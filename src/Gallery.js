function Profile() {
    return (
        <img
            src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/05/Joker-Persona-5-feature.jpg"
            alt="Persona 5"
            width={500}
        />
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
