import store from "./index";
import { bindActionCreators } from "redux";
import * as todoActions from "./modules/todo";

const { dispatch } = store;

export const TodoActions = bindActionCreators(todoActions, dispatch);
