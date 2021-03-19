import { Fragment } from "react";
import MainMavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <Fragment>
      <MainMavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
