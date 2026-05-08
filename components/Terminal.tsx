"use client";

import { useEffect, useMemo, useState } from "react";

type LogLevel = "SYNC" | "CALC" | "SUCCESS" | "WARN";

interface LogTemplate {
  level: LogLevel;
  message: string;
}

interface TerminalLog extends LogTemplate {
  id: number;
  timestamp: string;
}

const LOG_TEMPLATES: LogTemplate[] = [
  { level: "SYNC", message: "Fetching Bags.fm Liquidity Pools..." },
  { level: "SYNC", message: "Indexing creator wallet velocity across token epochs..." },
  { level: "CALC", message: "Running Claude-3.5 Inference on Creator History..." },
  { level: "CALC", message: "Normalizing holder concentration and social entropy..." },
  { level: "WARN", message: "Detected asymmetric volume spike. Applying slippage dampener..." },
  { level: "SYNC", message: "Hydrating mainnet simulation state from BIF cache layer..." },
  { level: "CALC", message: "Scoring memetic durability against post-launch decay curve..." },
  { level: "SUCCESS", message: "Strategy Optimized. Efficiency: 94.2%." }
];

function createTimestamp(): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}

function createInitialLogs(templates: LogTemplate[]): TerminalLog[] {
  return templates.slice(0, 5).map((template, index) => ({
    ...template,
    id: index,
    timestamp: createTimestamp()
  }));
}

export default function Terminal() {
  const templates = useMemo<LogTemplate[]>(() => LOG_TEMPLATES, []);
  const [logs, setLogs] = useState<TerminalLog[]>(() => createInitialLogs(templates));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLogs((currentLogs) => {
        const nextId = currentLogs.length === 0 ? 0 : currentLogs[currentLogs.length - 1].id + 1;
        const template = templates[nextId % templates.length];
        const nextLog: TerminalLog = {
          ...template,
          id: nextId,
          timestamp: createTimestamp()
        };

        return [...currentLogs, nextLog].slice(-14);
      });
    }, 1450);

    return () => window.clearInterval(intervalId);
  }, [templates]);

  return (
    <section className="module-card" aria-label="Forensic terminal">
      <div className="module-header">
        <div>
          <p className="module-kicker">Right Column / Live Trace</p>
          <h2 className="module-title">Forensic Terminal</h2>
        </div>
        <span className="status-pill"><span className="status-dot" />STREAM</span>
      </div>
      <div className="terminal-body" role="log" aria-live="polite">
        {logs.map((log) => (
          <div className="terminal-line" key={log.id}>
            <span className="terminal-time">{log.timestamp}</span>
            <span>
              <span className={`terminal-level-${log.level.toLowerCase()}`}>[{log.level}]</span> {log.message}
            </span>
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-time">ACTIVE</span>
          <span>Awaiting next inference cycle<span className="cursor-block" /></span>
        </div>
      </div>
    </section>
  );
}
