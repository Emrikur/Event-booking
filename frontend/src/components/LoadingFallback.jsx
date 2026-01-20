import "../styles/LoadingFallback.css";

function LoadingFallback({ message = "Loading..." }) {
  return (
    <div className="loading-fallback">
      <div className="loading-fallback__spinner"></div>
      <p className="loading-fallback__text">{message}</p>
    </div>
  );
}

export default LoadingFallback;
