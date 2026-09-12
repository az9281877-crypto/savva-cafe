import { useEffect, useState } from "react";

const RIYADH_TIME_ZONE = "Asia/Riyadh";

export function isRiyadhNight(date: Date): boolean {
  const hourPart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    hourCycle: "h23",
    timeZone: RIYADH_TIME_ZONE,
  }).formatToParts(date).find(({ type }) => type === "hour");
  const hour = Number(hourPart?.value);

  return hour >= 18 || hour < 7;
}

export default function useRiyadhNight() {
  const [night, setNight] = useState(() => isRiyadhNight(new Date()));

  useEffect(() => {
    const update = () => setNight(isRiyadhNight(new Date()));
    const timer = window.setInterval(update, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  return night;
}
