import React from "react";
import fetch from "isomorphic-unfetch";

interface Props {
  shows?: Array<any>;
}

export default class Index extends React.Component<Props> {
  static async getInitialProps() {
    const res = await fetch(`https://api.tvmaze.com/shows`);
    const shows = await res.json();

    console.log(`Fetched shows`);

    return { shows };
  }

  render() {
    return (
      <div>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows != null &&
            this.props.shows.map(show => <li key={show.id}>{show.name}</li>)}
        </ul>
      </div>
    );
  }
}
