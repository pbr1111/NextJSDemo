import BaseComponent from "../shared/app/base-component";
import Router from "next/router";

export default class Logout extends BaseComponent {

    componentDidMount() {
        //TODO Helper or use js-cookie
        document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        //TODO Router helper
        Router.replace("/");
    }

   render() {
       return null;
   }
}