export function Photo() {
    const autor = "https://laopinion.com/wp-content/uploads/sites/3/2024/06/SIDDHARTHA-470.jpg?h=4096"
    const description = "Siddhartha"
    return(
        <img 
            src={autor}
            alt={description}
            fullName="Cantante"
            width={300}
            height={300}
        />
    );
}

export default function Cantante() {
    return(
        <section>
        <h1>Siddhartha</h1>
        <Photo />
        <ul>
            <li>Paraiso Lunar</li>
            <li>00:00</li>
            <li>Unicos</li>
        </ul>
        </section>
    )
}