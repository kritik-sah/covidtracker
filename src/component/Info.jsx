import React from 'react'
import Covid from './Covid';

const Info = () => {
    return (
        <div className="container-fluid header p-2">
            <div className="container">
            <h1 className="text-center pt-3">🔴Live <span className="text-white">COVID19</span> Tracker</h1>
            <div className="container mt-3 covidinfo ">
                <img className="image-fluid m-2" height="400rem" src="https://i1.wp.com/safetyrisk.net/wp-content/uploads/2020/04/image-7.png?ssl=1" alt="Safty tips" />
                <span className="container">
                    <h3 className="text-center pt-3 text-white" >Stay Home, Be Responsible!</h3>
                    <p className="pt-3 text-white">Hello There! <span className="text-light">welcome to our 🔴Live covid19 tracker web project,</span> I'm Kritik Sah , the developer of this project.
                    <br />
                    In this project we used React.js framework to build our website + covid19india.org API for fetching live data </p>
                    <p className="pt-3 text-white">
                        Get your $100 free credits on DigitalOcean.com to Create Fast and reliable VPS web Server.
                        <br /> you will get this credits only when you used a affiliate link, So Why Don't you use Mine🔥.
                    </p>
                    <a className="mt-1" href="https://www.digitalocean.com/?refcode=d6b3f58b28f7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"><img src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg" alt="DigitalOcean Referral Badge" /></a>
                    <a className="mt-1" href="https://razorpay.com/payment-button/pl_GY5eoTyIxjUDgU/view/"><img height="80" src="https://lh3.googleusercontent.com/proxy/Re0rX8G_qHFES4lypk76fE_MoaQeJ6CiqHg0Hp1LD1xWlujg4GZlqTw3hWG6PzkHFRl61UEwAgWX_kUArFof7koChAHh0ZmmpOM1qBzhNw" alt="Donate & Support us!" /></a>
                    
                </span>
                <img className="image-fluid m-2" height="400rem" src="https://www.who.int/images/default-source/wpro/health-topic/covid-19/slide2.tmb-479v.jpg?sfvrsn=6fc5f651_5" alt="Safty tips" />
            </div>
            </div>

            <Covid/>
        </div>
    )
}

export default Info
