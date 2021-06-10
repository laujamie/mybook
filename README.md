# MyBook

This is a address book application built using React, TypeScript, and Chakra UI.

## Running Locally

1. Clone this GitHub repo: `git clone https://github.com/laujamie/mybook`
2. Run `yarn install`
3. Run `yarn start` to run the application on a local dev server
4. Run `yarn test` to run tests

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Flaujamie%2Fmybook.git)


## Summary

The overall approach I took when building out this project was to use the
[Random User API](https://randomuser.me) to retrieve the address book information.
When the user first accesses the page, the data is fetched using Axios, where it
is cached in memory by react-query. Thus, if the user navigates between different
pages on the web app (ie. switching between home and details), the data would be
cached and would not have to be re-fetched.

The features that I have implemented is a table to show some basic information of
all the users and a details page to display some basic data about the specified
user (e.g. name, address, phone number, email). Users are able to select people of
interest in the address book and get more detailed information about that user on
the details page.

Given more time, I would have implemented some form of pagination or windowing (e.g.
using react-window), to make the performance of the address book more robust. This would
have taken about an hour to implement. In addition, I would have liked to add a Google Maps widget
to the details page, to make it more convenient for users to get directions to the person of interest's place.
This would have taken two hours to implement. One last thing that I would have liked to implement
would be to make the website more responsive for mobile users. This would take about half an hour to implement.

To make this project more robust, I would have added some form of user authentication
and added a database to store the addresses for each user. This helps to ensure that users' data is not
potentially leaked to other users, as well as allowing for a more personalized experience for using this app. In addition, this would allow users
to add in their own friends into the address book, which would be significantly more useful in the real world.