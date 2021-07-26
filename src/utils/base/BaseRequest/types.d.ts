export interface BaseRequest<PathParameter, Body, QueryParameter> {
  path?: PathParameter;
  body?: Body;
  query?: QueryParameter;
}
