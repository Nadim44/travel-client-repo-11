import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className=' bg-red-400 rounded-lg p-4 m-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- Difference between SQL and NoSQL?
                </h1>
                <p>
                    Answer:- SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                </p>
            </div>
            <div className=' bg-red-400 rounded-lg p-4 m-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- What is JWT, and how does it work?
                </h1>
                <p>
                    Answer:- JWT is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className=' bg-red-400 rounded-lg p-4 m-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- What is the difference between javascript and NodeJS?
                </h1>
                <p>
                    Answer:- JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                </p>
            </div>
            <div className=' bg-red-400 rounded-lg p-4 m-4'>
                <h1 className='text-xl text-semibold  ' >
                    Q:- How does NodeJS handle multiple requests at the same time?
                </h1>
                <p>
                    Answer:- NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;