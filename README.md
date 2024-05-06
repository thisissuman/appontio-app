

# Appointo

This is a dynamic appointment booking screen developed for the Appointo app using React. You can see the DEMO here: 👉 https://appontio-app.vercel.app/ 👈

## Installation

To install and run this application locally, follow these steps:

```bash
git clone https://github.com/thisissuman/appontio-app.git
```

Navigate into the cloned directory:

```bash
cd appontio-app
```
Install dependencies and To run the application locally, use:
```bash
npm install
npm run dev
```
This will start the development server. You can view the application by navigating to http://localhost:3000 in your web browser.


------------------------------------------------------
**_Brief Explanation of Design Choices and Challenges Design Choices_**

**UI Implementation:** 
- The UI design was implemented according to the provided Figma design. HTML and CSS were used to build the UI components.

**Integration with Backend:** 
- Utilized the provided mock API endpoint to fetch available timeslots dynamically.

**User Feedback:** 
- Implemented feedback animations and `loader` animations to provide a smooth user experience.

**State Management:** 
- `Utilized Redux Toolkit` for state management to ensure clean and effective state management throughout the application

**Challenges Faced:**
- `API Integration`: Ensuring seamless integration with the backend API and handling asynchronous data fetching posed some challenges, but they were overcome by using async/await functions and some debugging.
