# Hostilio Website - Add Navigation to Pricing Buttons

## Task: Make "Get Started" buttons navigate to control panel

### Plan:

- [x] Analyze current Pricing.js component structure
- [x] Confirm requirements (same URL, new tab for all buttons)
- [x] Update Pricing.js component to add onClick handler
- [x] Implementation completed successfully

### Implementation Details:

- URL: https://control.hostilio.cloud/
- Behavior: Open in new tab
- Apply to: All three pricing plan buttons (Starter/Free, Super Premium, Business)

### Changes Made:

- Added onClick handler to the "Get Started" button in components/Pricing.js
- Used `window.open("https://control.hostilio.cloud/", "_blank")` to open URL in new tab
- All three pricing plan buttons now have the same navigation functionality
