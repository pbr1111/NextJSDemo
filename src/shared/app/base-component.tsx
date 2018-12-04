import React from "react";

export interface BaseComponentProps {}

export default class BaseComponent<
  P = {},
  S = {},
  SS = {}
> extends React.Component<P, S, SS> {}
