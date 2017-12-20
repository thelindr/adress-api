# Sprint 4, Build a Phone Book API :telephone:

Today's assignment is to build an smaller API – the server side of a phone book. The API can later be used to build webpages like Eniro or Hitta.se. You're API should return name, phone number and email address from a given blob of json. 

@Damien, add something about postman here! 

Your API should have two end-points: 
1. One that returns everything that is in the phone book. 
1. One that returns all info for a specific person. 

If the person you are searching for does not exist you should return a `404 message`. 

:rotating_light: The assignment is only to buld the server side, so let's save the frontend for stretch goals. :rotating_light:

## How to complete this assignment

In the `assets`folder of this assignment you have a `contacts.json` file that contains javascript objects of contacts. 

### Hand in the assignment

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the Technigo one) for review.

### Readings

* [Getting started with Express - Hello World example](http://expressjs.com/en/starter/hello-world.html)
* [Glossary – Talk the backend language](https://expressjs.com/en/resources/glossary.html)
* [Sending the first request with Postman](https://www.getpostman.com/docs/postman/launching_postman/sending_the_first_request)
---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment your should have tried a little Node.js and Express and have more knowlege about how servers and API's work. 

---

### :runner: Stretch Goals

Done with the main task? Try some of the above suggestions or make something up yourself. 

1. Add on a frontend so that you can search for a specifik person. 
1. Add on more info about the persons. 
1. Add error handling so that you can search with capitlized searches, all caps in the aearches and still find the correct person. 

