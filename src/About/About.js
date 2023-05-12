import './about.css'
import signup from './img/signup.JPG';
import create from './img/create.JPG';
import packs from './img/packs.JPG';
import search from './img/search.JPG';
import tile from './img/tile.png';
function About() {
    return (
        <div id="about">
            <h2>About Howler</h2>
            <img className='tile' src={tile} />
            <p>
                Howler is a forum-based University of Washington application that is 
                designed to create a safe space for students to discuss mental health issues and seek support from their peers. 
                After creating and verifying your UW account, you can start sharing your thoughts and feelings with other Huskies. 
                Howler is organized into different Packs, which group students of similar interests. 
                While anyone can browse through the forums of Howler, only verified UW students can post, comment, or make new Packs.
                This means that any content you see on Howler is verified to be an actual University of Washington student.
            </p>
            <div className='f-line images'>
                <figure>
                    <img className='site-img' src={signup} />
                    <figcaption>Easy UW verfified signup process!</figcaption>
                </figure>

                <figure>
                    <img className='site-img' src={create} />
                    <figcaption>Simplified and customizeable post creations!</figcaption>
                </figure>
            </div>
            <div className='f-line images'>
                <figure>
                    <img className='site-img' src={packs} />
                    <figcaption>View specific groups for specialized information!</figcaption>
                </figure>

                <figure>
                    <img className='site-img' src={search} />
                    <figcaption>Convenient search feature to find the perfect post, comment, or board!</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default About;
