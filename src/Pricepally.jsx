import Price from './image/b-pricepally.webp'


const Pricepally = () => {


    return (
        <>
        <nav style={{display:"flex", justifyContent:"space-evenly", padding:"2rem",}}>
            <div style={{display:"flex", width:"30rem", justifyContent:"space-between", paddingLeft:"2rem",}}>
            <img src={Price} alt="" style={{ width: "5rem"}} />
            <button style={{border:"2px solid #4CAF50;", width:"15rem",}}>Search food items </button>
            <button style={{background:"green", width:"6rem",}}>Search</button>
            </div>

            <div style={{display:"flex", justifyContent:"space-between", }}>
                <ul style={{listStyle:"none", alignContent:"space-between", display:"flex", gap:"4rem",}}>
                    <li>Home</li>
                    <li>April</li>
                    <li>Cart</li>
                    <li>More</li>
                    <li>Order</li>
                </ul>
            </div>
            <button>Login/Sign Up</button>


        </nav>
        </>
    )
}

export default Pricepally