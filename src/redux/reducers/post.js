
const initialPostState = {
    title: '',
    price: '',
    description: '',
    location: '',
    images: [],
    uploaderUsername: '',
}
export function postReducer(state = initialPostState, action) {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'SET_PRICE':
            return {
                ...state,
                price: action.payload
            }
        case 'SET_DESCRIPTION':
            return {
                ...state,
                description: action.payload
            }
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.payload

            }
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.payload

            }
        case 'SET_UPLOADER_USERNAME':
            return {
                ...state,
                uploaderUsername: action.payload

            }
        default:
            return state
    }
}
