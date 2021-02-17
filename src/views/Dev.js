import React, { Component } from 'react'
export default class Dev extends Component{
    render(){
        return(
            <React.StrictMode>
            <section className="about">About</section>
            <section className="projects">Projects</section>
            <section className="experiences">Experiences</section>
            <section className="contact">Contact</section>
            </React.StrictMode>
        )
    }
}

