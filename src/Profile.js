function Avatar({person, size}) {
    return(
            <img
            src= {person.imageId}
            alt= {person.name}
            width={size}
            className="Foto"
        />
    );
}

export function Profile() {    
    return (
        <>
        <Avatar 
        person={
                {
                    name: "Persona 5",
                    imageId: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/05/Joker-Persona-5-feature.jpg",
                }
            }
            size={100}
        />
        <Avatar 
        person={
                {
                    name: "Mon Laferte",
                    imageId: "https://cdn-images.dzcdn.net/images/cover/bce09b41ab9f0c9c75b6015fa9e53983/1900x1900-000000-80-0-0.jpg"
                }
            }
            size={100}
        />
        </>
    );
}