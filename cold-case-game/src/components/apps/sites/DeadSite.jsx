export default function DeadSite({ deadUrl }) {
  return (
    <div className="site-dead">
      <div className="site-dead-title">This address did not resolve.</div>
      <p>{deadUrl} is not in the mirror. Search Beacon instead.</p>
    </div>
  );
}
