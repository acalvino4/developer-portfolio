---
type: 'Website'
viewLink: 'https://virally-2.herokuapp.com/'
sourceLink: 'https://github.com/acalvino4/virally'
heading: 'Virally'
subHeading: 'A Social Media platform built with Flask'
synopsis: 'Flask Site'
technologies: 'python flask sqlalchemy html5'
keywords: 'website-development heroku'
featured: false
---
This is a twitter-like social media app built in flask that allows users to make brief postings and to follow other users to view their postings. This project gave me experience in Flask, FlaskForms, FlaskLogin, SQLAlchemy, and Jinja Templates.

It was my first time implementing a full-scale authentication system, as well as my first time utilizing the SQLAlchemy ORM.

On a small note, I also used a native css variable for the first time here. (I have used sass variables, as my preference is generally to work with bootstrap.)

Some other interesting features that I worked though are
* implementing a many-to-many self-referential database relationship in SQLAlchemy
* dealing with all data exchange through form submission rather than ajax
* rerouting after login or a post request based on a 'next' url query parameter
