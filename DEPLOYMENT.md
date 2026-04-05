# Deployment Setup

The monorepo deploys **three** separate sites to **three** GitHub Pages targets:

| App | Subdomain | Target repo |
|-----|-----------|-------------|
| `apps/landing` | `emlbanet.com` | **this repo** (gh-pages branch) |
| `apps/homemade-food` | `homemadefood.emlbanet.com` | `emlbanet-homemade-food` (external) |
| `apps/cheesecake` | `cheesecake.emlbanet.com` | `emlbanet-cheesecake` (external) |

---

## One-time manual setup

### 1. Switch this repo's Pages source

GitHub → this repo → **Settings → Pages**:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

(The old workflow used the "GitHub Actions" source — we switched to branch-based so all three apps use the same `peaceiris/actions-gh-pages` action.)

### 2. Create two new target repos

On GitHub, create these **empty** repos (no README, no .gitignore):

- `emlbanet-homemade-food`
- `emlbanet-cheesecake`

For each one, go to **Settings → Pages** and set:
- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)` — (the branch won't exist until the first deploy; that's fine, come back after)

### 3. Create a Personal Access Token (PAT)

The homemade-food and cheesecake workflows need to push to other repos, which requires a PAT.

GitHub → **Settings → Developer settings → Personal access tokens → Fine-grained tokens** → **Generate new token**:
- **Name:** `emlbanet-deploy`
- **Expiration:** whatever you're comfortable with (1 year is reasonable)
- **Repository access:** only select `emlbanet-homemade-food` and `emlbanet-cheesecake`
- **Repository permissions:** `Contents: Read and write`

Copy the generated token.

### 4. Add the PAT as a repo secret

This repo → **Settings → Secrets and variables → Actions** → **New repository secret**:
- **Name:** `DEPLOY_TOKEN`
- **Secret:** paste the PAT

### 5. Configure DNS

At your domain registrar (where `emlbanet.com` is managed), add:

| Record | Host | Value |
|--------|------|-------|
| A | `@` (apex) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `homemadefood` | `<your-github-username>.github.io` |
| CNAME | `cheesecake` | `<your-github-username>.github.io` |

(Replace `<your-github-username>` with your actual GitHub username. These are GitHub Pages' official IPs.)

### 6. First deploy

Trigger each workflow manually to verify:
- GitHub → this repo → **Actions** → **Deploy Landing** → **Run workflow**
- GitHub → this repo → **Actions** → **Deploy Homemade Food** → **Run workflow**
- GitHub → this repo → **Actions** → **Deploy Cheesecake** → **Run workflow**

After the first deploy of each, go back to each target repo's **Settings → Pages** and confirm the `gh-pages` branch is selected. GitHub will auto-provision SSL certs (can take 15-30 min per subdomain).

---

## Ongoing deploys (automatic)

Each workflow is path-filtered: it only runs when its own app or the shared `packages/ui` changes.

- Change `apps/landing/**` → deploys landing
- Change `apps/homemade-food/**` → deploys homemade
- Change `apps/cheesecake/**` → deploys cheesecake
- Change `packages/ui/**` → deploys **all three**

You can also trigger any workflow manually via **Actions → (workflow name) → Run workflow**.

---

## Local development

```bash
# Install once
npm install

# Run any app locally
npm run dev:homemade
npm run dev:cheesecake
npm run dev:landing

# Build any app
npm run build:homemade
npm run build:cheesecake
npm run build:landing

# Build everything
npm run build
```
