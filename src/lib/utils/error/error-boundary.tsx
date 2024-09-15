import type { ErrorInfo, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';
import { Component } from 'react';
import { CustomErrorClass } from '@/types/api/error-types.ts';

interface Props {
  children: ReactNode;
  message?: string;
  fallback?: ReactElement;
  resetQuery?: () => void;
  ignoreError?: Set<CustomErrorClass>;
}

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorCase?: null;
};

// const initialState: State = { hasError: false, error: null ,errorCase:''}
const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
  errorCase: null,
};

export class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  //erro상태 초기화
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorCase: null,
  };

  // error 발생시
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error: error };
  }

  //error-boundary 하위 초기화 기능 ( resetQuery 에는 error 를 초기화하는 함수가 들어감)
  resetBoundary = () => {
    const { resetQuery } = this.props;

    resetQuery && resetQuery();
    this.setState(initialState);
  };

  //하위 컴포넌트에서 오류가 발생한 후 호출 - 에러 기록 기능
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  //전역에서 처리할 에러 유무
  isIgnoreError() {
    return this.props.ignoreError?.has(
      this.state.error?.constructor as CustomErrorClass
    );
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback, message } = this.props;

    if (hasError && !this.isIgnoreError()) {
      if (fallback) {
        // return fallback
        return cloneElement(fallback, {
          resetBoundary: this.resetBoundary,
          error,
        });
      }
      return <span>{message ?? 'Load Failed'}</span>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
