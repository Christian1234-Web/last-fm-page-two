import React from 'react'
import Navbar from '../components/Navbar'


function NotFound() {
    return <div>
        <Navbar></Navbar>
        <h1 className="flex line-h" style={{justifyContent:'center',alignItems:'center',backgroundColor:'black',height:'90vh',color:'white',fontSize:'40px'}}>
        THE PAGE YOU ARE LOOKING FOR IS NOT AVAILABLE <br></br> THANK YOU
        </h1>
    </div>
}
export default NotFound;