import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

function ProtectedRoute({
	isAuthenticated,
	component,
	redirectPath,
	path,
	...rest
}) {
	if (isAuthenticated) {
		return <Route path={path} component={component} {...rest} />
	} else {
		return <Redirect to={redirectPath} {...rest} />
	}
}

ProtectedRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
	redirectPath: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired
}

export default ProtectedRoute
