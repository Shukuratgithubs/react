import logo from './img/opay.jpg'

const Navbar = () => {

    return (

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 15rem"}} >

            <img src={logo} alt="" style={{width:"8rem"}} />
            <div style={{display:"flex", gap:"5rem"}}>

                <p>Personal</p>
                <p>Business</p>
                <p>Documentation</p>
                <p>Company</p>
                <p>Join Us</p>
            </div>

        </div>
    )
}

export default Navbar