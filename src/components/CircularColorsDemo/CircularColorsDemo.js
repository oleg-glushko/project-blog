'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, MotionConfig } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';

import Card from '@/components/Card';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './CircularColorsDemo.module.css';

const COLORS = [
  { label: 'red', value: 'hsl(348deg 100% 60%)' },
  { label: 'yellow', value: 'hsl(50deg 100% 55%)' },
  { label: 'blue', value: 'hsl(235deg 100% 65%)' },
];

function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [isRunning, setRunning] = React.useState(false);
  const id = React.useId();

  React.useEffect(() => {
    if (!isRunning) return;

    const nextTick = setTimeout(() => setTimeElapsed(timeElapsed + 1), 1000)
    return () => clearTimeout(nextTick);
  }, [timeElapsed, isRunning]);

  const selectedColor = COLORS[timeElapsed % COLORS.length];

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        <MotionConfig reducedMotion='user'>
          {COLORS.map((color, index) => {
            const isSelected =
              color.value === selectedColor.value;

            return (
              <li
                className={styles.color}
                key={index}
              >
                {isSelected && (
                  <motion.div layoutId={`${id}-outline`}
                    className={
                      styles.selectedColorOutline
                    }
                  />
                )}
                <div
                  className={clsx(
                    styles.colorBox,
                    isSelected &&
                    styles.selectedColorBox
                  )}
                  style={{
                    backgroundColor: color.value,
                  }}
                >
                  <VisuallyHidden>
                    {color.label}
                  </VisuallyHidden>
                </div>
              </li>
            );
          })}
        </MotionConfig>
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={() => setRunning(!isRunning)}>
            {isRunning ? <Pause /> : <Play />}
            <VisuallyHidden>{isRunning ? "Pause" : "Play"}</VisuallyHidden>
          </button>
          <button onClick={() => {
            setRunning(false);
            setTimeElapsed(0);
          }}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
