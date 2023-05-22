import {createBrowserRouter} from "react-router-dom";
import Main from "./components/main/main.component";
import ThanYou from "./components/thank-you/thank-you";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/thx',
      element: <ThanYou/>
    }
  ]
)