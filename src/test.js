import React from "react"
import { MemoryRouter } from "react-router"
import { Switch, Route } from "react-router-dom"

import ProtectedRoute from "./index"

function setup({ isAuthenticated, path }) {
	return mount(
		<MemoryRouter initialEntries={[path]} initialIndex={0}>
			<Switch>
				<Route path={"/not-found"} exact component={NotFoundPage} />
				<ProtectedRoute
					path={path}
					component={MainPage}
					redirectPath={"/not-found"}
					isAuthenticated={isAuthenticated}
				/>
			</Switch>
		</MemoryRouter>
	)
}

function NotFoundPage() {
	return <div className={"notFoundPage"}>Not Found Page</div>
}

function MainPage() {
	return <div className={"mainPage"}>Main Page</div>
}

describe("<ProtectedRoute/>", () => {
	it("renders component when authenticated", () => {
		const wrapper = setup({
			path: "/",
			isAuthenticated: true
		})
		expect(wrapper.find(".mainPage").text()).toBe("Main Page")
	})
	it("redirect to redirectPath when anonymous", () => {
		const wrapper = setup({
			path: "/",
			isAuthenticated: false
		})
		expect(wrapper.find(".notFoundPage").text()).toBe("Not Found Page")
	})
})
