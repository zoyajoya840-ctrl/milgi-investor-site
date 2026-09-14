# MILGI Final Investor Website

This is the **single investor-facing landing experience**.

Run locally:

```powershell
cd milgi-investor-site
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

The site is intentionally a clean presentation layer. The existing Passenger, Partner (`driver-app`) and Admin (`admin-web`) applications remain in the parent project and are not deleted or altered.

Next deployment step: deploy this `milgi-investor-site` as the public landing page, then connect the three experience buttons to their deployed app URLs (or mount them under the same domain).


## One-click local investor demo
On Windows, double-click `START_MILGI_INVESTOR_DEMO.bat`. It starts Passenger, Partner, Admin and the Investor Hub on fixed local ports and opens the Hub in your browser. The Hub cards then open the corresponding prototype.
