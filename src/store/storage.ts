export enum LocalStorageKeys {
  CART = "CART",
  AUTH = "AUTH",
  USER = "USER",
}

export enum SessionStorageKeys {
  SOME_KEY = "SOME_KEY",
}

export const storage = {
  write: (key: LocalStorageKeys, data: any) => {
    if (typeof data === "string") {
      localStorage[key] = data;
    } else {
      localStorage[key] = JSON.stringify(data);
    }
  },
  delete: (key: LocalStorageKeys) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
  read: (key: LocalStorageKeys, ifDoesntExist?: any) => {
    try {
      return JSON.parse(localStorage[key]);
    } catch (error) {
      if (ifDoesntExist) {
        localStorage[key] = JSON.stringify(ifDoesntExist);
        return ifDoesntExist;
      }
      return null;
    }
  },
  sessionStorage: {
    write: (key: SessionStorageKeys, data: any) => {
      sessionStorage[key] = JSON.stringify(data);
    },
    read: (key: SessionStorageKeys) => {
      return JSON.parse(sessionStorage[key]);
    },
  },
};
