import "./App.css";

import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	state = {
		progress: 0,
	};

	//apikey = process.env.REACT_APP_NEWS_API;
	apikey = "6b4ef04cf7a34ec9aa82102489c45517";

	setProgress = (progress) => {
		this.setState({ progress: progress });
	};

	render() {
		return (
			<div>
				<Navbar />
				<LoadingBar color="#f11946" height={3} progress={this.state.progress} />
				<Routes>
					<Route
						path="/"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="/"
								pagesize={5}
								country="in"
								category="general"
							/>
						}
					/>
					<Route
						path="home"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="home"
								pagesize={5}
								country="in"
								category="general"
							/>
						}
					/>
					<Route
						path="business"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="business"
								pagesize={5}
								country="in"
								category="business"
							/>
						}
					/>
					<Route
						path="entertainment"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="entertainment"
								pagesize={5}
								country="in"
								category="entertainment"
							/>
						}
					/>
					<Route
						path="general"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="general"
								pagesize={5}
								country="in"
								category="general"
							/>
						}
					/>
					<Route
						path="health"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="health"
								pagesize={5}
								country="in"
								category="health"
							/>
						}
					/>
					<Route
						path="science"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="science"
								pagesize={5}
								country="in"
								category="science"
							/>
						}
					/>
					<Route
						path="sports"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="sports"
								pagesize={5}
								country="in"
								category="sports"
							/>
						}
					/>
					<Route
						path="technology"
						element={
							<News
								setProgress={this.setProgress}
								apikey={this.apikey}
								key="technology"
								pagesize={5}
								country="in"
								category="technology"
							/>
						}
					/>
				</Routes>
			</div>
		);
	}
}
