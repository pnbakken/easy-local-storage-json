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