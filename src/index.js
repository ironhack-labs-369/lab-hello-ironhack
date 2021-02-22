import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element = (
    <>
        <section>
            <img src="images/ironhack-logo.svg" alt="logo" />
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend</p>
            <button>Awesome!</button>
        </section>
        <section>
            <article>
                <img src="images/icon1" alt="icon1" />
                <p>React makes it painless to create interactive UIs</p>
            </article>
            <article>
                <img src="images/icon2" alt="icon2" />
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article>
                <img src="images/icon3" alt="icon3" />
                <p>A set of immutable values are passed to the components</p>
            </article>
            <article>
                <img src="images/icon4" alt="icon4" />
                <p>Staticall-typed designed to run on modern browsers </p>
            </article>
        </section>
    </>
);

ReactDOM.render(element, document.getElementById('root'));
