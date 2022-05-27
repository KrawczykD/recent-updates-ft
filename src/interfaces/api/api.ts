export interface IServerJSONResponse {
  Success: boolean;
  Message: string;
  Data: {
    token: string;
    expiration: string;
  };
}

export interface IAuthentication {
  success: boolean;
  message: string;
  data: {
    token: string;
    expiration: string;
  };
}

export interface IServerVersion {
  Message: string;
  Success: boolean;
  Data: {
    appName: string;
    version: string;
    releasedOn: string;
    releaseSignature: string;
    environment: string;
  };
}

export interface IVersion {
  message: string;
  success: boolean;
  data: {
    name: string;
    releasedOn: string;
    branch: string;
    env: string;
    version: string;
  };
}
