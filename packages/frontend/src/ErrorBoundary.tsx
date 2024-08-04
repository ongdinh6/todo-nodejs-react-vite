import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log the error to an error reporting service
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <>{this.props.fallback}</>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;

function logErrorToMyService(error: Error, componentStack: string | null | undefined) {
  // Implement your logging logic here
  // eslint-ignore @typescript-eslint/no-unused-vars
  console.error("Error logged:", error, componentStack);
}
