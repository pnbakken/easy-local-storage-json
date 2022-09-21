# About this package

This is a set of functions I end up recreating every time I use localStorage for anything, so I've published them in this package. Mostly for my own use, but if anyone else finds them handy that's just great.

## How does it work

Latest version can accept any number of objects or variables. Save more than one item at a time by wrapping items in an array before passing them to saveToStorage function. If you need to store one or more arrays separately, wrap these arrays inside a single array before passing to saveToStorage(), as the extraction only goes one level deep.

### V.0.1.3

I tried adapting the storage to accept any number of objects or arrays but ended up overcomplicating things and was unable to make the code pass all tests, so we're back to storing one object at a time.

## Disclaimer

Apologies for the poor documentation. I'm currently busy with lessons and as mentioned before this is mainly intended for my own use. If you use this package and would like me to document it more thoroughly I'll try to prioritise it, otherwise that's a task for when I have more free time to do so.

