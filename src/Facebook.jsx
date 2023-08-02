import thisLogo from './image/Facebook.png'

const Facebook = () => {

    const hello = {
        width: "30rem", 
        height: "2rem",
        background: "red"
    }

return (

        <>

        <img src={thisLogo} alt="" style={{ width:"4rem"}} />

            <form >


                <input type="text" style={{ width: "30rem", height: "2rem", }} />
                <input type="text" style={{ width: "30rem", height: "2rem", }} />
                <input type="text" style={{ width: "30rem", height: "2rem", }} />
                <input type="text" style={hello} />

                <button style={{width:"3rem", color: "green", font:"16px", backgroundcolor: "#4CAF50", }}>Submit</button>
            </form>
        
        </>
)

}

export default Facebook