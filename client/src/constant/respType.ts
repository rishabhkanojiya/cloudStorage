export interface LocalResp {
  local: Local[];
}

export interface HomeResp {
  home: Home[];
}
export interface UserResp {
  user: User;
}

interface Local {
  name: string;
  fromat: string;
  size: number;
}

interface Home {
  name: string;
  file: number;
  size: number;
}

interface User {
  name: string;
  files: string;
  folder: string;
  space: string;
  cameraUpload: boolean;
  dataTrans: boolean;
}
