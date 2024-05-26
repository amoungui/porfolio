import React, { useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DataProvider } from "./contexts/DataContext";
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error from './components/Error/Error'

function MainComponent() {
    useEffect(() => {
        const showMenu = (toggleId, navId) =>{
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

            if(toggle && nav){
                toggle.addEventListener('click', ()=>{
                    nav.classList.toggle('show')
                })
            }
        }
        showMenu('nav-toggle','nav-menu')
    }, []);

    useEffect(() => {
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            const navMenu = document.getElementById('nav-menu')
            // When we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const scrollActive = () =>{
            const scrollDown = window.scrollY

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsCl = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
                
                if(sectionsCl !== null){
                    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                        sectionsCl.classList.add('active-link')
                    }else{
                        sectionsCl.classList.remove('active-link')
                    }
                }                                                    
            })
        }
        window.addEventListener('scroll', scrollActive)
    }, []);

    return (
        <DataProvider>
            <React.StrictMode>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </Router>
            </React.StrictMode>
        </DataProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
