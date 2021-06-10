import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import {createServer, deleteServer} from './actions/server_actions'
import {showServers} from './util/server_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser){
        const preloadedState ={
            entities:{
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store
    window.getState = store.getState;
    // window.createServer = createServer;
    // window.deleteServer = deleteServer;
    window.showServers = showServers;

    ReactDOM.render(<Root store={store}/>, root);
});

