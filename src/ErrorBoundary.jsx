import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // typically you would want this do somehting like TrackHS or NewRelic
    console.error("ErrorBoundary component caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorCompnent;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
