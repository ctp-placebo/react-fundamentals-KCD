# Notes from KCD's 3p1c r34c7

# React Fundamentals

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.  

from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures  

It's all about my scope, 'bout my scope, etc etc. 

Blocks are finally treated as scopes in ES6, but only if you declare variables with let or const. In addition, ES6 introduced modules, which introduced another kind of scope. Closures are able to capture variables in all these scopes (later).  

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.  

**Read the page from that ink again every so often, it's a trip.**  


## Object initiaizers  
are used a lot in React
and they're like this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015   PS: it (object literals) look like JSON but it's not JSON.   


## Desctructuring
Read and read again: is JS not react.  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment  

## Classes  
Read and read again, is JS not React  

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes  

---

Maybe the easierst to understand detailed explanation of useState() so far  
https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals  

_________
Exercise 1 & 2

Make summit wivowt jsx but just stupid react alone, innit: 

    const rootElement = document.getElementById('root')    
    const elem = React.createElement('div', {className: 'container', children:  [
       React.createElement('span', null, 'some string',
       '',
       // Reapeat React.createElement,
       )
      ]
    }) 

Have as many createElement elements in the array as you like. You have to import react from somewhere. You hvae to 
render like something like this, like: 
    
    ReactDOM.createRoot(rootElement).render(elem)  

Notice that in react you can't use semi-colons because that wouldn't be cool and only cool kids use react. kill me now. it rilly muks the code heasier to read.   

## Notes specific to the exercises are in the .md files. 

    React.createElement

exercise 02.html has all the ways of adding the child elements with even more createElement.  
I have added more than the example code. 
_____

### Spread Props in JSX

In the example below the order of the spread props matters.  

To override a prop in the `const element = <div..` putting the override after the spread will override, before and it will not override.  

    <body>
      <div id="root"></div>
      <script src="https://unpkg.com/react@18.1.0/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@18.1.0/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
      <script type="text/babel">
        const children = 'Hello World'
        const className = 'container'
        const props = {children, className}
        const element = <div {...props} />
        ReactDOM.createRoot(document.getElementById('root')).render(element)
      </script>
    </body>  

The name of the props matters too, if we change the name of `const className` to `const banana` React throws an error, because _banana_ is not a default property of _\<div\>_ 

______

Make a function that returns some JSX we want to share. 
See `04.extra-1.html` for the example.

When we use `React.createElement` the first argument it takes is the _Type_.
For example `React.createElement('div', ...` the _Type_ is _div_. 

But now we want the message function to be the type: 
    
        function message({children}) {
          return <div className="message">{children}</div>
        }	

 and to use it like this: 

    const element = (
      <div className="container">
        React.createElement(message, {children: 'Hello World'})
      </div>
    )

Now the createElement is taking message as the Type and children is the [hard-coded] props.

There is a differnce in how React renders thse two examples.
In the first example the message function is called and the JSX is returned as a React element of type Message.

But if we call message function directly in the container div, we get a div node/element. 

    <div className="container">
        {React.createElement(message, {children: 'Happy World?'})}
        {message({children: 'Sad World?'})}  
    </div>  

The first one is a React element of type Message, the second one is a div element. Look in the browser's react tools (on firefox under Componets tab the only one to show up is Happy World?, the Sad World is not listed as a component at all).  

_____

# Making it into a resusable component

Taking the previous code and turning it into a resusble component:  
Read the code comments:

    <body>

        <div id="root"></div>

        <script src="https://unpkg.com/react@18.1.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18.1.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
        <script type="text/babel">
        
            // 🐨SOlution; make the function name capitalized, and React/Babel 'somehow' 
            // knows to use it as a component. 
            // Now it's a Component, and can be used with JSX. Magic Babel passes it as a reference.
            
            function Message({children}) {
                return <div className="message">{children}</div>
            }

            const ailment = (
                <div className="container">
                    {/* Have to change 'message' to 'Message' */}
                    {React.createElement(Message, {children: 'Happy World?'})}
                    {/*  and this won't work without a Capital M  
                        {message({children: 'Sad World?'})} 
                    */}

                    {/* But THIS is the result we are looking for. */}
                    <Message>Ecstatic World!</Message>  

                    {/* amd we can resue that compnent */}
                    <Message>Ecstatic World!
                        <Message>Nested Messsage message child. </Messgae>  
                    </Message>  
                </div>
            )

            ReactDOM.createRoot(document.getElementById('root')).render(ailment)
        </script>
    </body> 

For *VALIDATION* look at exercices 04 extra 3, 4 & 5.   
Note that validation is only for development, not production, and that
it's not so useful if you use TS in place of JS, as TS will do most of the work anyway.  

_____

# Styling  

