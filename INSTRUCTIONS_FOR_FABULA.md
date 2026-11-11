# 🌟 Complete Owner & AI Guide — Fabula Ayman's Portfolio

Welcome Fabula! This is your official guide to managing, updating, and customizing your professional portfolio website (**Content Creator | Scriptwriter | Creative**).

* 🌐 **Live Website:** [https://youhannamaher.github.io/fabula-portfolio/](https://youhannamaher.github.io/fabula-portfolio/)
* ⚙️ **GitHub Repository:** [https://github.com/youhannamaher/fabula-portfolio](https://github.com/youhannamaher/fabula-portfolio)
* 🚀 **Build & Deployment Status:** [View GitHub Actions](https://github.com/youhannamaher/fabula-portfolio/actions)

---

## ⚡ The 2 Ways to Update Your Website

You have **two super easy methods** to update your website. You can pick whichever you prefer:

### Method 1: 100% In Your Browser (No Terminal, No Code)
You can edit text, change video views, and upload new videos **directly on GitHub in your web browser**:
1. Click any of the direct links below.
2. Click the **Pencil icon (Edit)** or drag-and-drop new files.
3. Paste the updated text given by your AI (Claude / ChatGPT).
4. Click the green button **"Commit changes"**.
5. Done! GitHub will automatically rebuild and publish your site in **1 to 2 minutes**!

---

### Method 2: On Your Windows Computer (Using 1-Click Batch Files)
If you have the project folder on your computer:
* Double-click **`open-portfolio-preview.cmd`** to preview the site locally on your PC & phone.
* Double-click **`update-videos-preview.cmd`** if you added videos or changed views locally.
* Double-click **`push-to-github.cmd`** to upload your changes and publish them live to the internet!

---

## 🔗 Direct 1-Click Links to Edit Your Files

Click any link below to jump straight to editing that specific part of your website:

| What you want to change | Direct GitHub Link |
| :--- | :--- |
| 👁️ **Change Video Views & Titles** | [👉 Click to edit `metadata.json`](https://github.com/youhannamaher/fabula-portfolio/edit/main/public/videos/metadata.json) |
| 📝 **Change Bio, Titles, Job Experiences, Skills & Project Links** | [👉 Click to edit `profile.ts`](https://github.com/youhannamaher/fabula-portfolio/edit/main/src/data/profile.ts) |
| 🎥 **Upload New Video Files (.mp4, .mov)** | [👉 Click to upload videos](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/videos) |
| 🖼️ **Upload New Profile Photo or Logo** | [👉 Click to upload images](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/images) |
| 📄 **Upload New CV (PDF)** | [👉 Click to upload CV](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/documents) |
| 🚀 **Check if your changes are live** | [👉 Click to view Deployment Progress](https://github.com/youhannamaher/fabula-portfolio/actions) |

---

## 🤖 Master AI System Prompt (Copy & Paste to Claude / ChatGPT)

Whenever you want to make changes using an AI assistant (Claude, ChatGPT, or Gemini), **copy and paste this prompt first**:

```text
You are my personal technical assistant helping me maintain and update my professional portfolio website (Fabula Ayman - Content Creator, Scriptwriter & Creative).

The site is built with React 19, TypeScript, Tailwind CSS, and Vite, and is automatically deployed on GitHub Pages: https://youhannamaher.github.io/fabula-portfolio/

Repository Architecture:
1. "src/data/profile.ts":
   - Personal info: name, title, email, location, languages, linkedin, cvPath, profileImage, about
   - skills: list of { title, description }
   - experience: list of { role, company, period, description }
   - projects: list of { title, category, role, objective, tools, link, logo }

2. "public/videos/metadata.json":
   - filename: exact video filename in public/videos/
   - title: video title displayed on the site
   - category: e.g. "Branding", "Documentary", "Travel"
   - project: e.g. "Williams Art", "Documentary & Travel" (the filter tabs and project sections on the website are generated AUTOMATICALLY from this field!)
   - views: optional, e.g. "15K+ views" or "197K+ views" (omit or leave "" to hide the views badge)
   - order: display order number (1, 2, 3...)

Deployment & Workflow:
- Any commit to the "main" branch triggers GitHub Actions to run the build (which automatically re-indexes metadata.json into videos.json) and updates the live site in 1-2 minutes.
- On Windows locally, "push-to-github.cmd" commits and pushes changes.
- Note: GitHub's browser file upload supports files up to 25 MB; for larger video files, add them locally and double-click "push-to-github.cmd".

Rules for your responses:
- Always provide the EXACT code snippet ready to be copy-pasted.
- Specify the exact file path and GitHub edit link so I can paste it immediately.
- Explain the steps simply without complex developer jargon.
```

---

## 📋 Step-by-Step AI Task Templates

### Task 1: Updating Video View Counts
1. Click: [Edit `metadata.json` on GitHub](https://github.com/youhannamaher/fabula-portfolio/edit/main/public/videos/metadata.json)
2. Copy the text inside the editor and paste it to Claude with this prompt:
   > *"Here is my `metadata.json` file. I want to change the view count of 'William's Passion' to '50K views' and 'Graeco-Roman Museum' to '25K views'. Please give me the updated file content."*
3. Copy the updated code from Claude, replace the text on GitHub, and click **"Commit changes"**.
4. Within 1-2 minutes, the new view counts will be live!

---

### Task 2: Adding Your Freelance Project Link
1. Click: [Edit `profile.ts` on GitHub](https://github.com/youhannamaher/fabula-portfolio/edit/main/src/data/profile.ts)
2. Scroll to line 85 (`Freelance Scriptwriting Project`).
3. Replace the placeholder URL:
   ```ts
   link: "https://your-actual-project-link.com",
   ```
4. Click **"Commit changes"**.

---

### Task 3: Adding a New Job or Experience
1. Click: [Edit `profile.ts` on GitHub](https://github.com/youhannamaher/fabula-portfolio/edit/main/src/data/profile.ts)
2. Ask Claude:
   > *"Here is my `profile.ts`. I want to add a new experience: Role: Senior Scriptwriter, Company: Brand X, Period: 2024 - Present, Description: Led video storytelling and ad concept development. Please update the experience section."*
3. Replace the file content and click **"Commit changes"**.

---

### Task 4: Adding a New Video to the Gallery
1. Click: [Upload Videos to `public/videos/`](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/videos)
2. Drag and drop your `.mp4` or `.mov` file (e.g. `New_Summer_Ad.mov`).
3. Click **"Commit changes"** to save the video file.
4. Next, click: [Edit `metadata.json`](https://github.com/youhannamaher/fabula-portfolio/edit/main/public/videos/metadata.json)
5. Ask Claude:
   > *"I uploaded a new video named 'New_Summer_Ad.mov'. Here is my current `metadata.json`. Please add an entry for it with Title: 'Summer Brand Campaign', Category: 'Branding', Project: 'Williams Art', Views: '18K views', Order: 9."*
6. Paste the updated JSON into GitHub and click **"Commit changes"**.

---

### Task 5: Updating Your CV
1. Save your new CV as a PDF file named **`FABULA.CV.pdf`**.
2. Click: [Upload to `public/documents/`](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/documents)
3. Drag and drop your `FABULA.CV.pdf` file and click **"Commit changes"**.

---

### Task 6: Updating Your Profile Photo
1. Name your new photo **`profile.jpeg`**.
2. Click: [Upload to `public/images/`](https://github.com/youhannamaher/fabula-portfolio/upload/main/public/images)
3. Drag and drop `profile.jpeg` and click **"Commit changes"**.

---

## ⏱️ How to Know When Changes Are Live?
After clicking **"Commit changes"** on GitHub:
1. Open the [GitHub Actions page](https://github.com/youhannamaher/fabula-portfolio/actions).
2. You will see a yellow running circle called **"Deploy static content to Pages"**.
3. When it turns into a green checkmark `✔` (usually 60–90 seconds), your live website at [https://youhannamaher.github.io/fabula-portfolio/](https://youhannamaher.github.io/fabula-portfolio/) is updated!
4. Simply refresh your browser page (or press `Ctrl + F5` to clear your cache).

