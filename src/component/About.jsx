import { link } from 'fs'
import { platform } from 'os'
import React from 'react'
import profile from "../img/profile.jpg"


const About = () => {
    return (
        <>
            <section class="container-fluid bg-dark text-white">
        <div class="container m-auto section4">
            <div class="leftcontain pt-5">
                <div class="p-2">
                    <h3>I'm Kritik Sah <br/> Web Developer @ IT Rebels</h3>
                    <p>
                        There are so many ways i can describe my self but for now i think only One word is enough "Learner".
                        <br/>
                        <br/>
                        ❤ to watch anime and Hate salmon Bhai😅
                        <br/>
                        <br/>
                        Thats it Now Back to Work!
                    </p>
                </div>
            </div>
            <div class="rightcontain">
                <img src={profile} alt="battle-tested team" class="img-fluid p-5" />
                <div class="social d-flex justify-content-between ">
                    <a class="btn btn-outline-danger" href="https://www.facebook.com/itrebels.india" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
                    <a class="btn btn-outline-danger" href="https://twitter.com/itrebels_in" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
                    <a class="btn btn-outline-danger" href="https://www.instagram.com/kritik.sah/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
                    <a class="btn btn-outline-danger" href="https://www.youtube.com/channel/UCh7-f_QrD7WcQcu62CixiHQ" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a>
                    <a class="btn btn-outline-danger" href="https://wa.link/xpwssg" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
                    <a class="btn btn-outline-danger" href="https://github.com/kritik-sah" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
        <div class="spacer">

        </div>
    </section>
        </>
    )
}

export default About
