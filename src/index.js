import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { createStore } from 'redux'
import reducers from './reducers'
// import * as ACTIONS from './actions'

import { Provider } from 'react-redux'

const store = createStore(reducers)

/**
 * Store의 역할
 * 
 * 1. dispatch(action)
 * 2. getState()
 * 3. subscribe(listener)
 * 4. replaceReducer(nextReducer)
 * 
 * 뷰 레이어 바인딩 The view layer binding
 */
// const unsubscribe = store.subscribe(() => console.log( store.getState() ))

// store.dispatch( ACTIONS.increment() )
// store.dispatch( ACTIONS.increment() )
// store.dispatch( ACTIONS.decrement() )
// store.dispatch( ACTIONS.setColor([200, 200, 200]) )

// unsubscribe()

// store.dispatch( ACTIONS.setColor([111, 111, 111]) )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)