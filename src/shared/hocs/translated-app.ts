import { AppComponentType } from "next/app";
import { appWithTranslation } from "../../../i18n";

export default function translatedApp(app: AppComponentType) {
  return appWithTranslation(app);
}
