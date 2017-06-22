---
Title: Simple and Recursive Javascript Promises
---

When I learned functional programming, one of the most exciting moments was the realization that recursion can replace all for- and while-loops. Being able to use recursion effectively means that you can generalize `for` and `while` into something simpler _and_ more powerful. Not that you always should, but this post is an example of exactly why such a thing is both powerful and practical.

To start with, here's a recursive factorial function, the "Hello World" of recursion.

    function factorial(n) {
      if (n < 2) return 1;
      return n * factorial(n - 1);
    }

It's not too difficult to understand or write, because multiplication is instantaneous, but what if the multiplication function returned a promise, like this?

    function multiplyAsync(a, b) {
      return Promise.resolve(a * b);
    }

How would you write a factorial function if you had to use the above `multiplyAsync`? Since the multiply function returns a promise, the factorial function will have to return a Promise too. Here's one way to do it:

    function factorialAsync(n) {
      if (n < 2) return Promise.resolve(1);
      return factorialAsync(n - 1)
        .then(n1 => multiplyAsync(n1, n));
    }

This technique works for factorials, but not when order of operations matter, since it works "right-to-left". What if we were trying to apply a list of changes to a database? Given:

    [
      { user: 'Jeff', food: 'Ice Cream' },
      { user: 'Sonic', food: 'Chili Dogs' },
      { user: 'Donatello', food: 'Pizza' },
      { user: 'Jeff', food: 'Cheesecake' }
    ]

You would expect the fourth entry to overwrite the first. If we use the technique above, the code would expand to:

    db.insert('Jeff', 'Cheesecake')
      .then('Donatello', 'Pizza')
      .then('Sonic', 'Chili Dogs')
      .then('Jeff', 'Ice Cream');

**Backwards.**

For example, what if we were trying to insert over 9000 things into a database in groups of 500? The above method would insert the _last_ 500 things first, then the previous 500, and so on. Not very desirable behavior.

So, if your database library gives you a function like

    db.insertRecords(records); // returns a promise

How would you write the following function?

    function insertToDatabaseInBatches(recordsToInsert, batchSize) {
      // A little help?
    }

Here's the best I could come up with:

    function insertToDatabaseInBatches(recordsToInsert, batchSize) {
      if (recordsToInsert.length === 0) return Promise.resolve();

      const batch = recordsToInsert.slice(0, batchSize);
      const remaining = recordsToInsert.slice(batchSize);

      return db.insertRecords(batch)
        .then(() => insertToDatabaseInBatches(remaining, batchSize));
    }

Inserting a bunch of records into a database, in batches, asynchronously, in 7 lines of code. Not bad, recursion.

