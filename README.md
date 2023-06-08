# sobSessions

***A place for peiople who love a good cry to look at top 10 lists of songs to cry to in different places.***

This app is designed to allow users to interact with a selection of songs, adding their comments and ratings. Users should be able to view other users comments and ratings. They can sign up and create an account using OAuth.

### Known Issues

We aren't authenticating or deploying at the moment (thanks Bard!) so we have no way to track users or delete specific user posts.

### User Stories

As a user,
- I want to sign in using my GitHub account
- I want to comment on a selection of songs
- I want to add my rating to a selection of songs
- I want to view other users comments

### Installation

Clone the Repo 
```
git clone "https://github.com/fac27/sobSessions"
```
Install dependencies 
```
npm install 
```
seed the data
```
npm run seed
```
Check that you have the correct version of Node 
```
node -v
```
If there are any issues accessing the fly website you can run locally 
```
npm run dev
```
### UX
A wireframe was created using [tldraw](https://www.tldraw.com/r/v2_E2B4vhDM-y3bh5FhSJRXa?viewport=298%2C-90%2C2003%2C1005&page=page%3A9VhkqMKi6LCu7kKg2lkFD)
![Screenshot 2023-06-06 at 09 45 37](https://github.com/fac27/sobSessions/assets/114364165/a83366c7-b996-40c0-8264-93c86821b1fa)

### Database design
A database diagram was created using [db diagram](https://dbdiagram.io/d/647defc2722eb774946b948c)
![Screenshot 2023-06-06 at 10 19 21](https://github.com/fac27/sobSessions/assets/114364165/add629f0-0e90-4aa5-805e-de0675fed97d)



