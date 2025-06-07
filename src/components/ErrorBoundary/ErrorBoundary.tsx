import { Component, type ErrorInfo, type ReactNode } from "react";

import PaperContent from "../layout/PaperContent";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <PaperContent
          title="Something went wrong."
          description="Please try refreshing the page or contact support if the problem persists."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
