"use client";

import { useMemo, useState } from "react";

type Frequency = "Block-by-block" | "15m rebalance" | "Hourly rebalance";
type SentimentModel = "Creator-weighted" | "Liquidity-weighted" | "Hybrid forensic";
type ToggleKey = "creatorHistory" | "poolDepth" | "holderGraph" | "socialVelocity";

interface ToggleOption {
  key: ToggleKey;
  label: string;
}

const TOGGLE_OPTIONS: ToggleOption[] = [
  { key: "creatorHistory", label: "Creator History" },
  { key: "poolDepth", label: "Pool Depth" },
  { key: "holderGraph", label: "Holder Graph" },
  { key: "socialVelocity", label: "Social Velocity" }
];

export default function ForgeForm() {
  const [risk, setRisk] = useState<number>(62);
  const [confidence, setConfidence] = useState<number>(78);
  const [frequency, setFrequency] = useState<Frequency>("15m rebalance");
  const [sentimentModel, setSentimentModel] = useState<SentimentModel>("Hybrid forensic");
  const [enabledSignals, setEnabledSignals] = useState<Record<ToggleKey, boolean>>({
    creatorHistory: true,
    poolDepth: true,
    holderGraph: false,
    socialVelocity: true
  });

  const forgeReadiness = useMemo<number>(() => {
    const enabledCount = Object.values(enabledSignals).filter(Boolean).length;
    return Math.min(99, Math.round((risk * 0.32) + (confidence * 0.44) + (enabledCount * 8)));
  }, [confidence, enabledSignals, risk]);

  function toggleSignal(key: ToggleKey): void {
    setEnabledSignals((currentSignals) => ({
      ...currentSignals,
      [key]: !currentSignals[key]
    }));
  }

  return (
    <section className="module-card" aria-label="Strategy forge controls">
      <div className="module-header">
        <div>
          <p className="module-kicker">Left Column / Agent Parameters</p>
          <h2 className="module-title">Strategy Forge</h2>
        </div>
        <span className="module-kicker">BIF-OS 14.2</span>
      </div>

      <form className="forge-form">
        <label className="form-row">
          <span className="form-label-row">
            <span className="form-label">Risk Envelope</span>
            <span className="form-value">{risk}%</span>
          </span>
          <input
            className="range-input"
            type="range"
            min="0"
            max="100"
            value={risk}
            onChange={(event) => setRisk(Number(event.target.value))}
          />
        </label>

        <label className="form-row">
          <span className="form-label-row">
            <span className="form-label">Inference Confidence Floor</span>
            <span className="form-value">{confidence}%</span>
          </span>
          <input
            className="range-input"
            type="range"
            min="35"
            max="100"
            value={confidence}
            onChange={(event) => setConfidence(Number(event.target.value))}
          />
        </label>

        <label className="form-row">
          <span className="form-label">Execution Frequency</span>
          <select
            className="select-input"
            value={frequency}
            onChange={(event) => setFrequency(event.target.value as Frequency)}
          >
            <option>Block-by-block</option>
            <option>15m rebalance</option>
            <option>Hourly rebalance</option>
          </select>
        </label>

        <label className="form-row">
          <span className="form-label">Sentiment Analysis Kernel</span>
          <select
            className="select-input"
            value={sentimentModel}
            onChange={(event) => setSentimentModel(event.target.value as SentimentModel)}
          >
            <option>Creator-weighted</option>
            <option>Liquidity-weighted</option>
            <option>Hybrid forensic</option>
          </select>
        </label>

        <div className="form-row">
          <span className="form-label">Active Data Buses</span>
          <div className="toggle-grid">
            {TOGGLE_OPTIONS.map((option) => (
              <button
                key={option.key}
                className="toggle-button"
                type="button"
                data-active={enabledSignals[option.key]}
                onClick={() => toggleSignal(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="form-row">
          <span className="form-label-row">
            <span className="form-label">Forge Readiness</span>
            <span className="form-value">{forgeReadiness}%</span>
          </span>
          <div className="progress-shell" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${forgeReadiness}%` }} />
          </div>
        </div>

        <button className="execute-button" type="button">
          Compile Strategy Vector
        </button>
      </form>
    </section>
  );
}
