import { QueryCache, QueryClient } from "react-query";

export const _queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => DefaultQueryErrorHandler(error),
  }),
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      suspense: true,
      onError: (error) => DefaultQueryErrorHandler(error),
    },
  },
});

/*
 백엔드와 협의가 된 ResultMsg 를 노출
 */
export const DefaultQueryErrorHandler = (error) => {
  const errorMsg = error?.ResultMsg ? error.ResultMsg : "네트워크 오류 발생";
  alert(errorMsg);
};
