# Intro

![](https://s3-us-west-2.amazonaws.com/learn-app/lesson-images/loopLessonImage.PNG)

In this lesson we'll learn about a fundamental concept in all programming languages known as **loops**.

Simply, **a loop is some chunk of code that is executed until a condition is met**.

Loops are important because we often want to do the same operation, in the same way, several times for different entities.

Say you created an app for a business owner that has 10 employees. Part of your app needs to pay each employee their salary. Instead of paying each person one by one, we would write a loop that does that for us!

We will learn about four kinds of loops - each has their own use case which we'll talk about:

*   `for...in`
*   `for...of`
*   `while`
*   `for let i = 0...`

## For...In

To learn basic syntax, let's say we have our good ol' `companies` array again:

```javascript
let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
```

Now say we want to console log all of them. We could do this...

```javascript
console.log(companies[0])
console.log(companies[1])
///...
```

But that's no fun; copy+pasting is a bummer. Instead, we can use `for...in`, like this:

```javascript
for(let companyIndex in companies){
  console.log(companies[companyIndex])
}
```

Try that out and see that it produces the exact same result.

Now let's talk about the syntax here. We've got three **reserved words** - these are words that JS reserves for itself, and have a special meaning in the language.

Above, the words are:

*   `for` - this starts the loop
*   `let` - we know this one already
*   `in` - let's talk about this

We already know the `arrayName[index]` syntax - and that's exactly what's going on here.

What `for...in` does for us is it **gives us each index, in order, of the array we're looping**.  
Where does it give us the index? Inside `companyIndex`!

The `let companyIndex` is basically us saying "_use this variable to hold some value for each **iteration** of the loop_" - that variable is each index, one after the other.

Try this out:

```javascript
for(let companyIndex in companies){
  console.log(companyIndex)
}
```

Write that out, then look at your console, and you'll see all the indexes of the companies array! Since companies has 4 items, you should see 0, 1, 2, 3.

Bam.

## For...Of

Now there are instances where we would like to use an index on each iteration, but in the example above this syntax would be friendlier:

```javascript
for(let company of companies){
  console.log(company)
}
```

Again, you should see all your companies printed out, one line after the other.

What's the difference? Here we don't get an index on each iteration - instead, **for...of gives us the element itself**! - Notice that we're not doing `companies[..]` anymore.  
And where does it give us the element? Again, we're defining a variable using `let company`.  
Talk about convenience.

With this knowledge, write a loop that runs through your companies and prints out "One day I will work at X" - where X is the name of each company. You'll have to use **concatenation** for this ;)  
  
Try it out first before peeking here:

```javascript
for(company of companies){
  console.log("One day I will work at " + company)
}
```

## While

As for `while` loops, the syntax is even simpler:

```javascript
while(someCondition){
  //do something
}
```
  
In this case we're not telling the loop to run over a certain array, but rather **run until a certain condition is met**.

The condition can be anything from testing the length of an array, or using a counter - so long as it _resolves to a boolean_.

And remember, the condition **has** to break somehow - otherwise the loop will run forever. For instance:

```javascript
let timer = 0;

while(timer < 10){
  console.log(timer);
}
```

**↑ Do not run that code! ↑**

That code above is saying "while timer is less than 10, console log the timer."<br>
Sounds good, but the value of <code>timer</code> is 0 - and it never changes! Therefore this loop will run forever (and freeze your browser if you try it)

Instead, to **break the loop**, the code should look like this:

```javascript
let timer = 0;

while(timer < 10){
  console.log(timer);
  timer++;
}
```

Now we've added Line 5, which **increments** our timer by 1 with each iteration.  
So the flow is like this:

*   `timer` starts off at 0
*   Check condition: is `timer` less than 10?
*   Yes, 0 is less than 10
*   Enter the `while` block
*   Console log the `timer`, increment the `timer`
*   `timer` is now 1
*   Check condition: is `timer` less than 10?
*   Yes, 1 is less than 10
*   Enter the `while` block
*   Console log the `timer`, increment the `timer`
*   `timer` is now 2
*   Check condition...etc

Once the condition is _not_ met - in this case, `timer` is not less than 10 - then the `while` ends, and the next line of code (if any) executes.

Remember, the expression inside the `while`'s parentheses `( )` is just a small `if` statement - and the condition must resolve to a boolean!

Given the `companies` array from before, can you figure out what this does?

```javascript
while(companies.length > 0){
    companies.splice(0, 1)
}
```

Make sure you understand the above. Ask a friend if you don't get it. Then ask the instructor if you're still stumped. But make sure you get it!
Answer below:

The condition says: so long as the `length` of `companies` is greater than 0, keep **splicing** - remember that `splice` removes item(s) from an array. In the above, we're splicing the first, the **0th**, index each time.  
Therefore, eventually, we will have spliced all of the elements, and `company`'s length will be 0, and so the condition `companies.length > 0` will resolve to `false`, which breaks the loop!

## for let i = 0;...

This last way of doing for loops is similar to `for... in` - that is, it works with indexes; but we get more granular control of the loop. Check out this loop, which just prints the numbers 0, 1, 2...9:

```javascript
for(let i = 0; i < 10; i++){
  console.log(i)
}
```

Here we're also not bound to any array, but we do have to give the loop four things:

1.  A placeholder variable - in this case it's just `let i`
2.  A **starting index** - that's us setting `i` to 0
3.  An **end condition** - when does the loop end? In the above, it's when `i < 10` resolves to `false`
4.  An **iteration command** - here we've done `i++` - that means that each iteration should increase `i` by 1

*   We can of course do something else, like `i+=10`

We say that this loop gives us more granular control, because we decide where it starts, where it ends, and by how much it increases (or decreases!) each time.

So if we want to print all the even numbers between 80 and 100, we could do this:

```javascript
for(let i = 80; i < 100; i+=2){
  console.log(i)
}
```

Try it out for yourself and see!



