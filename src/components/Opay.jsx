import Card from "./Card"
import Help from "./Help"
import Navbar from "./Navbar"
import SectionOne from "./SectionOne"



const Opay = () => {


    return(

        <div style={{display:"flex",flexDirection:"column"}} >

        <Navbar/>

        <SectionOne/>

        <Help/>
        
        < Card />
        </div>
    )
}

export default Opay