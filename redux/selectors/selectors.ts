import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// CollapseMenu selector
export const selectCollapseMenu = (state: RootState) =>
  state.baseReducer.collapseMenu;
export const collapseMenuSelector = createSelector(
  selectCollapseMenu,
  (state) => state
);

// LockedScreen selector

export const selectIsLocked = (state: RootState) => state.baseReducer.isLocked;
export const isLockedSelector = createSelector(
  selectIsLocked,
  (state) => state
);

// IsOpen Selector

export const selectIsOpen = (state: RootState) => state.baseReducer.isOpen;
export const isOpenSelector = createSelector(selectIsOpen, (state) => state);

// IsTrigger Selector
export const selectIsTrigger = (state: RootState) =>
  state.baseReducer.isTrigger;
export const isTriggerSelector = createSelector(
  selectIsTrigger,
  (state) => state
);

// Layout Selector
export const selectLayout = (state: RootState) => state.baseReducer.layout;
export const layoutSelector = createSelector(selectLayout, (state) => state);

// Direction Selector
export const selectDirection = (state: RootState) =>
  state.baseReducer.direction;
export const directionSelector = createSelector(
  selectDirection,
  (state) => state
);

// Message Selector
export const selectMessage = (state: RootState) => state.baseReducer.message;
export const messageSelector = createSelector(selectMessage, (state) => state);

// RememberMe Selector
export const selectRememberMe = (state: RootState) =>
  state.baseReducer.rememberMe;
export const remeberMeSelector = createSelector(
  selectRememberMe,
  (state) => state
);

// SessionKey Selector
export const selectSessionKey = (state: RootState) =>
  state.baseReducer.sessionKey;
export const sessionKeySelector = createSelector(
  selectSessionKey,
  (state) => state
);

// UserProfile Selector
export const selectUserProfile = (state: RootState) =>
  state.baseReducer.userProfile;
export const userProfileSelector = createSelector(
  selectUserProfile,
  (state) => state
);

// Candidate Selector
export const selectCandidate = (state: RootState) =>
    state.baseReducer.candidate;
export const candidateSelector = createSelector(
    selectCandidate,
    (state) => state
);
