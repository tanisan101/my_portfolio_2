# Firebase Setup Guide for Your Portfolio

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "tanishka-portfolio")
4. Enable Google Analytics (optional but recommended)
5. Click "Create project"

## Step 2: Set up Firestore Database

1. In your Firebase project console, click on "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (you can secure it later)
4. Select a location closest to your users
5. Click "Done"

## Step 3: Get Your Firebase Configuration

1. In your Firebase project console, click on the gear icon (Project settings)
2. Scroll down to "Your apps" section
3. Click on the web icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "Portfolio Website")
5. Copy the Firebase configuration object

## Step 4: Update Your Firebase Configuration

Replace the placeholder values in `firebase-config.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

## Step 5: Set up Firebase Cloud Functions (Optional - for Email Notifications)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize functions: `firebase init functions`
4. Choose your project
5. Select JavaScript or TypeScript
6. Install dependencies

## Step 6: Deploy Your Website

### Option A: Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build` (if needed)
4. Set publish directory: `.` (root directory)
5. Deploy!

### Option B: Deploy to Firebase Hosting

1. Run `firebase init hosting` in your project directory
2. Choose your Firebase project
3. Set public directory to `.` (current directory)
4. Configure as single-page app: No
5. Run `firebase deploy`

## Step 7: Test Your Contact Form

1. Visit your deployed website
2. Fill out the contact form
3. Check your Firebase Firestore console to see if messages are being stored
4. Messages will appear in the "messages" collection

## Security Rules for Firestore (Important!)

After testing, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

This allows anyone to create messages but prevents reading/updating/deleting them.

## Viewing Your Messages

You can view messages in the Firebase Console:
1. Go to Firestore Database
2. Click on the "messages" collection
3. View all submitted messages with timestamps

## Next Steps

- Set up email notifications using Firebase Cloud Functions
- Add form validation and spam protection
- Implement message status tracking
- Add admin dashboard to manage messages