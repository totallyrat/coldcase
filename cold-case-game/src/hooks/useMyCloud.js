import { useCallback, useState } from 'react';
import { mycloudAccounts } from '../data/case.js';

export default function useMyCloud() {
  const [mcUser, setMcUser] = useState(null);
  const [mcTab, setMcTab] = useState('files');
  const [mcU, setMcU] = useState('');
  const [mcP, setMcP] = useState('');
  const [mcErr, setMcErr] = useState('');

  const login = useCallback(() => {
    const u = (mcU || '').trim().toLowerCase();
    const p = (mcP || '').trim();
    const account = Object.keys(mycloudAccounts).find((key) => key.toLowerCase() === u);
    if (account && mycloudAccounts[account].password === p) {
      setMcUser(account);
      setMcTab('files');
      setMcU('');
      setMcP('');
      setMcErr('');
      return;
    }
    if (account) {
      setMcErr('That password is not right. The account is still open.');
      return;
    }
    setMcErr('No account by that name.');
  }, [mcU, mcP]);

  const signOut = useCallback(() => {
    setMcUser(null);
    setMcU('');
    setMcP('');
    setMcErr('');
  }, []);

  const clearErr = useCallback(() => setMcErr(''), []);

  return {
    mcUser,
    mcTab,
    setMcTab,
    mcU,
    setMcU,
    mcP,
    setMcP,
    mcErr,
    login,
    signOut,
    clearErr,
  };
}
