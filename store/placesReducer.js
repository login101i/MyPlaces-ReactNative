import { ADD_PLACE } from "./placesAction"
import Place from '../models/place'


const initialState = {
    places: []

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            const newPlace = new Place(
                new Date().toString(),
                action.placeData.title,
                action.placeData.imageUri
            )
            return {
                places:state.places.concat(newPlace)
            }

    }
    return state
}

