import { mycloudAccounts } from '../../../data/case.js';

const TABS = [
  { id: 'files', name: 'Files' },
  { id: 'messages', name: 'Messages' },
  { id: 'mail', name: 'Mail' },
];

export default function CloudSite({
  mcUser,
  mcTab,
  onMcTab,
  mcU,
  onMcU,
  mcP,
  onMcP,
  mcErr,
  onMcKeyDown,
  onLogin,
  onSignOut,
  event1,
  event2,
}) {
  const account = mcUser ? mycloudAccounts[mcUser] : null;
  const showFreshFile = !!(event1 && mcUser === 'mdoyle77' && account?.eventFile);
  const showFreshMsg = !!(event2 && mcUser === 'duskrunner' && account?.eventMsg);

  const files = account ? account.files : [];
  const msgs = account ? account.msgs : [];

  return (
    <div className="cloud">
      <div className="cloud-topbar">
        <div className="cloud-word">MyCloud</div>
        <div className="cloud-strapline">Your things, wherever you are</div>
        <div className="cloud-spacer" />
        {mcUser && (
          <button className="cloud-signout" onClick={onSignOut}>
            Sign out {account.displayName}
          </button>
        )}
      </div>

      {!mcUser && (
        <div className="cloud-login-wrap">
          <div className="cloud-login">
            <h4>Sign in</h4>
            <p>Accounts are kept for as long as they are paid for.</p>
            <div className="cloud-field">
              <label>Username</label>
              <input value={mcU} onChange={(e) => onMcU(e.target.value)} onKeyDown={onMcKeyDown} />
            </div>
            <div className="cloud-field">
              <label>Password</label>
              <input
                type="password"
                value={mcP}
                onChange={(e) => onMcP(e.target.value)}
                onKeyDown={onMcKeyDown}
              />
            </div>
            <button className="cloud-login-btn" onClick={onLogin}>
              Sign in
            </button>
            <div className="cloud-login-err">{mcErr}</div>
          </div>
        </div>
      )}

      {mcUser && (
        <div>
          <div className="cloud-tabs">
            {TABS.map((t) => {
              const badge =
                (t.id === 'files' && showFreshFile) || (t.id === 'messages' && showFreshMsg) ? ' ·' : '';
              return (
                <button
                  key={t.id}
                  className="cloud-tab"
                  style={{ borderBottomColor: mcTab === t.id ? 'var(--color-accent)' : 'transparent' }}
                  onClick={() => onMcTab(t.id)}
                >
                  {t.name}
                  <span className="badge">{badge}</span>
                </button>
              );
            })}
          </div>
          <div className="cloud-content">
            {mcTab === 'files' && (
              <div>
                {files.map((f) => (
                  <div className="cloud-file" key={f.name}>
                    <div className="cloud-file-head">
                      <div className="cloud-file-name">{f.name}</div>
                      <div className="cloud-file-meta">{f.meta}</div>
                    </div>
                    <div className="cloud-file-body">{f.body}</div>
                  </div>
                ))}
                {showFreshFile && (
                  <div className="cloud-file fresh-in">
                    <div className="cloud-file-head">
                      <div className="cloud-file-name">{account.eventFile.name}</div>
                      <div className="cloud-file-meta fresh">{account.eventFile.meta}</div>
                    </div>
                    <div className="cloud-file-body">{account.eventFile.body}</div>
                  </div>
                )}
              </div>
            )}
            {mcTab === 'messages' && (
              <div>
                <div className="cloud-msgs-title">{account.msgsTitle}</div>
                {msgs.map((m, i) => (
                  <div className="cloud-msg" key={i}>
                    <div>
                      <div className="cloud-msg-who">{m.who}</div>
                      <div className="cloud-msg-when">{m.when}</div>
                    </div>
                    <div className="cloud-msg-text">{m.text}</div>
                  </div>
                ))}
                {showFreshMsg && (
                  <div className="cloud-msg fresh-in">
                    <div>
                      <div className="cloud-msg-who">{account.eventMsg.who}</div>
                      <div className="cloud-msg-when">{account.eventMsg.when}</div>
                    </div>
                    <div className="cloud-msg-text">{account.eventMsg.text}</div>
                  </div>
                )}
                {mcUser === 'duskrunner' && (
                  <div className="cloud-msg">
                    <div>
                      <div className="cloud-msg-who blank">—</div>
                      <div className="cloud-msg-when">—</div>
                    </div>
                    <div className="cloud-msg-text">No recipient. Saved drafts only.</div>
                  </div>
                )}
              </div>
            )}
            {mcTab === 'mail' && (
              <div>
                {account.mails
                  ? account.mails.map((e, i) => (
                      <div className="cloud-mail" key={i}>
                        <dl className="cloud-mail-meta">
                          <dt>From</dt>
                          <dd>{e.from}</dd>
                          <dt>To</dt>
                          <dd>{e.to}</dd>
                          <dt>Date</dt>
                          <dd>{e.date}</dd>
                        </dl>
                        <div className="cloud-mail-subject">{e.subject}</div>
                        <div className="cloud-mail-body">{e.body}</div>
                      </div>
                    ))
                  : (
                      <div className="cloud-empty-mail">
                        <div className="cloud-mail-subject">This account has no mail.</div>
                        <p>{account.mailNote}</p>
                      </div>
                    )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
