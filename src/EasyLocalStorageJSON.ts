const storage = window.localStorage;

export function getFromStorage(key:string): JSON | null {
    if (keyInStorage(key)) {
        return JSON.parse(storage.getItem(key));
    } else return null;
}

export function saveToStorage(key: string, data: any): void {
    if (keyInStorage(key)) {
        const storedData = getFromStorage(key);
        if (Array.isArray(data)){
            data.forEach(d => storedData!.push(d));
        }else storedData!.push(data);
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
            console.log(i[token] + " === " + itemKey)
            if (i[token] === itemKey) {
                itemIsInStorage = true;
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

