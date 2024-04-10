import { createStore } from "redux";
import rootred from "./Redux/reducers/mains";

const store = createStore(
    rootred
);

export default store;