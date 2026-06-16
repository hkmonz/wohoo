import { useEffect, useState } from 'react';

const STORAGE_KEY = 'woohoo_cookie_consent';

export default function CookieConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted' || saved === 'rejected') {
      setConsent(saved);
    } else {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
    setVisible(false);
  };

  if (!visible || consent) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-3xl bg-white border border-slate-200 shadow-2xl p-4 sm:p-5 lg:max-w-3xl lg:left-auto lg:right-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-700">
            We use cookies to improve your experience on this site. Choose Accept to enable cookies, or Reject to decline non-essential cookies.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={rejectCookies}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-400"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="inline-flex items-center justify-center rounded-full bg-[#6B5FEF] px-5 py-3 text-sm font-semibold !text-white shadow-lg transition hover:bg-[#5445c1]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
