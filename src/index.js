import React from 'react'
import ReactDOM from'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'

const store =  configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})

const jsx =(<Provider store={store}>
    <App/>
</Provider>)

ReactDOM.render(jsx,document.getElementById('root'))