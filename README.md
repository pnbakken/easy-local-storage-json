# About this package

This is a set of functions I end up recreating every time I use localStorage for anything, so I've published them in this package. Mostly for my own use, but if anyone else finds them handy that's just great.

## How does it work

``` npm install easy-local-storage-json ```

Use **saveToStorage(key: string, object)** for saving. If saving more than one object, call **saveToStorage()** for each object. Use **getFromStorage(key: string)** to retrieve an array containing all passed items. Use **deleteItemFromStorage(storageKey: string, objectKey: any, tokenToMatch: string(defaults to "id"))** to remove one item at a time. If you need to delete several objects, **use deleteItemFromStorage()** once for each object. To delete an entire collection use **deleteKeyFromStorage(key: string).**
To check if an item is in storage use **itemInStorage(storageKey: string, objectKey: any, tokenToMatch: string(defaults to "id"))**
To clear storage completely use **clearStorage()**.

### V.0.1.4

I tried adapting the storage to accept any number of objects or arrays but ended up overcomplicating things and was unable to make the code pass all tests, so we're back to storing one object at a time.

## Disclaimer



Apologies for the poor documentation. I'm currently busy with lessons and as mentioned before this is mainly intended for my own use. If you use this package and would like me to document it more thoroughly I'll try to prioritise it, otherwise that's a task for when I have more free time to do so.

