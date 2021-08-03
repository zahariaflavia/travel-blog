import * as React from 'react'
import Layout from './layout'
import {about} from './layout.module.css'

const About=()=>{
    return(

<Layout pageTitle="About Us">
    <div className={about}>
        <h1>
            Meet our team.
        </h1>
    </div>
</Layout>)
}

export default About;