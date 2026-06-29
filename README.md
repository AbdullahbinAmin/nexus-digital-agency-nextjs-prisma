# 🚀 Nexus Digital Agency - A DevOps Practice Project

Welcome to the **Nexus Digital Agency** repository! 
This project is specially designed for **DevOps Learners, Enthusiasts, and Cloud Engineers** who want to get their hands dirty with real-world deployment challenges. 

This is a high-end, production-ready Full-Stack Web Application built with **Next.js (App Router)**, **Prisma**, and **PostgreSQL**. Your mission, should you choose to accept it, is to take this raw application and build a robust, containerized CI/CD pipeline for it from scratch!

---

## 🏗️ The Application Stack
- **Frontend:** Next.js 14+ (React), Tailwind CSS, Framer Motion
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL
- **ORM:** Prisma Client

---

## 💻 Local Testing (For Developers)

If you just want to run the app locally to see how it works before doing the DevOps magic:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YourUsername/nexus-digital-agency-nextjs-prisma.git
   cd nexus-digital-agency-nextjs-prisma
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Rename `.env.example` to `.env` and configure your database string. If you don't have Postgres running locally, you can use SQLite temporarily or spin up a Postgres Docker container.

4. **Run the App:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 🎯 The DevOps Challenge (Your Mission!)

To truly learn DevOps, you shouldn't just read code—you should write it! I have left the final DevOps files in this repo as a reference, but to take this challenge, **you must delete them and build them yourself!**

### Step 1: The Reset (Clean Slate)
Once you clone the repository, delete all existing DevOps configurations to start fresh:
```bash
rm Dockerfile
rm docker-compose.yml
rm -rf .github/workflows
rm .dockerignore
```
*Now, you are looking at a raw Developer's codebase. Time to put on your DevOps hat!* 🎩

### Step 2: Dockerize the App
Your first task is to write a multi-stage `Dockerfile` for the Next.js application. 
- *Hint:* Make sure to copy the `prisma` folder and run `npx prisma generate` **after** copying the code, but make sure your `.dockerignore` is set up properly so you don't overwrite generated files with your host machine's directories!

### Step 3: Docker Compose (App + Database)
Write a `docker-compose.yml` file to orchestrate the environment.
- Create a service for a `postgres:15-alpine` database.
- Create a service for the Next.js app.
- Ensure the app can communicate with the database container securely using Environment Variables.

### Step 4: Run & Test the Containers
Run `docker compose up -d --build` to spin up your infrastructure. 
- *Challenge:* How will you run `npx prisma db push` to initialize the database tables inside your running container? Figure out the `docker exec` command!

### Step 5: Automate with CI/CD (GitHub Actions)
Create a `.github/workflows/deploy.yml` pipeline.
- Make it trigger on a push to the `main` branch.
- **The Twist:** Assume you don't have a public IP or Domain name. You must deploy this locally to your machine (or WSL) using a **GitHub Self-Hosted Runner**. 
- Write the steps in your YAML file to checkout the code, run `docker compose down`, rebuild the containers, and run database migrations automatically.

---

## 🏆 What You Will Learn
By completing this challenge, you will master:
✅ Multi-stage Docker Builds for Node.js/Next.js apps.  
✅ Overcoming Docker layer caching and path resolution bugs (specifically with Prisma).  
✅ Orchestrating multi-container environments with Docker Compose.  
✅ Building CI/CD pipelines with GitHub Actions.  
✅ Deploying locally without a public IP using GitHub Self-Hosted Runners.  

### Good Luck, Engineer! 🛠️
*If you get stuck, you can always check the commit history of this repo to see how I solved it! Feel free to fork this, complete the challenge, and tag me on LinkedIn!*
