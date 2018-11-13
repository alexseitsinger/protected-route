# Protected Route

## Description

A react route that redirects to a different path when the user is not authenticated.

## Props

-   component - (Node, Required) - The component to render when the user is authenticated.
-   path - (String, Required) - The string to match for the route.
-   redirectPath - (String, Required) - The path to navigate to when the user is not authenticated.
-   isAuthenticated - (Boolean, Required) - True or false if the user is authenticated.

## Usage

```javascript
import React from "react"
import { Switch } from "react-router-dom"
import ProtectedRoute from "@alexseitsinger/protected-route"

import HomePage from "../pages/home"

const ConnectedProtectedRoute = connect((state) => {
	isAuthenticated: state.auth.isAuthenticated,
})(ProtectedRoute)

export default (
	<Switch>
		<ConnectedProtectedRoute
			path={"/home"}
			component={HomePage}
			redirectPath={"/"}
		/>
	</Switch>
)
```
