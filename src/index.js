import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './styles/reset.css'
import './styles/main.css'
import App from './App'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('#app')
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', render)
}
