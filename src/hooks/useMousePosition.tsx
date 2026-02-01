import { useEffect, useState, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const updateMousePosition = useCallback((event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    let rafId: number;
    let lastUpdate = 0;
    
    const throttledUpdate = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate > 16) { // ~60fps
        lastUpdate = now;
        updateMousePosition(event);
      } else {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => updateMousePosition(event));
      }
    };

    window.addEventListener("mousemove", throttledUpdate, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", throttledUpdate);
      cancelAnimationFrame(rafId);
    };
  }, [updateMousePosition]);

  return mousePosition;
};

export default useMousePosition;
