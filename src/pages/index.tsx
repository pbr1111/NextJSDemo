import React from "react";
import fetch from "isomorphic-unfetch";
import { applyLayout } from "../shared/hocs/layout/apply-layout";
import Layout from "../components/layout/layout";
import { pageTitle } from "../shared/hocs/layout/page-title";
import { localizeComponent, LocaleProps } from "../shared/hocs/localization/localize-component";

interface Props extends LocaleProps {
  shows?: Array<any>;
}

@applyLayout(Layout)
@localizeComponent
@pageTitle<Props>(props => props.translate("home"))
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
