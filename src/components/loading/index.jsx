import { useState, useEffect } from "react";
import "./index.css";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Yuklanmoqda, biroz kuting...");

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 3) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(currentProgress);
        setMessage("Xush kelibsiz!");
        clearInterval(interval);
        
      
        setTimeout(() => {
          onComplete();
        }, 1200);
      } else {
        setProgress(currentProgress);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        
        
        <div 
          className="loading-circle" 
          style={{ background: `conic-gradient(#3b82f6 ${progress}%, #1e293b 0)` }}
        >
          <div className="loading-circle-inner">
            <span className="loading-percentage">{progress}%</span>
          </div>
        </div>

      
        <h2 className={`loading-message ${progress === 100 ? "welcome" : ""}`}>
          {message}
        </h2>

        <div className="loading-bar-container">
          <div 
            className="loading-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
      </div>
    </div>
  );
};

export default Loading;
