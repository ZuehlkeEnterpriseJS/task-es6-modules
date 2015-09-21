## Goal ##

Learn how to use the ES6 class construct.


## Setup ##

As your browser probably does not yet support ES6, Babel is used to transpile ES6 code to ES5.

## Tasks ##

1. Change the type of your script from "text/javascript" to "text/babel" to start working with ES6 (described on https://babeljs.io/docs/usage/browser/)
1. Refactor the application logic to use the class construct
1.1 Introduce a new class called `App` which logs "hello" to the console and instantiate the class when the app starts. Does it work?
1.2 Move the application bootstrap logic (start), to the `App` class and introduce new classes 

## Solution ## 

The solution includes a main Application class (App), three business classes (Car, Motor, Light) and a helper class (Logger).