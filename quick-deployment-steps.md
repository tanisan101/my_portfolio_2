# Quick Deployment Steps

## 🚀 Ready to Deploy? Follow These Steps:

### Step 1: Complete Firebase Setup (5 minutes)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project: "tanishka-portfolio"
3. Enable Firestore Database (test mode)
4. Copy your config from Project Settings > General > Your apps
5. Replace values in `firebase-config.js`

### Step 2: Deploy to Netlify (3 minutes)
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Deploy settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Step 3: Test Your Live Site (2 minutes)
1. Visit your new Netlify URL
2. Fill out the contact form
3. Check Firebase Console > Firestore > messages collection
4. Verify your message appears there

## 🎉 You're Live!

Your portfolio is now deployed with a working contact form that saves messages to Firebase. Visitors can reach you through the contact form, and you can view all messages in your Firebase Console.

### What's Working:
✅ Responsive design across all devices
✅ Smooth animations and interactions
✅ Contact form with Firebase integration
✅ Professional portfolio showcase
✅ Fast loading times
✅ Mobile-friendly navigation

### View Your Messages:
Firebase Console → Firestore Database → messages collection

Each message includes:
- Name and email of sender
- Message content
- Timestamp
- Status (unread/read)