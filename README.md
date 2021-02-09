# Rock, paper, scissors game

This is the repository of rock,paper,scissors game project, my main object was to manipulate the DOM as much as possible.

The rockpaper.html corresponds to the index document, as you can observe, it only has the main section with two subelements (an h1 and a div) and the script tag.
This was made on purpose in order to create and manipulate as much objects in the DOM.

The first part of the code in the rpsgame.js file, assigns and create all the sections of the game. Once we have all the elements that we are going to use,
we set the attributes of each section. Of course, this could be replaced by creating the empty sections on the main html, an then just setting the attributes
to each section.

The start button on the html calls a funtion (startGame(e)), that append all the childrens to the main sections and sets the new text values of the h1 and
the div's that we have just created.

This last function, also adds an event listener to the window and calls the player() function, when we click the images of each option this functions evaluates
if there is a name attribute to the event, and if so, it uses the name to evaluate the option in the playRound function to get a result.

When one of the players wins 5 times, the game stops and reload the page.
