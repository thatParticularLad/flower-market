//POST ACTIONS
export const SET_TITLE = 'SET_TITLE';
export const SET_PRICE = 'SET_PRICE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_IMAGES = 'SET_IMAGES';
export const SET_UPLOADER_USERNAME = 'SET_IMAGES';

//USER ACTIONS
export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_PASSWORD = 'SET_PASSOWRD';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_USER = 'SET_USER';

//POST ACTION CREATORS
export function setTitle(title) {
    return {
        type: 'SET_TITLE', title
    }
}
export function setPrice(price) {
    return {
        type: 'SET_TITLE', price
    }
}
export function setDescription(description) {
    return {
        type: 'SET_DESCRIPTION', description
    }
}
export function setLocation(location) {
    return {
        type: 'SET_LOCATION', location
    }
}
export function setImages(images) {
    return {
        type: 'SET_IMAGES', images
    }
}
export function setUploaderUsername(username) {
    return {
        type: 'SET_UPLOADER_USERNAME', username
    }
}

//USER ACTION CREATORS
export function setFirstname(firstname) {
    return {
        type: 'SET_FIRSTNAME', firstname
    }
}
export function setPassword(password) {
    return {
        type: 'SET_PASSWORD', password
    }
}
export function setEmail(email) {
    return {
        type: 'SET_EMAIL', email
    }
}
export function setUser(user) {
    return {
        type: 'SET_USER', user
    }
}