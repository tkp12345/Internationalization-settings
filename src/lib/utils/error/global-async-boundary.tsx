import { PropsWithChildren, Suspense } from 'react';
import { DefaultSuspenseLoading } from './components/default-suspense-loading.tsx';
import { GlobalErrorFallBack } from './components/global-error-fall-back.tsx';
import ErrorBoundary from './error-boundary.tsx';

export const GlobalAsyncBoundary = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<DefaultSuspenseLoading />}>
      <ErrorBoundary fallback={<GlobalErrorFallBack />}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};
