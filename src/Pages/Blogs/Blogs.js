import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');

    return (
        <section className="dark:text-gray-100 mb-16 pb-20">
            <div className="container flex flex-col justify-center mx-auto md:p-7">
                <div className='pb-20'>
                    <h2 className="text-5xl font-bold text-primary pb-2">Blogs</h2>
                    <p className="pb-7 text-sm font-medium tracking-wider text-center uppercase dark:text-secondary">Assignment-12</p>
                </div>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="text-secondary font-semibold">Ways to manage a state in a React application?</h3>
                        <p className="mt-1 dark:text-gray-200">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. </p>
                    </div>
                    <div>
                        <h3 className="text-secondary font-semibold">How does prototypical inheritance work?</h3>
                        <p className="mt-1 dark:text-gray-200">JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider.</p>
                    </div>
                    <div>
                        <h3 className="text-secondary font-semibold">What is a unit test? Why should we write unit tests?</h3>
                        <p className="mt-1 dark:text-gray-200">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div>
                        <h3 className="text-secondary font-semibold">React vs. Angular vs. Vue?</h3>
                        <p className="mt-1 dark:text-gray-200">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;