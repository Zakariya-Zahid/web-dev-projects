import React, { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  // ****** TIMER COUNTDOWN ******
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const intervalTimerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (intervalTimerRef.current) return;

    setTimer({ hours: inputHours, minutes: inputMinutes, seconds: inputSeconds });
    setIsTimerRunning(true);

    intervalTimerRef.current = setInterval(() => {
      setTimer((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          clearInterval(intervalTimerRef.current);
          intervalTimerRef.current = null;
          setIsTimerRunning(false);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);
  }, [inputHours, inputMinutes, inputSeconds]);

  const stopTimer = () => {
    clearInterval(intervalTimerRef.current);
    intervalTimerRef.current = null;
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalTimerRef.current);
    intervalTimerRef.current = null;
    setIsTimerRunning(false);
    setTimer({ hours: 0, minutes: 0, seconds: 0 });
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalTimerRef.current); // cleanup
  }, []);

  // ****** STOPWATCH ******
  const [activeTab, setActiveTab] = useState("stopwatch");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopWatch = useCallback(() => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 59) {
          setMinutes((m) => {
            if (m === 59) {
              setHours((h) => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  }, []);

  const stopStopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          ⏱️ Stopwatch & Timer
        </h1>

        {/* Tabs*/}
        <div className="flex w-full rounded-xl bg-gray-100 p-1 mb-6">
          <button
            onClick={() => setActiveTab("stopwatch")}
            className={`flex-1 py-2 rounded-lg ${
              activeTab === "stopwatch"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }
             font-medium`}
          >
            Stopwatch
          </button>
          <button
            onClick={() => setActiveTab("timer")}
            className={` flex-1 py-2 rounded-lg font-medium  ${
              activeTab === "timer"
                ? "bg-white shadow text-gray-800"
                : "text-gray-500 hover:text-gray-700"
            }
            `}
          >
            Timer
          </button>
        </div>
        {/* StopWatch */}
        {activeTab === "stopwatch" && (
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm mb-8">
            <div className="text-center">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Elapsed Time
              </div>
              <div className="font-mono text-5xl md:text-6xl font-semibold text-gray-800">
                {`${hours.toString().padStart(2, "0")}:${minutes
                  .toString()
                  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
              </div>
              <div className="text-xs text-gray-400 mt-1">hh:mm.ss</div>
            </div>

            {/* Controls (dummy) */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={startStopWatch}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600"
              >
                Start
              </button>
              <button
                onClick={stopStopWatch}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium shadow hover:bg-amber-600"
              >
                Pause
              </button>
              <button
                onClick={resetStopWatch}
                className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-medium shadow hover:bg-rose-600"
              >
                Reset
              </button>
            </div>
          </div>
        )}
        {/* Timer Countdown */}
        {activeTab === "timer" && (
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <label className="text-sm font-medium text-gray-600 mb-1">
                  Hours
                </label>
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={inputHours}
                  onChange={(e) => setInputHours(Number(e.target.value))}
                  className="w-20 text-center px-2 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg font-semibold"
                />
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <label className="text-sm font-medium text-gray-600 mb-1">
                  Minutes
                </label>
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={inputMinutes}
                  onChange={(e) => setInputMinutes(Number(e.target.value))}
                  className="w-20 text-center px-2 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg font-semibold"
                />
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <label className="text-sm font-medium text-gray-600 mb-1">
                  Seconds
                </label>
                <input
                  type="number"
                  min={0}
                  max={60}
                  value={inputSeconds}
                  onChange={(e) => setInputSeconds(Number(e.target.value))}
                  className="w-20 text-center px-2 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg font-semibold"
                />
              </div>
            </div>

            {/* Timer Display */}
            <div className="text-center mt-5">
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                Remaining
              </div>
              <div className="font-mono text-4xl font-semibold text-gray-800">
                {`${timer.hours.toString().padStart(2, "0")}:${timer.minutes
                  .toString()
                  .padStart(2, "0")}:${timer.seconds
                  .toString()
                  .padStart(2, "0")}`}
              </div>
            </div>

            {/* Controls (dummy) */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={startTimer}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-medium shadow hover:bg-emerald-600"
              >
                Start
              </button>
              <button
                onClick={stopTimer}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-medium shadow hover:bg-amber-600"
              >
                Pause
              </button>
              <button
                onClick={resetTimer}
                className="px-5 py-2.5 rounded-xl bg-rose-500 text-white font-medium shadow hover:bg-rose-600"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
