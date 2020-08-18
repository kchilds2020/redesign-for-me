import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import NavigationBar from 'components/NavigationBar'
import {Helmet} from "react-helmet";
import Spinner from 'react-bootstrap/Spinner'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Redesign For Me</title>
      </Helmet>
      <NavigationBar />
      <div className="content">
        <React.Suspense fallback={<div style ={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Spinner animation="border" variant='primary'/></div>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
