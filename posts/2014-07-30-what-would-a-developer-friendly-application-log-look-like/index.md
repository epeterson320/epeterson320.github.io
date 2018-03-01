---
title: What Would a Developer-Friendly Application Log Look Like?
---

Originally posted at https://blogs.sap.com/2014/07/30/what-would-a-developer-friendly-application-log-look-like/.

9/30/14 UPDATE: I’ve begun work on a tool like I describe here.  It’s detailed in this post: Show SCN: The better logger I promised

Do you ever have this problem?  You’re in the middle of writing a fantastic ABAP program.  It hums, it purrs, it looks reeeeally good.  The code is so clean uncle Bob would be proud.  You use the best design patterns and your application is modularized well.  Then you realize you need to log a few lines of text to view later in SLG1.  Your heart sinks.  Your robust, clean application is about to become polluted by countless 10-line calls to FM ‘BAL_LOG_CREATE’ and its fellow hoodlums, all because you wanted to save the output of a BAPI you called.  First world problems, AMIRITE?  Anyone?

The obvious solution is to put an object-oriented wrapper around these functions.  This solution is so obvious, in fact, that every department in SAP has written their own verison of it, and my company has added two more.  This is consistent with SAP’s approach to developer tools: Quantity Guaranteed.

So why do we need another OO wrapper?  Well, because I believe in the power of collaboration, for one.  None of the other logs have been designed by the developer community.  Another reason is that logs have come a long way since 1999, when SAP released their function modules for the application log, and developers are used to a more concise syntax.  For instance, if I want to write to the console in javascript, it’s:

console.log(‘The System is Down’);

but in SAP, I have to declare 2 variables, then spend a page of code calling function modules BAL_LOG_CREATE, BAL_LOG_MSG_ADD, and BAL_DB_SAVE.  Part of the reason is that SAP has multiple logs, while a web browser only logs messages in one console.  So when you log anything in SAP, it must go to a specific application log object and sub-object.  Android (java) also writes to multiple logs.  Its logs are called with two arguments, tag and message, like:

Log.e(“SystemMsgs”, “The system is Down”);

If logging in ABAP was going to be just as awesome (and I know it can be), what would it look like?  Please post your ideas and discuss!  Once enough good ideas are gathered, I’d like to start building something on github.  Anyone is welcome to contribute code or just ideas and insights.  Here’s an example what I think would make a good application log API:

log = zcl_app_log=>get( object = ‘ZFICO’ subobject = ‘INTERFACES’ ).

TRY.

    zcl_accounting=>do_some_important_upload( ).

    log->add( ‘The interface has finished’ ).

  CATCH zcx_upload_failed INTO err.

    log->add( err ).

ENDTRY.
