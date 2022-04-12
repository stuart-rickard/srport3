# STUART RICKARD PORTFOLIO

This portfolio was created in response to the challenge for Module 20 of the UC Berkeley Extension Full-stack Coding Bootcamp.

The challenge requires React, and this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Additionally, this project extends React with the react-router package.

## Of Note

This project uses a react-based typing effect. This was an interesting part of the challenge; react can be a little tricky when using `setTimeout()` or `setInterval()`. If not set up correctly, the website will crash and it can be a bit difficult to debug. Interestingly, when in development mode, the react environment will create double calls to `setTimeout()` and `setInterval()`, which I believe is intended to unearth possible performance issues in the production environment, but this behavior can be confusing if you don't know why it is happening!

## Screenshot

Here is a screenshot:

![Screenshot of Portfolio](/screenshot.png)

## Deployed Link

The portfolio is deployed [here](https://silly-meringue-458fc0.netlify.app/).
