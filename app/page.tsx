import ForgeForm from "@/components/ForgeForm";
import Logo from "@/components/Logo";
import Terminal from "@/components/Terminal";

interface MetricCard {
  label: string;
  value: string;
  subtext: string;
}

const METRICS: MetricCard[] = [
  { label: "Global Alpha Score", value: "872.4", subtext: "+18.6 vector delta" },
  { label: "Simulated APY", value: "41.8%", subtext: "Mainnet sim net yield" },
  { label: "Active Agents", value: "128", subtext: "32 forensic kernels online" }
];

export default function Home() {
  return (
    <main className="dashboard-shell">
      <header className="protocol-header">
        <div className="brand-lockup">
          <Logo />
          <span>BIF Protocol</span>
        </div>
        <div className="header-status">
          <span className="status-pill"><span className="status-dot" />Mainnet Sim</span>
          <span>Epoch 08 / Bags Intelligence Forge</span>
          <button className="connect-button" type="button">Connect</button>
        </div>
      </header>

      <div className="main-grid">
        <section className="hero-section" aria-labelledby="hero-title">
          <h1 className="hero-title" id="hero-title">Forge Your Strategy</h1>
          <p className="hero-copy">
            Industrial-grade agent orchestration for creator liquidity, sentiment decay, and alpha routing inside the Bags execution layer.
          </p>
        </section>

        <section className="module-grid" aria-label="Forge workflow">
          <ForgeForm />
          <Terminal />
        </section>

        <section className="metrics-grid" aria-label="Protocol metrics">
          {METRICS.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-subtext">{metric.subtext}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
