import { createAction } from "@reduxjs/toolkit";
import { IMenuAction } from "../../Models/Action";
import * as actionTypes from "../types";

export const collapseMenu = createAction<boolean>(actionTypes.COLLAPSE_MENU);
export const collapseToggle = createAction<IMenuAction | undefined>(
  actionTypes.COLLAPSE_TOGGLE
);
export const navContentLeave = createAction(actionTypes.NAV_CONTENT_LEAVE);
export const navCollapseLeave = createAction<IMenuAction | undefined>(
  actionTypes.NAV_COLLAPSE_LEAVE
);
export const setLayout = createAction<string | undefined>(
  actionTypes.SET_LAYOUT
);
export const setDirection = createAction<string | undefined>(
  actionTypes.SET_DIRECTION
);
export const setSessionKey = createAction<string | undefined>(
  actionTypes.SET_SESSION_KEY
);
export const clearSessionKey = createAction(actionTypes.CLEAR_SESSION_KEY);
export const setMessage = createAction<any | undefined>(
  actionTypes.SET_MESSAGE
);
export const updateProfile = createAction<any | undefined>(
  actionTypes.UPDATE_PROFILE
);
export const lockScreen = createAction<boolean | undefined>(
  actionTypes.LOCK_SCREEN
);

export const setCandidate = createAction<any | undefined>(
    actionTypes.SELECT_CANDIDATE
);
