import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	static defaultProps = {
		country: "in",
		pagesize: 9,
		category: "general",
	};

	static propTypes = {
		country: PropTypes.string,
		pagesize: PropTypes.number,
		category: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults: 0,
		};
		document.title = `${this.props.category}- NewsMonkey`;
	}

	async updateNews() {
		this.props.setProgress(10);
		console.log("update news called");
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
		this.props.setProgress(30);
		this.setState({ loading: true });
		let data = await fetch(url);
		this.props.setProgress(50);
		let parsedData = await data.json();
		this.props.setProgress(70);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		this.props.setProgress(100);
	}

	// updateNews(pagenum) {
	// 	this.setState({ DataisLoaded: false });
	// 	fetch(
	// 		`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7920d1420c6642a6a45f2e853fd1ed77&page=${pagenum}&pageSize=${this.props.pagesize}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			this.setState({
	// 				articles: data.articles,
	// 				DataisLoaded: true,
	// 				totalResults: data.totalResults,
	// 			});
	// 		});
	// 	console.log("articles length" + this.state.articles.length);
	// 	console.log("total results" + this.state.totalResults);
	// }

	componentDidMount() {
		//console.log("component did mount called");
		this.updateNews();
	}

	// HandlerNextClick = () => {
	// 	this.updateNews(this.state.page + 1);
	// 	this.setState({ page: this.state.page + 1 });
	// };
	// HandlerPreviousClick = () => {
	// 	this.updateNews(this.state.page - 1);
	// 	this.setState({ page: this.state.page - 1 });
	// };

	fetchMoreData = async () => {
		const url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
			this.state.page + 1
		}&pageSize=${this.props.pagesize}`;

		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,

			page: this.state.page + 1,
		});
	};

	render() {
		return (
			<>
				<h2 className="text-center my-5">
					News Monkey-Top{" "}
					{this.props.category[0].toUpperCase() + this.props.category.slice(1)}{" "}
					Headlines
				</h2>
				{this.state.loading && <Spinner />}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={
						<h4>
							<Spinner />
						</h4>
					}
				>
					<div className="container">
						<div className="row ">
							{this.state.articles.map((item) => {
								return (
									<div key={item.url} className="col-md-4">
										<NewsItem
											title={item.title}
											description={item.description}
											imageurl={item.urlToImage}
											newsurl={item.url}
											author={item.author == null ? "Unknown" : item.author}
											date={item.publishedAt}
											source={item.source.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</InfiniteScroll>
				{/* <div className="container d-flex justify-content-between">
					<button
						type="button"
						className="btn btn-dark"
						onClick={this.HandlerPreviousClick}
						disabled={this.state.page <= 1}
					>
						&larr; Previous
					</button>
					<button
						type="button"
						className="btn btn-dark"
						onClick={this.HandlerNextClick}
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pagesize)
						}
					>
						Next &rarr;
					</button>
				</div> */}
			</>
		);
	}
}

export default News;
