# _{Gulp_Front_End_Project_8}_

#### _{Using Gulp to put a front end project into production ready status.}, {2/8/2018}_

#### By _**{Chris Underwood}**_

## Description

_{
1) As a developer, I should be able to run the npm install command to install all of the dependencies for the build process.

2) As a developer, I should be able to run the gulp scripts command at the command line to concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder.

3) As a developer, I should be able to run the gulp styles command at the command line to compile the project’s SCSS files into CSS, then concatenate and minify into an all.min.css file that is then copied to the dist/styles folder.
4) As a developer, when I run the gulp scripts or gulp styles commands at the command line, source maps are generated for the JavaScript and CSS files respectively.

5) As a developer, I should be able to run the gulp images command at the command line to optimize the size of the project’s JPEG and PNG files, and then copy those optimized images to the dist/content folder.

6) As a developer, I should be able to run the gulp clean command at the command line to delete all of the files and folders in the dist folder.

7) As a developer, I should be able to run the gulp build command at the command line to run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.

8) As a developer, I should be able to run the gulp command at the command line to run the build task and serve my project using a local web server.

9) As a developer, when I run the default gulp command, it should continuously watch for changes to any .scss file in my project. When there is a change to one of the .scss files, the gulp styles command is run and the files are compiled, concatenated, and minified to the dist folder. My project should then reload in the browser, displaying the changes.

}_

## Setup/Installation Requirements

* _Download files to your local computer_
* _Go to that location via your command line tool_
* _run npm install_
* _the following commands are available_
* _gulp - to build the production files, remove production files, start the server, & watch for sass changes_
* _gulp build - the build the production files include running moveIcons, moveIndex, images, styles, scripts, and browser-sync. Remove production files_
* _gulp clean - to remove production files_
* _gulp moveIcons - to move the icons folder to production_
* _gulp moveIndex - to move index.html to production_
* _gulp images - to move the images folder and optimize the image file size_
* _gulp styles - to covert sass files to css, concat files, minify them, and create map files_
* _gulp scripts - to concat files, minify them, and create map files_

## Known Bugs

_{None that I am aware of.}_

## Support and contact details

_{cunderwoodmn [at] gmail {dot} com}_

## Technologies Used

_{Gulp, browser_sync, gulp-concat, gulp-sourcemaps, gulp-sass, gulp-uglify, gulp-rename, gulp-clean-css, del, gulp-image, run-sequence, gulp-connect,  Node.js}_

### License

Copyright (c) <2018> <Chris Underwood>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2018 **_{Chris Underwood}_**
