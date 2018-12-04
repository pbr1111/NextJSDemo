import React from "react";

export default class BaseComponent<
  P = {},
  S = {},
  SS = {}
> extends React.Component<P, S, SS> {}
