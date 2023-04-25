import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import rebel from "../../Images/Screenshot 2023-04-25 at 3.31.45 PM.png";
import inspo from "../../Images/Screenshot 2023-04-25 at 3.31.36 PM.png";
import { Link } from 'react-router-dom';


function Press() {


    return(
        <>
        <header>
            <Header />
        </header>


        <main className='press'>
            <span id='pressh2'>
                In the cxty & In the news
            </span>
            <p>
                Interested in interviewing simpcxty? Head to our <Link to="/contact">Contact Page</Link> and reach out!
            </p>
            <article className='articles'>
                <a href='https://canvasrebel.com/meet-simpcxty/' target="_blank" rel="noopener noreferrer"><img src={rebel} alt="Interview with Canvas Rebel" /></a>
                <a href='http://voyageatl.com/interview/daily-inspiration-meet-simp-cxty/' target="_blank" rel="noopener noreferrer"><img src={inspo} alt="Interview with Canvas Rebel" /></a>
            </article>
        </main>


        <footer>
            <Footer />
        </footer>

        </>
    )
}
export default Press;