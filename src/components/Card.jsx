import card from './img/airtime2.png'
import card2 from './img/transfer.png'
import card3 from './img/cards.png'

const Card = () => {


    return(
        <div style={{position:"relative", display: "flex", paddingTop:"3rem" }}>
            <div style={{width:"28rem", backgroundColor:"#f2f5f9",padding:"5rem 5rem", margin:"0 2rem 10rem 2rem", borderRadius:"2rem",position:"relative"}}>
                <h2 style={{fontSize:"2rem",color:"Black", paddingTop: "2rem"}}>
                    Bank Transfer
                </h2>
                <p style={{fontSize:"1rem",color:"black",width:"15rem"}}>Fast Transfer with 100% success rate all Bank across Nigeria, anytime and free</p>
                </div>
                
                <img src={card} alt=""style={{position:"absolute", left:"22rem", bottom:"10rem",zIndex:"8" }} />

                <div>
                <div style={{width:"28rem", backgroundColor:"#f2f5f9",padding:"5rem 5rem", margin:"0 2rem 10rem 2rem", borderRadius:"2rem",position:"relative"}}>
                <h2 style={{fontSize:"2rem",color:"Black", paddingTop: "2rem"}}>
                    Bank Transfer
                </h2>
                <p style={{fontSize:"1rem",color:"black",width:"15rem"}}>Fast Transfer with 100% success rate all Bank across Nigeria, anytime and free</p>
                </div>
                
                <img src={card2} alt=""style={{position:"absolute", right:"30rem", bottom:"10rem",zIndex:"8" }} />
                </div>
            
        </div>

    )
}

export default Card