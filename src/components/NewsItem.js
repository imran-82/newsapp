import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageurl, newsurl, author, date, source } =
			this.props;

		return (
			<div className="my-3">
				<div className="card">
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							position: "absolute",
							right: "0",
						}}
					>
						<span className=" badge rounded-pill bg-success">{source}</span>
					</div>
					<img src={imageurl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">
							{title}

							{/* {title} <span class="badge text-bg-success mx-3">{source}</span> */}
						</h5>
						<p className="card-text">{description}</p>
						<p className="card-text">
							<small className="text-danger">
								By {author} on {new Date(date).toString()}
							</small>
						</p>
						<a
							href={newsurl}
							target="_blank"
							className="btn btn-sm btn-dark"
							rel="noreferrer"
						>
							read more...
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
