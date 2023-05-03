import './about.css'
import PostExample from './PostExample';

function About() {
    return (
        <div id="about">
            <h2>About Howler</h2>
            <p>Howler is a forum-based University of Washington application that is designed to create a safe space for students to discuss mental health issues and seek support from their peers.</p>
            <p>With the goal of helping University of Washington students achieve comfort sharing, 
                discussing, and empathizing over mental health issues, Howler aims to help students 
                cope with these challenges and become more resilient.</p>

            <h3>Join the Howler Community</h3>
            <p>Howler is a free, online community where University of Washington students can 
                share their thoughts and ask questions without judgment. Whether you want to vent, share your emotions,
                ask a clarifying question, or just help someone out, you can do it all out Howler!
                Howler is a safe space where you can find support, validation, and help.</p>

            <h3>How it Works</h3>
            <p>Howler is a straightforward forum web application. After creating and verifying your UW account,
                you can start sharing your thoughts and feelings with other Huskies. Howler is organized into different
                Packs, which group students of similar interests. You can comment in any pack you want, or even create
                your own if you don't think a particular one fits!.</p>


            <h3>UW Verified</h3>
            <p>While anyone can browse through the forums of Howler, only verified UW students can post, comment, or
                make new Packs. This means that any content you see on Howler is verified to be an actual University of Washington
                student. If you've recently graduate don't worry, Howler won't deactivate your account until one year after your
                University account expires!
            </p>
            <h3>Customization</h3>
            <p>There are many ways to customize your Howl here at Howler to make each and every post unique!</p>
            <div className='f-line'>
                <PostExample />
                <PostExample isPoll={true} />
            </div>
        </div>
    )
}

export default About;
