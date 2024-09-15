###  api 응답 로딩, 에러 처리
suspense, error-boundary 를 이용하여 응답과 에러를 처리합니다
api 에러는 선언적으로 관리됩니다
api 에러가 발생되면 해당 api 에러 부분에 fallBack ui 를 사용자에게 보여주고 컴포넌트 하위에 있는 모든 쿼리 오류를 reset 할수있는 버튼을 제공해 사용자에게 다시 시도할수있게합니다
```typescript


export const AsyncBoundary = (...) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      fallback={
        errorFallback || (
          <DefaultErrorFallBack
            defaultErrorFallBackWrap={defaultErrorFallBackWrap}
            defaultErrorMsg={defaultErrorMsg}
            height={errorFallbackHeight}
          />
        )
      }
      ignoreError={new Set([...defaultIgnoreError, ...ignoreError])}
      resetQuery={reset}
    >
      <Suspense fallback={loadingFallback || <DefaultSuspenseLoading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
```
```typescript
export const DefaultErrorFallBack = (...) => {
  const defaultErrorFallBack = (
        ...
      <button
        onClick={resetBoundary}
        className="text-lg text-white px-10 py-2 bg-blue-400 border-none rounded cursor-pointer font-bold outline-none shadow-md transition duration-300 ease-in-out hover:bg-blue-500"
      >
        다시 시도
      </button>
  );
```
api 합의된 메세지가 있다면 추가적으로 toast 메세지를 띄웁니다
```typescript
import { useToast } from '@/components/ui/toast/context/toast-context.tsx';

export const _queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => DefaultQueryErrorHandler(error),
  }),
  defaultOptions: {
    queries: {
      ...
      suspense: true,
      onError: (error) => DefaultQueryErrorHandler(error),
    },
  },
});

export const DefaultQueryErrorHandler = () => {
    ...
  show(errorMsg);
};

```

