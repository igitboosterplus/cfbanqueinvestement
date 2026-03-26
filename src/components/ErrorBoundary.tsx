import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught:", error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center px-6">
            <span className="text-orange-500 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Unexpected Error
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 font-bold mt-3 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false });
                  window.location.reload();
                }}
                className="bg-[#162a4a] hover:bg-[#162a4a]/90 text-white px-8 py-3 font-semibold text-sm tracking-wider transition-all duration-300"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="border border-[#162a4a] text-[#162a4a] px-8 py-3 font-semibold text-sm tracking-wider transition-all duration-300 hover:bg-gray-100"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
