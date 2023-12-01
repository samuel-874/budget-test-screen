import React, { useState, useEffect } from 'react';
import { Text } from "@chakra-ui/react";

const AnimatedPercentage = ({ value, color, fontSize,fontWeight }: { value: number, color: string, fontSize: string,fontWeight?: number } ) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 1020; 
    const steps = 100;
    const stepDuration = animationDuration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      setCount((currentStep / steps) * value);
      currentStep += 1;

      if (currentStep > steps) {
        setCount(value); 
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <Text fontWeight={fontWeight} color={color} fontSize={fontSize}>
      {`${Math.floor(count)}%`}
    </Text>
  );
};

export default AnimatedPercentage;
