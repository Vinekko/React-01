import React from "react";
import ReactDom from "react-dom/client";

//todos los componentes retornan UN elemento html 
function App() {
    return <h1>Hello, World!</h1>;
}

const root = ReactDom.createRoot(
    document.getElementById("root")
)

root.render(
    <App/>
)