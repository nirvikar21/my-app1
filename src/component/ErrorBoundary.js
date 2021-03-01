import React from 'react';
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { error:'null' };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary;
