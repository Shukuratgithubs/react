import bg from './img/background.png'
import group from './img/group.png'
import vector from './img/vector.png'

const SectionOne = () => {


    return (

        <div style={{backgroundImage: ` url('${bg}')`, height:"100vh",padding:"0 15rem"}} >

            <div style={{display:"flex", gap:"10rem", margin:"8rem 0"}}>

                <div style={{display:"flex",flexDirection:"column"}} >

                    <div style={{display:"flex",flexDirection:"column"}}>
                         <h1 style={{fontSize:"4rem",color:"#210f60"}} >We are <span style={{color:"#1dc99b"}} >Beyond Banking</span></h1>
                                <img src={vector} alt="" style={{width:"20rem",alignSelf:"center" }} />
                    </div>
                </div>
                <img src={group} alt="" />
            </div>
        

        
        </div>
    )
}

export default SectionOne