export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        padding: '120px 24px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(0, 255, 156, 0.1)',
            border: '1px solid rgba(0, 255, 156, 0.3)',
            borderRadius: '20px',
            color: '#00ff9c',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}>
            🤖 AI Agents That Actually Work
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            margin: '0 0 24px',
            background: 'linear-gradient(135deg, #fff 0%, #a0a0a0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Tatiana's Agent Foundry
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#888',
            lineHeight: 1.6,
            marginBottom: '40px'
          }}>
            Pre-built AI agents. Custom builds. Managed hosting.
            <br />
            From templates to fully-managed trading bots.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#pricing"
              style={{
                padding: '16px 32px',
                background: '#00ff9c',
                color: '#0a0a0f',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              View Pricing
            </a>
            <a
              href="#templates"
              style={{
                padding: '16px 32px',
                background: 'transparent',
                color: '#00ff9c',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
                border: '1px solid rgba(0, 255, 156, 0.3)'
              }}
            >
              See Templates
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '40px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '24px' }}>
            Trusted by solo founders, traders, and automation enthusiasts
          </p>
          <div style={{
            display: 'flex',
            gap: '48px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            opacity: 0.5
          }}>
            {['Polymarket', 'Bankr', 'OpenAI', 'Telegram', 'Vercel'].map((logo) => (
              <span key={logo} style={{ fontSize: '18px', fontWeight: 600, color: '#555' }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, margin: '0 0 16px' }}>
              Agent Templates
            </h2>
            <p style={{ fontSize: '18px', color: '#888' }}>
              Production-ready agents. One-time purchase. Full source code.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                name: 'Storm',
                tag: 'FLAGSHIP',
                desc: 'Weather prediction trading bot for Polymarket. 80+ cities monitored. Peak detection algorithm.',
                features: ['Peak Detection', 'Late-Day Strategy', 'Bankr Integration', 'Telegram Alerts'],
                color: '#00ff9c'
              },
              {
                name: 'Scout',
                tag: 'LEAD GEN',
                desc: 'X/Twitter monitoring agent. Tracks keywords, engages prospects, builds lead lists.',
                features: ['Keyword Tracking', 'Auto-Engagement', 'Lead Scoring', 'CSV Export'],
                color: '#3498db'
              },
              {
                name: 'Sage',
                tag: 'CONTENT',
                desc: 'Content generation agent. Research, write, and schedule posts across platforms.',
                features: ['Trend Research', 'Thread Writing', 'Multi-Platform', 'Scheduling'],
                color: '#9b59b6'
              },
              {
                name: 'Sentinel',
                tag: 'MONITORING',
                desc: 'Price and availability tracker. Alerts on changes, restocks, and deals.',
                features: ['Price Tracking', 'Restock Alerts', 'Discord/TG', 'Custom Rules'],
                color: '#f39c12'
              },
              {
                name: 'Archivist',
                tag: 'RESEARCH',
                desc: 'Document processing agent. Summarizes, tags, and organizes research papers.',
                features: ['PDF Parsing', 'Auto-Summarize', 'Tagging', 'Search'],
                color: '#e74c3c'
              },
              {
                name: 'Broker',
                tag: 'SALES',
                desc: 'Cold outreach automation. Personalized emails, follow-ups, and CRM sync.',
                features: ['Email Personalization', 'Follow-up Sequences', 'CRM Integration', 'Analytics'],
                color: '#27ae60'
              }
            ].map((agent) => (
              <div key={agent.name} style={{
                padding: '32px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px',
                transition: 'all 0.3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${agent.color}20`,
                    border: `1px solid ${agent.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    🤖
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>{agent.name}</h3>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: agent.color,
                      letterSpacing: '0.1em'
                    }}>
                      {agent.tag}
                    </span>
                  </div>
                </div>

                <p style={{ color: '#888', lineHeight: 1.6, marginBottom: '20px' }}>
                  {agent.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {agent.features.map((f) => (
                    <span key={f} style={{
                      padding: '4px 10px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#666'
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '100px 24px', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, margin: '0 0 16px' }}>
              Pricing
            </h2>
            <p style={{ fontSize: '18px', color: '#888' }}>
              Start with templates. Scale with hosting. Go custom when ready.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start'
          }}>
            {/* Starter */}
            <div style={{
              padding: '40px 32px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#888', letterSpacing: '0.1em', margin: '0 0 16px' }}>
                STARTER
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', fontWeight: 800 }}>$299</span>
                <span style={{ color: '#666' }}> one-time</span>
              </div>

              <p style={{ color: '#888', marginBottom: '32px', lineHeight: 1.6 }}>
                All 6 agent templates. Full source code. Self-hosted.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px' }}>
                {[
                  '6 Premium Agent Templates',
                  'Full Source Code (Next.js)',
                  'Setup Documentation',
                  'Community Discord Access',
                  'Lifetime Updates'
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#aaa' }}>
                    <span style={{ color: '#00ff9c' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <button style={{
                width: '100%',
                padding: '16px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Buy Templates
              </button>
            </div>

            {/* Pro - Featured */}
            <div style={{
              padding: '40px 32px',
              background: 'rgba(0, 255, 156, 0.05)',
              border: '1px solid rgba(0, 255, 156, 0.3)',
              borderRadius: '16px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '6px 16px',
                background: '#00ff9c',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 700,
                color: '#0a0a0f',
                letterSpacing: '0.05em'
              }}>
                MOST POPULAR
              </div>

              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#00ff9c', letterSpacing: '0.1em', margin: '0 0 16px' }}>
                PRO
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', fontWeight: 800 }}>$29.99</span>
                <span style={{ color: '#666' }}>/mo</span>
              </div>

              <p style={{ color: '#888', marginBottom: '32px', lineHeight: 1.6 }}>
                Templates + Cloud hosting + Storm deposit bot access. Everything you need.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px' }}>
                {[
                  'Everything in Starter',
                  'Cloud Hosting (Vercel + Neon)',
                  'Storm Deposit Bot Access*',
                  'Monitoring Dashboard',
                  'Email Support',
                  'API Costs Included**'
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#aaa' }}>
                    <span style={{ color: '#00ff9c' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <button style={{
                width: '100%',
                padding: '16px',
                background: '#00ff9c',
                border: 'none',
                borderRadius: '8px',
                color: '#0a0a0f',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Start Pro Plan
              </button>

              <div style={{ marginTop: '16px', fontSize: '11px', color: '#666', lineHeight: 1.5 }}>
                *Storm bot: You provide capital, I take 20% of profits
                <br />
                **Up to $25/mo in API costs covered
              </div>
            </div>

            {/* Enterprise */}
            <div style={{
              padding: '40px 32px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#888', letterSpacing: '0.1em', margin: '0 0 16px' }}>
                ENTERPRISE
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '48px', fontWeight: 800 }}>$2k-10k</span>
                <span style={{ color: '#666' }}> project</span>
              </div>

              <p style={{ color: '#888', marginBottom: '32px', lineHeight: 1.6 }}>
                Custom agent built for your specific use case. Bespoke solution.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '32px' }}>
                {[
                  'Custom Agent Development',
                  '3 Months Pro Hosting Included',
                  '1-on-1 Onboarding',
                  'Priority Support (24h)',
                  'Source Code Ownership'
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#aaa' }}>
                    <span style={{ color: '#00ff9c' }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <button style={{
                width: '100%',
                padding: '16px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Book a Call
              </button>
            </div>
          </div>

          {/* Infrastructure Tier */}
          <div style={{
            marginTop: '24px',
            padding: '32px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Infrastructure Hosting</h4>
              <p style={{ margin: 0, color: '#888' }}>
                For custom builds or high-volume users. 99.9% SLA, auto-updates, dedicated support.
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '32px', fontWeight: 800 }}>$99-499</span>
              <span style={{ color: '#666' }}>/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Cost Transparency */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 24px' }}>
            API Costs Covered
          </h2>

          <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.8, marginBottom: '40px' }}>
            Your $29.99/mo Pro plan includes up to $25 in API costs. Here's the breakdown:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            textAlign: 'left'
          }}>
            {[
              { service: 'OpenAI GPT-4o-mini', cost: '~$5-15/mo', desc: '10K-30K requests' },
              { service: 'Telegram Bot API', cost: 'FREE', desc: '30 msgs/sec limit' },
              { service: 'Weather API', cost: 'FREE', desc: 'Open-Meteo' },
              { service: 'Vercel Hosting', cost: '$0-20/mo', desc: 'Hobby tier' },
              { service: 'Database (Neon)', cost: '$0-10/mo', desc: 'Free tier + low usage' },
              { service: 'Polymarket Fees', cost: '0-1.56%', desc: 'Only on trades' },
            ].map((item) => (
              <div key={item.service} style={{
                padding: '20px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{item.service}</div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#00ff9c', marginBottom: '4px' }}>{item.cost}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.3)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 40px', textAlign: 'center' }}>
            FAQ
          </h2>

          {[
            {
              q: 'Do I need coding skills?',
              a: 'For Starter: basic knowledge helps but docs are thorough. For Pro: zero coding-we handle everything. For Enterprise: we build it for you.'
            },
            {
              q: 'How does the Storm bot work?',
              a: 'You deposit capital ($1K minimum recommended). Storm trades weather markets on Polymarket. You keep 80% of profits, I take 20% + $29.99/mo hosting.'
            },
            {
              q: 'What if I exceed API limits?',
              a: 'We\'ll notify you at 80% usage. You can upgrade to Infrastructure tier ($99-499/mo) for higher limits, or pay overages.'
            },
            {
              q: 'Can I modify the templates?',
              a: 'Absolutely. Starter gives you full source code. Modify, extend, or resell (white-label rights included).'
            },
            {
              q: 'What\'s the refund policy?',
              a: 'Starter: 30-day money back. Pro: Cancel anytime, prorated refund. Enterprise: Milestone-based payments.'
            }
          ].map((faq, idx) => (
            <div key={idx} style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px', color: '#fff' }}>
                {faq.q}
              </h4>
              <p style={{ margin: 0, color: '#888', lineHeight: 1.6 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 700, margin: '0 0 24px' }}>
            Ready to deploy your first agent?
          </h2>

          <p style={{ fontSize: '18px', color: '#888', marginBottom: '40px' }}>
            Join founders, traders, and automation enthusiasts building with AI.
          </p>

          <a
            href="#pricing"
            style={{
              display: 'inline-block',
              padding: '20px 48px',
              background: '#00ff9c',
              color: '#0a0a0f',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '18px'
            }}
          >
            Get Started →
          </a>

          <p style={{ marginTop: '24px', fontSize: '14px', color: '#666' }}>
            Questions? Email me at tatiana@agentfoundry.ai
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          © 2026 Tatiana's Agent Foundry. Built with ♥ and lots of caffeine.
        </p>
      </footer>
    </div>
  );
}
