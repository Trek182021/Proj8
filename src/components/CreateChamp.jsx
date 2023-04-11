import create from "../assets/create.png"
import { supabase } from "../client"
const CreateChamp = (props) => {

    const createChamp = async (event) => {
        event.preventDefault();
        await supabase.from('Champions').insert({name: event.target.name.value, kills: event.target.kills.value, region: event.target.region.value}).select();
        
        window.location = "/";
    }
    return(
        <div className="home-wrapper">
            <h1>Create a new Champion</h1>
            <img src={create}/>

            <div className="form-wrapper">
                <form onSubmit={createChamp}>
                    <div className="inputs">
                    <div className="input-container">
                        <h2 htmlFor="name">Name:</h2>
                        <input type="text" id="name" name="name" placeholder="Enter name here..."/>
                    </div>

                    <div className="input-container">
                        <h2 htmlFor="kills">Kills:</h2>
                        <input type="text" id="kills" name="kills" placeholder="Enter amount here..."/>
                    </div>

                    <div className="input-container">
                        <h2>Region:</h2>
                        <li>
                            <input type="radio" id="region1" name="region" value="1"/>
                            Shadow Isles
                        </li>
                        <li>
                            <input type="radio" id="region2" name="region" value="2"/>
                            Piltover & Zaun
                        </li>
                        <li>
                            <input type="radio" id="region3" name="region" value="3"/>
                            Noxus
                        </li>
                        <li>
                            <input type="radio" id="region4" name="region" value="4"/>
                            Ionia
                        </li>
                        <li>
                            <input type="radio" id="region5" name="region" value="5"/>
                            Freljord
                        </li>
                        <li>
                            <input type="radio" id="region6" name="region" value="6"/>
                            Demacia
                        </li>
                        <li>
                            <input type="radio" id="region7" name="region" value="7"/>
                            Bilgwater
                        </li>
                        <li>
                            <input type="radio" id="region8" name="region" value="8"/>
                            Zaun
                        </li>
                        <li>
                            <input type="radio" id="region9" name="region" value="9"/>
                            Targon
                        </li>
                        <li>
                            <input type="radio" id="region10" name="region" value="10"/>
                            Shurima
                        </li>
                        <li>
                            <input type="radio" id="region11" name="region" value="11"/>
                            Bandle City
                        </li>


                    </div>
                    </div>
                <button type="submit">Create Champion</button>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateChamp