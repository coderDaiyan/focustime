import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../utils/color";
import { fontSize, spacings } from "../utils/sizes";

const minToMils = (min) => min * 60000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const countDown = () => {
    setMils((time) => {
      if (time === 0) {
        // do some work
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      // repot the progress
      return timeLeft;
    });
  };
  const [mils, setMils] = useState(minToMils(minutes));

  useEffect(() => {
    setMils(minToMils(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(mils / minToMils(minutes));
    if (mils === 0) {
      onEnd();
    }
  }, [mils]);

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(mils / 1000 / 60) % 60;
  const seconds = Math.floor(mils / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacings.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
    borderRadius: 20,
  },
});
