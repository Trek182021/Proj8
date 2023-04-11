import Card from "./Card";


const Gallery = ({data}) => {
    return (
        <div className="home-wrapper">
            <h1>Your Champion Gallery!</h1>
            <div className="gallery-container">

                {data.map( (champ) => <Card _data={champ}/>)}
            </div>
        </div>
    )
}

export default Gallery;