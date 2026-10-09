import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-primary text-text flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-gray-300">
            An unexpected error occurred. Please reload the page to try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:opacity-90 transition"
          >
            Reload page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
