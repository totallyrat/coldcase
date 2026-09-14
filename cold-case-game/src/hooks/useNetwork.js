import { useCallback, useState } from 'react';
import { SITES } from '../data/case.js';

export default function useNetwork() {
  const [site, setSite] = useState('beacon');
  const [urlInput, setUrlInput] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [deadUrl, setDeadUrl] = useState('');

  const go = useCallback((id) => {
    const s = SITES.find((x) => x.id === id);
    setSite(id);
    setUrlInput(s ? s.url : '');
  }, []);

  const goHome = useCallback(() => {
    setSite('beacon');
    setUrlInput('');
    setQuery('');
    setResults(null);
  }, []);

  const submit = useCallback(() => {
    const raw = (urlInput || '').trim();
    const q = raw.toLowerCase();
    if (!q) {
      setSite('beacon');
      setQuery('');
      setResults(null);
      return;
    }
    const exact = SITES.find(
      (s) =>
        q === s.url ||
        q === 'www.' + s.url ||
        q === 'http://' + s.url ||
        q === 'https://' + s.url ||
        q === s.url.split('.')[0],
    );
    if (exact) {
      go(exact.id);
      return;
    }
    if (q.indexOf('.') > 0 && q.indexOf(' ') < 0) {
      const near = SITES.find((s) => q.indexOf(s.url.split('.')[0]) === 0);
      if (near) {
        go(near.id);
        return;
      }
      setSite('dead');
      setDeadUrl(raw);
      setQuery('');
      return;
    }
    const hits = SITES.filter((s) => s.keys.some((k) => q.indexOf(k) >= 0));
    setSite('beacon');
    setQuery(raw);
    setResults(hits);
  }, [urlInput, go]);

  return { site, urlInput, setUrlInput, query, results, deadUrl, go, goHome, submit };
}
