import React, { useState } from 'react';
import './PasswordGeneratorApp.css';
import usePasswordGenerator from './hooks/use-password-generator';
import PasswordStrengthGenerator from './component/StrengthChecker';
import Button from './component/Button';
import Checkbox from './component/Checkbox';

function PasswordGeneratorApp() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    { title: 'Include Uppercase Letters', state: true },
    { title: 'Include Lowercase Letters', state: false },
    { title: 'Include Numbers', state: false },
    { title: 'Include Symbols', state: false },
  ]);

  const handleCheckboxChange = (idx) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[idx].state = !updatedCheckboxData[idx].state;
    setCheckboxData(updatedCheckboxData);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="wrapper">
      {/* Password Text and Copy btn */}
      {password ? (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? 'Copied' : 'Copy'}
            customClass="button copyBtn"
            onClick={handleCopy}
          />
        </div>
      ) : (
        "Click on 'Generate Password' to Generate Password"
      )}
      {/* Character Length */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, idx) => {
          return (
            // Refactor
            <Checkbox title={checkbox.title} key={idx} onChange={() => handleCheckboxChange(idx)} state={checkbox.state}/>
          );
        })}
      </div>

      {/* Strength */}
      {password && <PasswordStrengthGenerator password={password} />}
      {/* Error Handling */}

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* Generate Button */}
      <Button
        text="Generate Password"
        customClass="button generate-btn"
        onClick={() => generatePassword(checkboxData, length)}
      />
    </div>
  );
}

export default PasswordGeneratorApp;

/**
 * UI
 * password & copy btn
 * char length
 * checkBoxes - uppCase, lowCase, Numbers, Symbols
 * Strength
 * GeneratePassword
 * 
 * Logic
 * checkboxData - State
 * generatePasswordHook- customHook
 *  password, generatePasseord(), errorMessage
 * Strength Component
 * 
 * Refactoring
 * Button
 * Checkbox
 */