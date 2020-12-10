import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { enableScreens } from 'react-native-screens'



import PlacesNavigator from './navigation/PlacesNavigator'
import placesReducer from './store/placesReducer'

enableScreens()

const rootReducer = combinedReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  )
}




