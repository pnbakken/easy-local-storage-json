const storage = window.localStorage;

export function getFromStorage(key:string): [Object] | null {
    if (keyInStorage(key)) {
        return JSON.parse(storage.getItem(key)!).filter(Boolean);
    } else return null;
}

export function saveToStorage(key: string, data: Object): void {
    if (keyInStorage(key)) {
        const storedData = getFromStorage(key);
        storedData!.push(data);
        storage.setItem(key, JSON.stringify(storedData));
    } else {
        storage.setItem(key, JSON.stringify([data]));
    }
}

export function deleteItemFromStorage(key:string, identifier: any, token:string = "id"): void  {
    if (keyInStorage(key)) {
        const storedData = getFromStorage(key);
        const newData = storedData!.filter(item => item[token] !== identifier);
        storage.setItem(key, JSON.stringify(newData));
    }

    
}

export function deleteKeyFromStorage(key: string): void {
    if (storage.getItem(key) !== null) {
        storage.removeItem(key);
    }
}

export function clearStorage(): void {
    storage.clear();
}

export function itemInStorage(key: string, itemKey: any, token: string = "id"):boolean {
    
    let itemIsInStorage: boolean = false;
    const data = getFromStorage(key);
    if (data) {
        
        data.forEach(i => {
            if (i[token]) {
                if (i[token] === itemKey) {
                    itemIsInStorage = true;
                }
            }
        });
    } 
    return itemIsInStorage;
}

export function keyInStorage(key: string): boolean {
    if (storage.getItem(key)) {
        return true;
    } else return false;
}

