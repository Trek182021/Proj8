import Bandle from '../assets/Bandle.jpg'
import Bilgewater from '../assets/Bilgewater.jpg'
import Demacia from '../assets/Demacia.jpg'
import Freljord from '../assets/Freljord.jpg'
import Ionia from '../assets/Ionia.jpg'
import Noxus from '../assets/Noxus.jpg'
import Shadow from '../assets/Shadow.jpg'
import Temp from '../assets/Temp.jpg'
import Zaun from '../assets/Zaun.jpg'
import Targon from '../assets/Targon.jpg'

const images = {
    "1": Shadow,
    "2": Zaun,
    "3": Noxus,
    "4": Ionia,
    "5": Freljord,
    "6": Demacia,
    "7": Bilgewater,
    "8": Zaun,
    "9": Targon,
    "10": Temp,
    "11": Bandle,
}

const regionText = {
    "1": "Shadow",
    "2": "Zaun",
    "3": "Noxus",
    "4": "Ionia",
    "5": "Freljord",
    "6": "Demacia",
    "7": "Bilgewater",
    "8": "Zaun",
    "9": "Targon",
    "10": "Temp",
    "11": "Bandle",
}
const Card = ({_data}) => {

    const Goto = () => {
        window.location = `/edit/${_data.id}`
    }
    return(
        <div className="card-wrapper">
            <img src={images[_data.region]}/>
            <h3>Name of Crewmate: <span>{_data.name}</span></h3>
            <h3>Amount of Kills: <span>{_data.kills}</span></h3>
            <h3>Champion Region: <span>{regionText[_data.region]}</span></h3>
            <button onClick={Goto}>Edit Crewmate</button>
        </div>
    )
}

export default Card