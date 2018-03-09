webpackJsonp([69727726944223],{557:function(n,s){n.exports={data:{markdownRemark:{html:'<p>When I learned functional programming, one of the most exciting moments was the realization that recursive functions can replace all for- and while-loops. Being able to use recursion effectively means that you can generalize <code>for</code> and <code>while</code> into something simpler <em>and</em> more powerful. Not that you always should, but this post is an example of exactly why such a thing is both powerful and practical.</p>\n<p>To start with, here\'s a recursive factorial function, the "Hello World" of recursion.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It\'s not too difficult to understand or write, because multiplication is instantaneous, but what if the multiplication function returned a promise, like this?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">multiplyAsync</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>How would you write a factorial function if you had to use the above <code>multiplyAsync</code>? Since the multiply function returns a promise, the factorial function will have to return a Promise too. Here\'s one way to do it:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">factorialAsync</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">factorialAsync</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>n1 <span class="token operator">=></span> <span class="token function">multiplyAsync</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This technique works for factorials, but not when order of operations matter, since it works "right-to-left". What if we were trying to apply a list of changes to a database? Given:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> user<span class="token punctuation">:</span> <span class="token string">\'Jeff\'</span><span class="token punctuation">,</span> food<span class="token punctuation">:</span> <span class="token string">\'Ice Cream\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> user<span class="token punctuation">:</span> <span class="token string">\'Sonic\'</span><span class="token punctuation">,</span> food<span class="token punctuation">:</span> <span class="token string">\'Chili Dogs\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> user<span class="token punctuation">:</span> <span class="token string">\'Donatello\'</span><span class="token punctuation">,</span> food<span class="token punctuation">:</span> <span class="token string">\'Pizza\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> user<span class="token punctuation">:</span> <span class="token string">\'Jeff\'</span><span class="token punctuation">,</span> food<span class="token punctuation">:</span> <span class="token string">\'Cheesecake\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>You would expect the fourth entry to overwrite the first. If we use the technique above, the code would expand to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">\'Jeff\'</span><span class="token punctuation">,</span> <span class="token string">\'Cheesecake\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token string">\'Donatello\'</span><span class="token punctuation">,</span> <span class="token string">\'Pizza\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token string">\'Sonic\'</span><span class="token punctuation">,</span> <span class="token string">\'Chili Dogs\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token string">\'Jeff\'</span><span class="token punctuation">,</span> <span class="token string">\'Ice Cream\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Backwards.</strong></p>\n<p>For example, what if we were trying to insert over 9000 things into a database in groups of 500? The above method would insert the <em>last</em> 500 things first, then the previous 500, and so on. Not very desirable behavior.</p>\n<p>So, if your database library gives you a function like</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>db<span class="token punctuation">.</span><span class="token function">insertRecords</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns a promise</span>\n</code></pre>\n      </div>\n<p>How would you write the following function?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertToDatabaseInBatches</span><span class="token punctuation">(</span>recordsToInsert<span class="token punctuation">,</span> batchSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// A little help?</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Here\'s the best I could come up with:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insertToDatabaseInBatches</span><span class="token punctuation">(</span>recordsToInsert<span class="token punctuation">,</span> batchSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>recordsToInsert<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> batch <span class="token operator">=</span> recordsToInsert<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> batchSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> remaining <span class="token operator">=</span> recordsToInsert<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>batchSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">insertRecords</span><span class="token punctuation">(</span>batch<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">insertToDatabaseInBatches</span><span class="token punctuation">(</span>remaining<span class="token punctuation">,</span> batchSize<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Inserting a bunch of records into a database, in batches, asynchronously, in 7 lines of code. Not bad, recursion.</p>',frontmatter:{title:"Simple and Recursive Javascript Promises"},fields:{date:"March 28, 2017",datetime:"2017-03-28T04:00:00.000Z"}}},pathContext:{slug:"/posts/recursive-javascript-promises-for-the-win"}}}});
//# sourceMappingURL=path---posts-recursive-javascript-promises-for-the-win-f6bb55814670857c8b28.js.map