export default function BeaconSite({ query, results, onGo }) {
  const hasResults = !!results && results.length > 0;
  const noResults = !!results && results.length === 0;
  const blankSearch = !results;
  return (
    <div className="beacon">
      <div className="beacon-word">BEACON</div>
      <div className="beacon-sub">Index · 2020 mirror</div>
      <div className="beacon-rule" />
      {hasResults && (
        <div>
          {results.map((r) => (
            <button key={r.id} className="beacon-result" onClick={() => onGo(r.id)}>
              <div className="beacon-result-title">{r.title}</div>
              <div className="beacon-result-url">{r.url}</div>
              <div className="beacon-result-desc">{r.desc}</div>
            </button>
          ))}
        </div>
      )}
      {noResults && (
        <div className="beacon-empty">
          <p>
            Nothing indexed for <strong>{query}</strong>.
          </p>
          <p className="hint">
            Beacon only holds what was on the local network. Try a company, a vessel, a person, or whatever a
            service gets called in conversation.
          </p>
        </div>
      )}
      {blankSearch && (
        <div className="beacon-blank">
          <p>Search the network. Addresses are rarely written out anywhere — look for what people call things.</p>
          <p className="hint">Four sites are on this mirror. Each answers to more than one name.</p>
        </div>
      )}
    </div>
  );
}
