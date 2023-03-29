import { createReducer } from "@reduxjs/toolkit";
import {
  setLayout,
  clearSessionKey,
  collapseMenu,
  collapseToggle,
  navCollapseLeave,
  navContentLeave,
  setMessage,
  setSessionKey,
  updateProfile,
  lockScreen,
  setDirection,
  setCandidate,
} from "../actions/actions";
import { IInitialState } from "../initalState/initialState";

const initialState: IInitialState = {
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
  collapseMenu: false,
  isLocked: false, // Lock all screens for protection against abuse
  // ...config,
  rememberMe: false, //
  sessionKey: "",
  userProfile: null,
  layout: "page",
  direction: "ltr",
  message: {
    Content: "",
    Type: 0,
  }, // 0 is confirmation 1 is error 2 is warning
  candidate: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSessionKey, (state, action) => {
      state.sessionKey = action.payload;
    })
    .addCase(clearSessionKey, (state) => {
      (state.sessionKey = ""), (state.rememberMe = false);
    })
    .addCase(setMessage, (state, action) => {
      state.message = action.payload;
    })
    .addCase(updateProfile, (state, action) => {
      state.userProfile = action.payload;
    })
    .addCase(collapseMenu, (state, action) => {
      state.collapseMenu = !action.payload;
    })
    .addCase(collapseToggle, (state, action) => {
      let trigger = [];
      let open = [];
      if (action.payload.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;
        const triggerIndex = trigger.indexOf(action.payload.menu.id);
        if (triggerIndex > -1) {
          open = open.filter((item) => item !== action.payload.menu.id);
          trigger = trigger.filter((item) => item !== action.payload.menu.id);
        }

        if (triggerIndex === -1) {
          open = [...open, action.payload.menu.id];
          trigger = [...trigger, action.payload.menu.id];
        }
      } else {
        open = state.isOpen;
        const triggerIndex = state.isTrigger.indexOf(action.payload.menu.id);
        trigger = triggerIndex === -1 ? [action.payload.menu.id] : [];
        open = triggerIndex === -1 ? [action.payload.menu.id] : [];
      }
      state.isOpen = open;
      state.isTrigger = trigger;
    })
    .addCase(navContentLeave, (state, action) => {
      let trigger = [];
      let open = [];
      state.isOpen = open;
      state.isTrigger = trigger;
    })
    .addCase(navCollapseLeave, (state, action) => {
      let trigger = [];
      let open = [];
      if (action.payload.menu.type === "sub") {
        open = state.isOpen;
        trigger = state.isTrigger;
        const triggerIndex = trigger.indexOf(action.payload.menu.id);
        if (triggerIndex > -1) {
          open = open.filter((item) => item !== action.payload.menu.id);
          trigger = trigger.filter((item) => item !== action.payload.menu.id);
        }
        state.isOpen = open;
        state.isTrigger = trigger;
      }
    })
    .addCase(setLayout, (state, action) => {
      state.layout = action.payload;
    })
    .addCase(lockScreen, (state, action) => {
      state.isLocked = action.payload && !action.payload;
    })
    .addCase(setDirection, (state, action) => {
      state.direction = action.payload;
    })
    .addCase(setCandidate, (state, action) => {
      state.candidate = action.payload;
    });
});
