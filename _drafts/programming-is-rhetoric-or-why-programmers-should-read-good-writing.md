STILL TO SAY:
Screaming Arch
How to read a book.
Knuth, Literate programming

# Programming is Rhetoric, or, Why Programmers Should Read Good Writing

One of my favorite things about programming, aside from having an excuse to drink coffee past noon, is how much creative work it allows. Designers may have a reputation as the more creative role, but good creative thinking rightly applied to a codebase can make it much easier to understand and work with. I'm not talking about the creativity that makes cute animations or funny commercials, but the creativity required to turn complexity into simplicity. And by "easy to work with," I don't just mean that a program should have consistent indentation and sensible line breaks, important as those are, but that it should be easy for another developer to look at and understand the point of it all.

Every program must at least be logical. It may be more than that, but it certainly can't be less. Programming is the discipline of describing an approximation of a part of the world with no ambiguity. Code must compile, and compilers don't do ambiguity. I've truncated a number of conversations with a "You know what I mean, right?" while still getting my point across. None of those conversations were with a compiler. So programs at the very least have to make sense logically.

Not just that, though - a program must be rhetorical. If you read a lot of good code, and especially if you read a lot of bad code, you'll realize that logical consistency (defined as successfully compiling) is not a sufficient condition for code quality. I think the missing piece is rhetoric. Rhetoric comes immediately after logic in classical education, and I think the order applies in programming too.

What I mean when I say that programming is _rhetorical_ is that it makes a subjective statement about what's important, and it communicates in ways other people can understand. Good source code will emphasize what's important, and present it in the right order. There's no "right way" to do rhetoric, but there are certainly better and worse ways. If someone asks you to describe what your program does in English, all the key words in that description should be visible in the first 50 lines of your main file. If you describe your program's function as, "Crawl our website, detect broken links, and save the results to a HTML file," then somewhere in the main function of your program, you should have a line like `var detectedSiteStructure = crawlWebsite();` followed immediately by `var linkTestResults = detectBrokenLinks(detectedSiteStructure);`. If the first 50 lines of your main file are spent defining a functions that escape URL characters and crop the logo in the report to look nice in iOS Safari, you're probably not the Cicero of JavaScript. 

This isn't a new idea.

What I'm really trying to say is that the best programming happens when you use both your left and right brain together. And also that I would pay handsomely for a compiler that understands the phrase, "You get the idea, right?"
