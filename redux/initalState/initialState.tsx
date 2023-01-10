export type IInitialState = {
  isOpen: any;
  isTrigger: any;
  collapseMenu: boolean;
  // ...config,
  isLocked: boolean;
  rememberMe: boolean;
  sessionKey: string;
  layout: string;
  direction: string;
  userProfile: any;
  message: {
    Content: string;
    Type: number;
  };
};
