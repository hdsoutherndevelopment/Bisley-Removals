"use client";

import { useEffect } from "react";

/**
 * The client's own Calcumate storage calculator, using the embed details from their current site.
 * Calcumate only serves it to the domain it is registered for (www.bisleyremovals.co.uk), so it is
 * rendered on the official site only. CONFIRM at launch: it loads on the live domain, and add any
 * new domain in the client's Calcumate account.
 */
export function CalcumateEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://production.calcumate.co/static/js/main.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      id="calcumate-root"
      className="min-h-[32rem]"
      data-integration="www.bisleyremovals.co.uk"
      data-integration-2=""
      data-ref="AQICAHhReAOexSsfBeJ/FMNVdjLFzyMEhuepXqwRfRaqckbrnAFyhTbtJ8hJAuu0qyKF2/nUAAAAgzCBgAYJKoZIhvcNAQcGoHMwcQIBADBsBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDCMRmTi7zwZkCbXTewIBEIA/+rWaA9WDESB2rfG0W6dph8n5E6qQWObfFVU+qSFfhYNsQIUTrHOZVtbhxZndP2S5YUKLePlpo1HMdgQg1Lnd"
      data-int="e4e95599-43f8-46a7-98b2-0fc5390b531c"
    />
  );
}
