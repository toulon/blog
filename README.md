blog
====

I don't have time currently to troubleshoot the error you're getting but if you're making changes, 
it could be hard for me to duplicate. Feel free to send me a copy of your code to the email address 
I gave in the Thank you Students! post. Posting there I'll be less likely to forget about this.

If I add the declaration for middleware just after the one for routes:

    var middleware = require('./middleware');

After doing that I added a call to middleware after declaring the app variable

    var app = express()
    middleware(app)

This is all inside the app.js file. Once I did that the application started up without the error on isLoggedIn.


