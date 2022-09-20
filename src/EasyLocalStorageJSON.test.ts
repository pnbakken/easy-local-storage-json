import { clearStorage, deleteItemFromStorage, deleteKeyFromStorage, getFromStorage, itemInStorage, keyInStorage, saveToStorage } from "./EasyLocalStorageJSON";

describe("Adding to storage works as expected", () => {
    it("Takes an object and return the same object wrapped in an array", () => {
        const testObject = {"name": "test"};
        saveToStorage("test", testObject);
        const retrieved = getFromStorage("test");
        expect(retrieved).toEqual([testObject]);
        clearStorage();
    });
    
    it("Takes a second object and adds to the array", () => {
        const testObject = {"name": "test"};
        saveToStorage("test", testObject);
        const testObject2 = {"name": "test2"};
        saveToStorage("test", testObject2);
        expect(getFromStorage("test")).toEqual([testObject, testObject2]);
        
    });
    
});

describe("Checking if key exists works", () => {
    it("Returns true if key exists", () => {
        const testObject = {"name": "test"};
        saveToStorage("test", testObject);
        expect(keyInStorage("test")).toBe(true);
        clearStorage();
    });
    it("Returns false if key does not exist", () => {
        expect(keyInStorage("none")).toBe(false);
    });
     
});

describe("Checking if single item is stored with key works", () => {
    it("Returns true if item with specified token is found (defaults to id)", () => {
        const testObject = {"name": "test"};
        saveToStorage("test", testObject);
        expect(itemInStorage("test", testObject.name, "name")).toBe(true);
        clearStorage();
    });
});

describe("Removing single item from array works", () => {
    it("Takes a specified token (defaults to id) and removes the corresponding item", () => {
        const testObject = {"name": "test", "id": 1};
        saveToStorage("test", testObject);
        const testObject2 = {"name": "test2", "id": 2};
        saveToStorage("test", testObject2);
        deleteItemFromStorage("test", testObject.id);
        expect(getFromStorage("test")).toEqual([testObject2]);
        clearStorage();
    });
});

describe("Removing key from storage works", () => {
    it("takes a key and removes array stored with that key", () => {
        const testObject = {"property": 0};
        saveToStorage("test", testObject);
        deleteKeyFromStorage("test");
        expect(getFromStorage("test")).toBe(null);
        clearStorage();
    });
});

describe("Clearing everything from storage works", () => {
    it("clears storage", () => {
        const testObject = {"property": 0};
        saveToStorage("test", testObject);
        clearStorage();
        expect(getFromStorage("test")).toBe(null);
    });
});

describe("Save funtion works with an array of items", () => {
    it("Takes a single item and wraps it in an array", () => {
        const testObject = {"name": "something"};
        saveToStorage("test", testObject);
        expect(getFromStorage("test")).toEqual([testObject]);
        clearStorage();
    });

    it("Then takes an array of items which it flattens and inserts the items one by one to the existing JSON array", () => {
        const testObject = {"name": "something"};
        saveToStorage("test", testObject);
        const testObject2 = {"name": "whatever"};
        const testObject3 = {"name": "something else"};
        saveToStorage("test", [testObject2, testObject3]);
        expect(getFromStorage("test")).toEqual([testObject, testObject2, testObject3]);
        clearStorage();
    })

    it("Deals with storing separate arrays by being passed arrays of arrays", () => {
        const testObject = {"name": "this"};
        saveToStorage("test", testObject);
        const testObject2 = {"name": "whatever"};
        const testObject3 = {"name": "something else"};
        saveToStorage("test", [testObject2, testObject3]);
        const testObject4 = {"name": "whatever"};
        const testObject5 = {"name": "something else"};
        const testArray = [testObject4, testObject5];
        saveToStorage("test", [testArray]);
        const testObject6 = {"name": "sick of these"};
        saveToStorage("test", testObject6);
        expect(getFromStorage("test")).toEqual([testObject, testObject2, testObject3, [testObject4, testObject5], testObject6,]);
        clearStorage();
    })
})