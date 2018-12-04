import Document from "next/document";

export interface BaseDocumentProps {}

export default class BaseDocument<P = {}> extends Document<
  P & BaseDocumentProps
> {}
