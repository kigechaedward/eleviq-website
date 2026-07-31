# Add MyHobbyPlan Section and Link

Add a dedicated section and link for the "MyHobbyPlan" project, which is a flagship product of Eleviq.

## Proposed Changes

### Data Layer

#### [MODIFY] [projects.js](file:///C:/Users/kigec/.copilot/chats/79aaaa64-23d9-42f4-af21-83db9a367d8f/src/data/projects.js)
- Update "HobbyPlan" to "MyHobbyPlan".
- Add `url` and `featured: true` properties.

### UI Layer

#### [MODIFY] [Home.jsx](file:///C:/Users/kigec/.copilot/chats/79aaaa64-23d9-42f4-af21-83db9a367d8f/src/pages/Home.jsx)
- Add a "Featured Product" section highlighting MyHobbyPlan.
- Include a call-to-action link to the project's website.

#### [MODIFY] [Portfolio.jsx](file:///C:/Users/kigec/.copilot/chats/79aaaa64-23d9-42f4-af21-83db9a367d8f/src/pages/Portfolio.jsx)
- Update the project grid to make cards clickable if they have a `url`.

## Verification Plan

### Automated Tests
- N/A (UI changes)

### Manual Verification
- Verify that the "Featured Product" section appears on the Home page.
- Verify that clicking the link on the Home page or Portfolio page correctly redirects to `https://kigechaedward.github.io/Myhobbyplan-website/index.html`.
