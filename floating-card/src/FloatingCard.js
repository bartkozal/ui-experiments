import React, { useRef, useCallback } from "react";
import "./styles.css";

const FloatingCard = () => {
  const graphic = useRef(null);

  const handleMouseMove = useCallback(
    e => {
      const boundingClientRect = graphic.current.getBoundingClientRect();
      const x = e.clientX - boundingClientRect.left;
      const y = e.clientY - boundingClientRect.top;
      const xc = boundingClientRect.width / 2;
      const yc = boundingClientRect.height / 2;
      const dx = x - xc;
      const dy = y - yc;
      const factor = 10;

      graphic.current.style.transform = `rotateY(${dx /
        -factor}deg) rotateX(${dy / factor}deg) scale(1.2)`;
    },
    [graphic]
  );

  const handleMouseOut = useCallback(() => {
    graphic.current.style.transform = "";
  }, [graphic]);

  return (
    <div
      ref={graphic}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      className="floating-card"
    >
      Floating Card
    </div>
  );
};

export default FloatingCard;
