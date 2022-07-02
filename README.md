# CatPostingProject - Post Your Cute Cats!


## What is Post Your Cute Cats
"Post Your Cute Cats!" is a social media application where users can post their cute cats. They will get to see other people's cute cats pictures and enjoy the cuteness of cats.


## How to run the app
1. Download the app
2. `cd client` and run `npm install`
3. `cd server` and run `npm install`
4. `cd client` and run `npm start`
5. `cd server` and run `npm start`

## How to post cats pictures
1. Go to the top and click on the browse bar
2. Upload a picture
3. Your uploaded picture will be at the bottom

## Features
- include the feature "Waiting" and "File Uploaded" so that the users could know whether their file is uploaded or in the process of uploading

  ## Future Features
  
  - add a NSFW checking API so that people would not upload NSFW pictures
  - add a ranking mechanism, where people can like the post and the post that have the highest likes will be presented first
 
## Demo Website
- https://obscure-beach-63000.herokuapp.com/
ps: the web take a while to load and it also needs some time for the images to pop up

## Take aways
- I learned to code in full stack (MERN)
- I learned how to connect front-end and back-end togther
- I learned to deployed the web app online
- I learned how to use GFS
  - When I tried to deploy this app to heroku, a lot of bugs happen, and it takes me days to figure out and take care of them, here are the following bugs and how I take care of them:
    1. Cannot push the app to heroku:  
      - Delete you node modules and install them again, most likely the mode modules are corrupted
      - Delete your .git and reinstall them
      - SPECIFY THE ENGINES!! Specifiy the version of the node in you package.json
    2. The deloyed app could not connect to the backend:
      - This is unfortunately one of the things that I still cannot fix, the app works perfectly in localhost but when deployed to heroku it only either connects to backend or frontend. I ended up creating another heroku that links to the backend and have my frontend heroku fetch database from the backend heroku. This is not a good solution, but this is what I have so far.


