import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [passLength, setPassLength] = useState(6);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [isCopyClicked, setIsCopyClicked] = useState(false);
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "";

    if (isUpperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowerCase) str += "abcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isSymbol) str += "!@#$%^&*()";
    if (!str) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    for (let i = 1; i < passLength; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passLength, isNumber, isLowerCase, isUpperCase, isSymbol]);

  useEffect(() => {
    generatePassword();
  }, [passLength, isLowerCase, isUpperCase, isSymbol, isNumber]);

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    setIsCopyClicked(true);
    setTimeout(() => {
      setIsCopyClicked(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center mb-4">
          Password Generator
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Generate strong and secure passwords
        </p>

        {/* Generated Password Display */}
        <div className="mb-6">
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <span ref={passwordRef} className="text-gray-700 tracking-widest">
              {password}
            </span>
            <button
              onClick={copyPasswordToClipBoard}
              className={`px-3 py-1 text-sm ${
                isCopyClicked
                  ? "bg-green-600 rounded-sm text-white"
                  : "bg-indigo-600 rounded-sm text-white hover:bg-indigo-700"
              } transition`}
            >
              {isCopyClicked ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Length Control */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 flex justify-between mb-2">
            <span>Password Length</span>
            <span className="text-indigo-600 font-semibold">{passLength}</span>
          </label>
          <input
            onChange={(e) => setPassLength(e.target.value)}
            value={passLength}
            type="range"
            min="6"
            max="32"
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center gap-2">
            <input
              onChange={() => {
                setIsUpperCase((prev) => !prev);
              }}
              defaultChecked={isUpperCase}
              type="checkbox"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">
              Include Uppercase Letters
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              defaultChecked={isLowerCase}
              onChange={() => {
                setIsLowerCase((prev) => !prev);
              }}
              type="checkbox"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">
              Include Lowercase Letters
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              defaultChecked={isNumber}
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
              type="checkbox"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">Include Numbers</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              defaultChecked={isSymbol}
              onChange={() => {
                setIsSymbol((prev) => !prev);
              }}
              type="checkbox"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">Include Symbols</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
