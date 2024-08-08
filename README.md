### Step 2: Install `gh-pages` Package

The `gh-pages` package simplifies the deployment process to GitHub Pages. Install it as a development dependency:

`npm install gh-pages --save-dev`

### Step 3: Update `vue.config.js`

Create or update `vue.config.js` at the root of your project to specify the public path:

`module.exports = {   publicPath: process.env.NODE_ENV === 'production' ? '/<REPOSITORY_NAME>/' : '/' }`

Replace `<REPOSITORY_NAME>` with the name of your GitHub repository.

### Step 4: Modify `package.json`

Add the deployment scripts to your `package.json`:

`"scripts": {   "build": "vue-cli-service build",   "deploy": "gh-pages -d dist" }`

Ensure your repository is initialized with Git and the remote origin is set to your GitHub repository:

`git init git remote add origin https://github.com/<USERNAME>/<REPOSITORY_NAME>.git`

Replace `<USERNAME>` and `<REPOSITORY_NAME>` with your GitHub username and repository name, respectively.

### Step 5: Build and Deploy

Run the following commands to build your Vue.js project and deploy it to GitHub Pages:

`npm run build npm run deploy`

### Step 6: Configure GitHub Pages

1. Go to your GitHub repository.
2. Navigate to the **Settings** tab.
3. Scroll down to the **GitHub Pages** section.
4. Select the branch `gh-pages` and the `/root` folder as the source.
5. Save the settings.

Your Vue.js application should now be live on GitHub Pages at `https://<USERNAME>.github.io/<REPOSITORY_NAME>/`.

### Additional Tips

- Make sure your repository is public; GitHub Pages for private repositories requires a GitHub Pro account.
- If you encounter caching issues, try appending a query string (e.g., `?v=1`) to your assets' URLs.
