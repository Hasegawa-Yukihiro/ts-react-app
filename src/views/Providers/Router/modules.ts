import { createBrowserHistory, createHashHistory } from "history";

export const history = (() => {
  if (window.location.href.includes(".html")) {
    return createHashHistory();
  }
  return createBrowserHistory();
})();
