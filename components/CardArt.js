// Decorative mini-illustrations for the project cards, drawn with CSS only.

function AgentArt() {
  const bars = [30, 42, 38, 55, 64, 82];
  return (
    <div className="ui">
      <div className="bar"><i /><i /><i /></div>
      <div className="agent">
        <div>
          <div className="msg"><span className="tag">AI agent</span><br />Guest asked about a 3-night stay in March. I sent rates and a direct booking link.</div>
          <div className="msg me">Approve the 10% direct-booking offer</div>
          <div className="msg"><span className="tag">Booked direct</span><br />Deluxe room, 3 nights. No OTA commission.</div>
        </div>
        <div className="side">
          <div style={{ fontWeight: 600 }}>Direct bookings</div>
          <div className="bars">
            {bars.map((h, i) => (
              <span key={i} className={i === bars.length - 1 ? "hi" : undefined} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="kpi"><div><b>Direct</b>this month</div><div><b>Enquiries</b>followed up</div></div>
        </div>
      </div>
    </div>
  );
}

function SitesArt() {
  const sites = [
    ["#D9C3A5", "#B4572E"],
    ["#9DB8B3", "#2F4F4A"],
    ["#C9B7D6", "#4B3A63"],
  ];
  return (
    <div className="sites">
      {sites.map(([img, button]) => (
        <div className="site" key={img}>
          <div className="img" style={{ background: img }} />
          <div className="ln" /><div className="ln s" />
          <div className="bk" style={{ background: button }} />
        </div>
      ))}
    </div>
  );
}

function FlowArt() {
  return (
    <div className="flow">
      <div className="step"><small>Product</small><div className="ph" /><div className="ln" /><div className="ln s" /></div>
      <div className="step"><small>Cart</small><div className="ln" /><div className="ln" /><div className="ln s" /><div className="pay" style={{ background: "#9CC3B0" }} /></div>
      <div className="step"><small>Checkout</small><div className="ln" /><div className="ln s" /><div className="pay" /></div>
    </div>
  );
}

export default function CardArt({ type }) {
  if (type === "agent") return <AgentArt />;
  if (type === "sites") return <SitesArt />;
  return <FlowArt />;
}
