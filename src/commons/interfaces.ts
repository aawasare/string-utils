export interface DuplicatesCount {
  [key: string]: number;
}

export interface DuplicatesCountResponse {
  data?: DuplicatesCount;
  errorCode?: string;
}

export interface ErrorDetail {
  code: string;
  message: string;
}

export interface ErrorDetails {
  [name: string]: ErrorDetail;
}
