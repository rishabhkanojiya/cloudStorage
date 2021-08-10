export interface LocalResp {
  local: Local[];
}

export interface HomeResp {
  home: Home[];
}
export interface UserResp {
  user: User;
}

export interface Local {
  name: string;
  fromat: string;
  size: number;
}

export interface Home {
  name: string;
  file: number;
  size: number;
}

export interface User {
  name: string;
  files: string;
  folder: string;
  space: string;
  cameraUpload: boolean;
  dataTrans: boolean;
}
