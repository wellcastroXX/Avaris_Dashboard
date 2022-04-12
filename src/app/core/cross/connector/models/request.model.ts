
export interface IRequest {
  endpoint: string;
  body?: any;
  queryString?: any;
  showLoading?: any;
  showError?: any;
  fullResponse?: boolean;
}