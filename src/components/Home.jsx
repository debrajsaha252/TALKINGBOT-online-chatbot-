import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline';
import {
    Link
} from "react-router-dom";

const Home = () => {

    return (
        <div className='full'>
            <nav id="navbar-example2" className="navbar sticky-top bg-body-tertiary px-3 " >


                <a className="navbar-brand" href="#">talkingBot</a>


                <ul className="nav nav-tab">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading3">Contact</a>
                    </li>
                </ul>


            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">


                <h4 id="scrollspyHeading1"></h4>
                <div className='spline'><Spline scene="https://prod.spline.design/B7aYpKtIqIbDV5I7/scene.splinecode" /></div>


                <h4 id="scrollspyHeading2"></h4>
                <div className="p-5 bg-body-secondary">
                    <div className="text-center" id='p1'><h6>July 13,2024</h6></div>
                    <div className="text-center" id='p2'><h2>Introducing TALKINGBOT</h2></div>
                    <div className="text-center"><Link type="button" className="btn btn-outline-dark" to="./Talkingbot">Try TALKINGBOT</Link></div>
                    <div className="fs-1 px-3">About TalkingBot</div>
                    <div className=' px-3' id='creator'><samp className="text-uppercase">Creator:</samp> Debraj Saha</div>
                    <div className=' px-3' id='project_name'><samp className="text-uppercase">Project Name:</samp> TalkingBot</div>
                    <div className="Overview fs-2 px-3 text-center" id='overview'>Overview</div>
                    <div className="Overview">TalkingBot is an innovative online chatbot designed to answer any type of question you have. Developed using React.js and REST APIs, TalkingBot offers a seamless and interactive user experience. Whether you need help with general knowledge, tech support, or just want to chat, TalkingBot is here to assist you.</div>

                    <div className="Features fs-2 px-3 " id='Features'>Features</div>
                    <div className="Features">
                        <ul>
                            <li>
                                <samp>Versatile Question Handling:</samp> Capable of answering a wide range of questions, from simple inquiries to complex topics.
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <samp>Real-Time Responses:</samp> Utilizes REST APIs to fetch and deliver accurate answers swiftly.
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <samp>User-Friendly Interface:</samp> Built with React.js, TalkingBot provides a smooth and responsive interface that is easy to navigate.
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <samp>Continuous Learning:</samp> The chatbot is continuously updated to improve its knowledge base and provide better answers over time.
                            </li>
                        </ul>

                    </div>

                    <div className="Technologies_Used fs-2 px-3 " id='Technologies_Used'>Technologies Used</div>

                    <div className="Technologies_Used">

                        <ul>
                            <li><samp>React.js:</samp> For building the front-end user interface.</li>
                        </ul>

                        <ul>
                            <li><samp>REST API:</samp> To fetch and deliver data in real-time.</li>
                        </ul>

                        <ul>
                            <li><samp>Node.js:</samp> For the backend server.</li>
                        </ul>

                    </div>

                    <div className="Our_Mission fs-2 px-3 text-center" id='Our_Mission'>Our Mission</div>
                    <div className="Our_Mission">

                        At TalkingBot, our mission is to make information accessible and interactions engaging. We aim to create a reliable digital assistant that enhances your online experience by providing quick and accurate answers to your questions.

                    </div>


                </div>



                <h4 id="scrollspyHeading3"></h4>
                <div className="p-3 bg-body-secondary">
                    <div className="text-center" id='contact'><h1>Contact</h1></div>

                    <div className="text-center" id='gmail_w'><p>You can get in touch with me by writhing to</p></div>
                    <div className="gmail">
                        <div className="text-center fs-3" id='gmail'>debrajsaha252@gmail.com</div>
                    </div>

                    <div className="icons ">

                        <div className="git">
                            <a href="https://github.com/debrajsaha252" className="gitlink" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>

                        </div>

                        <div className="linkdin">
                            <a href="https://www.linkedin.com/in/debraj-saha-114715272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                        </div>

                        <div className="facebook">
                            <a href="https://www.facebook.com/debraj.saha.7946?mibextid=LQQJ4d">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                            </a>
                        </div>

                        <div className="instagram">
                            <a href="https://www.instagram.com/debraj_saha_official?igsh=MXV5eW53YnRqYWtkZw==">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Home
