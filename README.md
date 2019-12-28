# MyReads Project

This is my first project for React nano degree program.
Demo: https://mo7amedshaban1.github.io/my-reads/

## Project Setup

-  git clone [https://github.com/Mo7amedShaban1/my-reads.git](https://github.com/Mo7amedShaban1/my-reads.git)
-  install all project dependencies with `npm install`
-  start the development server with `npm start`

## Main Page

-  The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
-  The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
-  When the browser is refreshed, the same information is displayed on the page.

## Search Page

-  The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
-  Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
-  When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

## Routing

-  The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
-  The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
