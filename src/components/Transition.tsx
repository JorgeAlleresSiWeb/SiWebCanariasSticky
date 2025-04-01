// Bloque.tsx
import React, { useEffect, useRef, useState } from 'react';

type TransitionProps = {
  children: React.ReactNode;
  type?: 'fade-up' | 'fade-in' | 'zoom-in' | 'slide-in';
  delay?: number;
  duration?: number;
};

function Transition({ 
  children, 
  type = 'fade-up', 
  delay = 0,
  duration = 1200 
}: TransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento está visible
        rootMargin: '0px 0px -80px 0px' // Menos margen para activación más rápida
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransitionClasses = () => {
    // En lugar de usar clases dinámicas que podrían no existir en Tailwind,
    // aplicamos los estilos directamente a través de un estilo en línea
    const styles = {
      transform: isVisible 
        ? 'translate(0, 0) scale(1)' 
        : getInitialTransform(),
      opacity: isVisible ? 1 : 0,
      transition: `transform ${duration}ms, opacity ${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', // Curva ease-out más rápida
      transitionDelay: `${delay}ms`
    };

    return styles;
  };

  const getInitialTransform = () => {
    switch (type) {
      case 'fade-up':
        return 'translate(0, 30px)';
      case 'zoom-in':
        return 'scale(0.95)';
      case 'slide-in':
        return 'translate(40px, 0)';
      case 'fade-in':
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={getTransitionClasses()}
    >
      {children}
    </div>
  );
};

export default Transition;
