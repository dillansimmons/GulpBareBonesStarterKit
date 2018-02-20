# Gulp Bare Bones Template V.1.0 - ReadMe File
Last edited: Feb 20 2018 - Dillan Simmons :robot:


## Purpose

This Gulp Bare Bones Template was created to serve as a basic starting point to develop basic landing pages. Besides providing a base file structure and the basic elements to make a webpage, this template uses GULP to optimize the work-flow. 

Gulp is used in this template to:

* Compile our SASS file into CSS.
* Compress our CSS and JS files to improve load time.
* Gives us a server and the ability for live reload edits at: `http://localhost:8080/`

## Setup and Installation

You will need the following tools installed in order to complete the setup (install notes are for Mac).

- [Node.js](http://nodejs.org) - If you are on a Mac install Node with [Homebrew](http://brew.sh/) (`brew install node`).
- [Gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) - For workflow automation

1. Drag the main folder onto your desktop and rename it.
2. Open terminal and navigate to your project folder. Once you are inside the folder: run the command `npm install` to install required node packages then run `gulp`. This will start live reload and the build processes.
3. Go to `http://localhost:8080/` in your browser, making sure you have [live reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) installed and running. 
4. Edit index.html, the SASS, and JS the files like you would any other starting template. 

## Base File Structure

-Folders are **bolded**

* **CSS**
	+ (main.scss) is the main CSS file you should edit. It will compile down into dist/css/min/final.css
	+ **PARTIALS**
		+ this is all your partial .scss files
* **DIST**
	+ **JS** 
		+ (all.js) all of your JS concatenated. (pushes to final folder)
		+ (final.js) all of your  JS concatenated **and** minified. (pushes to final folder)
	+ **CSS**
		+ (main.css) all of your SASS compiled into CSS.
		+ **MIN**
			+ (final.css) all of you SASS compiled into CSS **and** minified. 
* gulpfile.js - this is the gulp file that will handle all your minification, compiling, and live updates.
* **IMG** - this will contain your minified image files. (minify your images plz)
* **JS** - This contains your Javascript files they will compile down into dist/js/final.js 
	+ Vendor - This contains all of your vendor specific JS. Like JQuery, bootstrap.js, etc...
* node_modules - Contains your node packages **Ignore this file**.
* package.json - **Update this file with project information!**
* ReadMe.md - You are reading this file now! 

## Common Problems
1. Gulp will not run
	* Check to see what the error message is, it could be an issue in your JS or SASS file
	* Check to make sure you have gulp installed on your computer by typing `gulp -v` in terminal. If the terminal produces an error you'll need to install gulp. You can do so by entering `npm install -g gulp` into terminal and then following the normal To Use steps above. If you don't have node or npm installed there are steps to install those [here](https://travismaynard.com/writing/getting-started-with-gulp).
	* If you are getting this error `Error: listen EADDRINUSE :::8080` you likely have gulp running in a different folder already. Ensure Gulp isn't running elsewhere and try again. 

