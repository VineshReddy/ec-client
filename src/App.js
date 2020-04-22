import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './css/App.scss'
import 'normalize.css'

const AuthenticatedApp = React.lazy(() =>
  import('./AuthenticatedApp'),
)
const UnAuthenticatedApp = React.lazy(() => 
  import('./UnAuthenticatedApp')
)


function App() {
  const user = true 
  return (
  <div className="App">
    <BrowserRouter>
      <React.Suspense fallback={"loading..."}>
        { user ? <AuthenticatedApp /> : <UnAuthenticatedApp /> }
      </React.Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
