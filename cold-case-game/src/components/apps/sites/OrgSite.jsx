import { orgSite } from '../../../data/case.js';

export default function OrgSite() {
  return (
    <div>
      <div className="org-hero">
        <div className="org-name">{orgSite.name}</div>
        <div className="org-tagline">{orgSite.tagline}</div>
      </div>
      <div className="org-body">
        <p className="beacon-result-desc" style={{ fontSize: 15, color: 'var(--color-neutral-800)' }}>
          {orgSite.blurb}
        </p>
        <div className="org-rule" />
        <h4>People</h4>
        <div>
          {orgSite.staff.map((p) => (
            <div className="org-staff-row" key={p.name}>
              <div className="org-staff-name">{p.name}</div>
              <div className="org-staff-role">{p.role}</div>
            </div>
          ))}
        </div>
        <div className="org-rule" />
        <p className="org-breadcrumb">{orgSite.breadcrumb}</p>
      </div>
    </div>
  );
}
