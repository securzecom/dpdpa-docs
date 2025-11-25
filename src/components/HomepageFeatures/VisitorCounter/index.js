import React, { useEffect, useState } from 'react';

const ABACUS_URL =
  'https://abacus.jasoncameron.dev/hit/dpdpaedu_visits/visits';

export default function VisitorCounter() {
  const [count, setCount] = useState('…'); // string so we can show N/A too

  useEffect(() => {
    if (typeof window === 'undefined') return;

    console.log('[VisitorCounter] mounted, calling Abacus…');

    fetch(ABACUS_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log('[VisitorCounter] Abacus response:', data);
        if (typeof data.value === 'number') {
          setCount(String(data.value));
        } else {
          setCount('N/A');
        }
      })
      .catch((e) => {
        console.error('[VisitorCounter] Abacus error:', e);
        setCount('N/A');
      });
  }, []);

  return (
    <span>
      Visits:&nbsp;<strong>{count}</strong>
    </span>
  );
}
