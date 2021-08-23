# Pavol Olbert Presentation Website
__This repository represents my presentation website with various Sub-apps created in React.js.__

## Folder src
The folder "src" is the main source of all data and code for my website. The theme.ts is responsible for all general variables used in CSS and the Root.tsx component is the main component responsible for all the website with usage of React Routes.

## Sub-apps
In folder "src" you will find the folder "components" which consistent of single file .tsx components such as Header or WelcomePage, and also sub-folders for each Sub-app.


### Articles
The "Articles" Sub-app is a simple page for adding Articles with usage of Local Storage, where you can add your article in .md format and the JavaScript library will transform it in HTML Code. You have preview of all created articles and you can also see the detail of each article on route /articlse/:articleSlug .
Production: [Articles](https://pavololbert.com/articles)

### ChuckNorris
The ChuckNorris Sub-app works with [ChuckNorris API](https://api.chucknorris.io/) and gets data via Fetch API. You can also choose an option to get random jokes from a certain category. For a distribution of data through all components is used useContext.
Production: [ChuckNorris](https://pavololbert.com/chucknorris)

### Counter
A simple Counter Sub-app has several buttons for different Math operations with the main State, which is distributed through component via Redux.
Production: [Counter](https://pavololbert.com/counter)
### HackerTyper
The Sub-app with usage of useEffect hook and eventListeners will make you a hacker just by pressing any of your keys.
Production: [HackerTyper](https://pavololbert.com/hackertyper)
### MemoryGame
A Memory Game is played on 4x4 gamepad. Your task is to find 8 pairs of card and by finding them win the game.
Production: [MemoryGame](https://pavololbert.com/memorygame)
### Portfolio
The Portfolio is a section of my website on which you have all the apps and projects from my current portfolio.
Production: [Portfolio](https://pavololbert.com/portfolio)
### TicTacToe
A well known game of TicTacToe takes place on 10x10 gamepad. To check the winner, there is a script which takes an 2-D array and check for the longest sequence and then compare the number of X or O you have to have in a row | column | diagonal to win the game.
Production: [TicTacToe](https://pavololbert.com/tictactoe)
### ToDoList
In the ToDoList sub-app you can add | edit or delete your task. You can easily filtrate them and check just the active or all task which have been done. This sub-app was created as Class Component.
Production: [ToDoList](https://pavololbert.com/todolist)