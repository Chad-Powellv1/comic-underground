// Handle actions related to local storage

export const save = ({ key, storage }) => {
    localStorage.setItem(key, storage);
};

export const get = key => localStorage.getItem(key);

export const remove = key => {
    localStorage.removeItem(key);
};