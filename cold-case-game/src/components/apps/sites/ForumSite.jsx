import { forumSite } from '../../../data/case.js';

export default function ForumSite() {
  const { memberCard } = forumSite;
  return (
    <div className="forum-wrap">
      <div className="forum-hero">
        {forumSite.name} &nbsp;
        <span className="forum-hero-tagline">· {forumSite.tagline} ·</span>
      </div>
      <div className="forum-body">
        <div className="forum-board">Thread · {forumSite.boardName}</div>
        <h4 className="forum-thread-title">{forumSite.threadTitle}</h4>
        {forumSite.posts.map((p, i) => (
          <div className="forum-post" key={i}>
            <div>
              <div className="forum-user">{p.user}</div>
              <div className="forum-meta">{p.meta}</div>
              <div className="forum-when">{p.when}</div>
            </div>
            <div className="forum-text">{p.text}</div>
          </div>
        ))}
        <div className="forum-membercard">
          <div className="forum-membercard-heading">Member card · {memberCard.handle}</div>
          <dl className="forum-membercard-grid">
            <dt>Real name</dt>
            <dd>{memberCard.realName}</dd>
            <dt>Joined</dt>
            <dd>{memberCard.joined}</dd>
            <dt>Contact</dt>
            <dd>{memberCard.contact}</dd>
            <dt>Other</dt>
            <dd>{memberCard.other}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
