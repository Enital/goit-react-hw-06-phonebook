// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// // import { ADD, REMOVE, FILTER } from "./phoneBookTypes";
// import phonebookActions from "./phoneBookActions";

// const conactsBase = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const localstorageContacts = JSON.parse(localStorage.getItem("contacts"));
// const initialState = localstorageContacts || conactsBase;

// const addContact = (state, { payload }) => [...state, payload];
// const removeContact = (state, { payload }) => state.filter((item) => item.id !== payload);
// const onFilter = (state, { payload }) => payload;

// const items = createReducer(initialState, {
//   [phonebookActions.addItem]: addContact,
//   [phonebookActions.removeItem]: removeContact,
// });
// const filter = createReducer("", {
//   [phonebookActions.filter]: onFilter,
// });

// // const itemReducer = (state = initialState, { type, payload }) => {
// //   switch (type) {
// //     case phonebookActions.addItem.type:
// //       return [...state, payload];

// //     case phonebookActions.removeItem.type:
// //       // const idx = state.indexOf(payload);
// //       return state.filter((item) => item.id !== payload);

// //     default:
// //       return state;
// //   }
// // };

// // const filterReducer = (state = "", { type, payload }) => {
// //   switch (type) {
// //     case phonebookActions.filter.type:
// //       return payload;

// //     default:
// //       return state;
// //   }
// // };

// export default combineReducers({ items, filter });