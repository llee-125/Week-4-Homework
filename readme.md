# WEEK 4 -- Homework--Unit 04: Web APIs

## REQUIREMENTS
* Display Test Header, Timer Bar, Highscores, Start button

* Input user name, save as ("userName").

* Input click ("startGame")
  * Timer starts at 0 and allows 1 minute for full game.
    * 1st question appears ("questionOne") w/possible answers ("possAnswer1", "possAnswer2" ...)
    * 2nd question appears ("questionTwo") w/possible answers ("possAnswer1", "possAnswer2" ...)
    * 3rd question appears ("questionThree") w/possible answers ("possAnswer1", "possAnswer2" ...)
    * 4th question appears ("questionFour") w/possible answers ("possAnswer1", "possAnswer2" ...)
    * 5th question appears ("questionFive") w/possible answers ("possAnswer1", "possAnswer2" ...)

  * Input, select answer 1, ("answerOne") 
    * Check against correct answer ("corrAnswer1", "corrAnswer2", "corrAnswer3", "corrAnswer4", "corrAnswer5"). 
    * Save/track correct or incorrect answers in variable
  * Input, select answer 2, ("answerTwo")
      * Check against correct answer ("corrAnswer1", "corrAnswer2", "corrAnswer3", "corrAnswer4", "corrAnswer5"). 
    * Save/track correct or incorrect answers in variable
  * Input, select answer 3, ("answerThree")
      * Check against correct answer ("corrAnswer1", "corrAnswer2", "corrAnswer3", "corrAnswer4", "corrAnswer5"). 
    * Save/track correct or incorrect answers in variable
  * Input, select answer 4, ("answerFour")
      * Check against correct answer ("corrAnswer1", "corrAnswer2", "corrAnswer3", "corrAnswer4", "corrAnswer5"). 
    * Save/track correct or incorrect answers in variable
  * Input, select answer 5, ("answerFive")
      * Check against correct answer ("corrAnswer1", "corrAnswer2", "corrAnswer3", "corrAnswer4", "corrAnswer5"). 
    * Save/track correct or incorrect answers in variable
  
  * Timer ends and resets when all questions have been answered.
  * Output Score is provided
  * Display score history button
  * Input, when clicked, see history of scores



## App Purpose

Built in to every browser are methods and properties that allow us to extend its basic functionality using JavaScript. This is an example of an application programming interface, or API. APIs are central to creating dynamic, interactive web applications. The first, and perhaps most important, API we will work with is the Web API, which interfaces with the browser. 

In the previous unit, you worked with the `Window` object to generate alerts and prompts in the browser. If you inspect the `Window` object in your developer tools, you'll see that it contains many properties and methods in addition to the ones you’re familiar with. The `Window` object is only one of dozens of interfaces we can access in the Web API, so you can probably imagine the functionality available to us if we've only seen the tip of the iceberg so far!  

We will look at a few of the most important Web APIs in this unit, beginning with the Document Object Model (DOM). The DOM is an in-memory object-oriented representation of an HTML document, which allows us to interact with HTML using JavaScript. When we interface with the DOM, we are not making any changes to the HTML document itself—only to its representation as an object in the browser. DOM methods allow us to select elements to get content from them or insert content into them, generate new elements, and listen for and respond to events such as key presses and mouse clicks.

In this homework assignment, your challenge is to build a code quiz of multiple-choice questions.
* Timer countdown (use setinterval)
* Save Highscores
* Questions (no specific number ~5)
* Initials to save scores
* Save to local storage
* Alert at end or after each question?
* Provide final score xx / xx

# HINTS
Sort an Array: Google: How to sort numbers in an array of javaScript (W3)


## Motivation

### Comprehension Check
You will be employer-ready if you can answer the following questions:
1. What is the DOM API?
2. What is event delegation?
3. What is the purpose of client-side storage?

### Learning Objectives
You will be employer-competitive if you are able to:
* Explain and identify the document object and its relationship to HTML.
* Use the `Window` object for local and session storage.
* Explain event propagation and implement handling functions.
* Use DOM API methods to select and dynamically generate HTML elements and content.
* Use DOM API methods to handle events such as key presses and mouse clicks.
* Research Web API documentation to implement new and unfamiliar interfaces.

## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
Ex. -

<b>Built with</b>
- [Electron](https://electron.atom.io)

## Features
What makes your project stand out?

# Key Topics
The following topics will be covered in this unit:
* Web APIs and interfaces
* Timers
* Document Object Model (DOM)
* Getting, selecting, traversing, and manipulating elements
* Form events
* Keyboard and mouse events
* Bubbling and propagation
* Event delegation

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
Provide step by step series of examples and explanations about how to get a development env running.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests
Describe and show how to run the tests with code examples.

## How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Contribute

Let people know how they can contribute into your project. A [contributing guideline](https://github.com/zulip/zulip-electron/blob/master/CONTRIBUTING.md) will be a big plus.

## Credits
Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project. 

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

## Helpful Links
* [Wikipedia: DOM](https://en.wikipedia.org/wiki/Document_Object_Model)
* [MDN: DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN: Client-side storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/

Louise Lee