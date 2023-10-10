
# Intro
In this readme I will be answering the below questions

 1. Project Structure
 2. Possible Optimizations
 3. Which things could be done better?
 4. Used Technologies
 5. Problems I Faced

## Project Structure
I have worked on each task in a separate branch as shown in the below diagram. I have created a pull request for each feature but I haven't merged any of them so you can track the commits easily by pull request. The lastest version is on branch (feature/SuccessPage)
![Branches](https://ibb.co/ysmM6vr)

The project has 4 components each one has been added using the `ng g c {component_name}` .
I have created a folder for the state and a file for each of (actions, reducers, selectors and effects).

I didn't know if the http url should be exposed in the git repo or not so I added it to the git ignore list.
In the src folder you can create a "environments" folder. In this folder add 2 files.
File 1: "environment.secret.ts" and add the below code in it

    export const environment = {
	    production: false,
	    apiUrl: "Enter URL sent in the email"
    }

File 2: "environment.node.js" and add the below code in it

    const env = {
	    production: false,
		apiUrl: "Enter URL sent in the email"
    }
    module.exports = env;

I will explain later on in the issues I have faced section why I have 2 environment files.


## Possible Optimizations

 1. The form components could be loaded from the backend, so if we have any changes we don't have to republish the application. We can just push the changes and the app would adapt dynamically. This also depends on the use case but has been on top of my head.
 2. It would be great if I had created interfaces for the objects that I have added in the state and were used around like (Personal Info, Payment Info....)

## Which things could be done better?
Styling.
I didn't add any CSS actually since it wasn't so relevant to the challenge idea. I just added the Wunder Mobility primary color for the buttons and the favicon to the app.  

The object sent in the request should have its own interface so it could be mapped automatically. The same would be done for the objects retrieved from the store.


## Used Technologies
Angular CLI v16.2.5
Node v19.9.0
NPM v9.6.3
RxJs v7.8.0
NgRx v16.3.0
VSCode v1.82.2

## Problems I Faced
  

 - Faced an issue with populating the form from the store after going back from "addressInfo" to "personalInfo" for example. 
 Figured out I didn't type cast the store in the constructor which had me going in circles trying to figure out the issue.
 - I didn't add the "for" property to the labels which was generating warnings in the console, so I want by each label and added the "for" property to be associated to the input field it is related to
 - The CORS issue, this consumed a lot of time from me. I have search and found that I can bypass this part using proxy settings in the angular.json file. My issue was with the proxy file format itself, I wasn't able to understand the structure i.e. what was this file trying to mask the target url or the source url. This got me confused for a bit until I was able to figure it out. 
 After I had figured out this I was faced with another issue which was I can't add a variable in the angular.json file so the apiUrl will be exposed there if I had put it directly even the proxy.conf.json file is json too so the issue was still there. So I thought about making a small node.js file where I can get the apiUrl from the environment file and replace it in the proxy.conf.json file so the url can be used in runtime. 
 The issue I faced here that the node.js file (set-proxy.js) wasn't able to read the apiUrl from the .ts file so I had to create another environment file (environment.node.js) which would be compatible with node.js. Then I changed the "start" script in package.json file to be "node set-proxy && ng serve", so it would first get the apiUrl, place it and run the app.
 
 ## Final Considerations
 When running the app using command `npm start` instead of `ng serve` since I had to change the package.json "start" script. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
If there is anything that is not clear please do not hesitate to contact me on sherifkayed94@gmail.com
 
