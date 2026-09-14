import BeaconSite from './sites/BeaconSite.jsx';
import OrgSite from './sites/OrgSite.jsx';
import RecordsSite from './sites/RecordsSite.jsx';
import ForumSite from './sites/ForumSite.jsx';
import CloudSite from './sites/CloudSite.jsx';
import DeadSite from './sites/DeadSite.jsx';

export default function NetworkApp({ net, onGoHome, onGo, onUrlChange, onSubmit, mycloud, ambient }) {
  const { site, urlInput, query, results, deadUrl } = net;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
  };

  return (
    <>
      <div className="net-toolbar">
        <button className="net-home-btn" onClick={onGoHome}>
          Beacon
        </button>
        <input
          className="net-url"
          value={urlInput}
          onChange={(e) => onUrlChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="address, or search for a name"
        />
        <button className="net-go" onClick={onSubmit}>
          Go
        </button>
      </div>
      <div className="net-viewport">
        {site === 'beacon' && <BeaconSite query={query} results={results} onGo={onGo} />}
        {site === 'org' && <OrgSite />}
        {site === 'records' && <RecordsSite />}
        {site === 'forum' && <ForumSite />}
        {site === 'cloud' && (
          <CloudSite
            mcUser={mycloud.mcUser}
            mcTab={mycloud.mcTab}
            onMcTab={mycloud.setMcTab}
            mcU={mycloud.mcU}
            onMcU={mycloud.setMcU}
            mcP={mycloud.mcP}
            onMcP={mycloud.setMcP}
            mcErr={mycloud.mcErr}
            onMcKeyDown={(e) => {
              if (e.key === 'Enter') mycloud.login();
            }}
            onLogin={mycloud.login}
            onSignOut={mycloud.signOut}
            event1={ambient.event1}
            event2={ambient.event2}
          />
        )}
        {site === 'dead' && <DeadSite deadUrl={deadUrl} />}
      </div>
    </>
  );
}
