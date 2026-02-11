# 🚀 Mofarm CMS Setup Guide

## Overview

This website supports **Sanity CMS** for easy property management. Your admin can:
- Add new properties with images
- Edit prices, descriptions, features
- Delete properties
- All changes appear on website in ~1 minute!

---

## 📋 Quick Setup (30 minutes)

### Step 1: Create Sanity Account

1. Go to **https://www.sanity.io**
2. Click **"Get started for free"**
3. Sign up with Google or email

### Step 2: Create New Project

1. Click **"Create new project"**
2. Project name: **"Mofarm Properties"**
3. Dataset: **"production"**
4. Copy your **Project ID**

### Step 3: Install Sanity Studio

```bash
npm install -g @sanity/cli
sanity login
mkdir mofarm-studio && cd mofarm-studio
sanity init
```

### Step 4: Add Property Schema

Create `schemas/property.js` with the property fields (name, location, price, images, etc.)

### Step 5: Deploy Studio

```bash
sanity deploy
```

Your admin dashboard will be at: `https://mofarm-admin.sanity.studio`

### Step 6: Add Environment Variables to Vercel

1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your-project-id
   - `NEXT_PUBLIC_SANITY_DATASET` = production
3. Redeploy

---

## 👤 For Your Admin

### Adding a Property

1. Go to `https://mofarm-admin.sanity.studio`
2. Click **Property** → **+**
3. Fill in: Name, Location, Prices, Description, Features
4. Upload images (drag & drop)
5. Click **Publish**

### Editing a Property

1. Click on the property
2. Make changes
3. Click **Publish**

---

## ⏱️ How Fast Do Changes Appear?

| Action | Time |
|--------|------|
| Add property | ~60 seconds |
| Edit property | ~60 seconds |
| Delete property | ~60 seconds |

---

## 🔒 Add Team Members

1. Go to sanity.io → Your Project → Settings → Members
2. Click **Add member**
3. Enter admin's email
4. Set role: **Editor**

---

## 📞 Need Help?

- Sanity Docs: https://www.sanity.io/docs
- Sanity Community: https://slack.sanity.io
