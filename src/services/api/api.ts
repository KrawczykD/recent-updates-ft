import { IVersion, IAuthentication, IServerJSONResponse, IServerVersion } from '../../interfaces/api/api';
import EApi from '../../enums/api/api';

class FetchRequest {
  static fetchRequest = (request: string, options?: RequestInit) => {
    const response = fetch(request, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Somethink went wrong while api fetch');
      })
      .catch((err) => console.log(err));
    return response;
  };
}

class FetchApi {
  static getApiInfo = () => {
    const response: Promise<IVersion> = FetchRequest.fetchRequest(EApi.boprApiEndpoint + 'imagemanager/info/version').then((res: IServerVersion) => {
      const apiVersion: IVersion = {
        message: '',
        success: false,
        data: {
          name: '',
          releasedOn: '',
          branch: '',
          env: '',
          version: ''
        }
      };

      if (res.Success) {
        apiVersion.message = res.Message;
        apiVersion.success = res.Success;
        apiVersion.data.name = res.Data.appName;
        apiVersion.data.releasedOn = res.Data.releasedOn;
        apiVersion.data.branch = res.Data.releaseSignature;
        apiVersion.data.env = res.Data.environment;
        apiVersion.data.version = res.Data.version;
        return apiVersion;
      }
      return apiVersion;
    });

    return response;
  };

  static getAuthentication = (userName: string, password: string): Promise<IAuthentication> => {
    const data = { Username: userName, Password: password };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response: Promise<IAuthentication> = FetchRequest.fetchRequest(EApi.boprApiEndpoint + 'account/token', options).then((res: IServerJSONResponse) => {
      const authentication: IAuthentication = {
        success: false,
        message: '',
        data: {
          token: '',
          expiration: ''
        }
      };
      if (res.Success) {
        authentication.success = res.Success;
        authentication.message = res.Message;
        authentication.data.token = res.Data.token;
        authentication.data.expiration = res.Data.expiration;
        return authentication;
      }
      authentication.success = res.Success;
      authentication.message = res.Message;
      return authentication;
    });

    return response;
  };
}

export default FetchApi;
