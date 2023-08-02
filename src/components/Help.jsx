import help from './img/help.png'


const Help = () => {


    return (


        <div style={{position:"relative" }} >

            <div style={{width:"full", height:"20vh", backgroundColor:"#210f60",padding:"10rem 5rem", margin:"0 2rem 10rem 2rem", borderRadius:"2rem",position:"relative"}} >

                <h1 style={{fontSize:"4rem",color:"white"}}>We are here to help!</h1>

                <p style={{fontSize:"1rem",color:"white",width:"30rem"}}>Chat with us via our in-app live chat or send us a message on our official social media pages. If you require further assistance, contact us via the following channels:</p>
            </div>
            <img src={help} alt="" style={{position:"absolute", right:"5rem", bottom:"12rem",zIndex:"10" }}/>

        </div>
    )
}

export default Help