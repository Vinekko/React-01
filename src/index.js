import React from "react";
import ReactDom from "react-dom/client";
import Gallery from "./Gallery.js";
import Cantante from "./Exercise.js";
import { Profile } from "./Profile.js";

//todos los componentes retornan UN elemento html 
// function App() {
//     return <h1>Hello, World!</h1>;
// }

//parte 2
// function Profile() {
//     return (
//         <img
//             src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/05/Joker-Persona-5-feature.jpg"
//             alt="Persona 5"
//             width={500}
//         />
//     );

// }

// export default function Gallery() {
//     return (
//         <section>
//             <h1>Personajes de Videojuegos</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

//parte 3
// el componente sutil que le indica a react que es un componente es la mayuscula inicial
// export default function App() {
//     return (
//         <Gallery />
//     );
// }

//parte 4 agregar estilos 
export default function TodoList() {
    return(
        <ul style={
            {
                backgroundColor:'red',
                color:'white',
            }
        }>
            <li>Hacer un git clone</li>
            <li>Ir al cine</li>
            <li>Crear un Profile</li>
        </ul>
    );
}


const root = ReactDom.createRoot(
    document.getElementById("root")
)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)