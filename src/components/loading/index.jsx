import { useState, useEffect } from "react";
import "./index.css";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1; // smooth progress
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  const getMessage = () => {
    if (progress < 30) return "Initializing...";
    if (progress < 60) return "Loading resources...";
    if (progress < 90) return "Almost ready...";
    return "Welcome!";
  };

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* Circle */}
        <div
          className="loading-circle"
          style={{
            background: `conic-gradient(#3b82f6 ${progress}%, #1e293b 0)`,
          }}
        >
          <div className="loading-circle-inner">
            <span className="loading-percentage">{progress}%</span>
          </div>
        </div>

        {/* Message */}
        <h2 className={`loading-message ${progress === 100 ? "welcome" : ""}`}>
          {getMessage()}
        </h2>

        {/* Progress bar */}
        <div className="loading-bar-container">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
