# FRIX Trainingen Website

Static website for FRIX Trainingen focused on:

- Cloud Fundamentals
- Cloud Development
- IT and Data skills
- ML/AI as additional knowledge

## Run locally

Open index.html directly in your browser, or use a local static server.

## Contact

- Website: https://frix.tech
- E-mail: info@frix.tech

## Publish with GitHub Pages

1. Create a new GitHub repository and push this folder to the default branch (main).
2. In GitHub, open Settings -> Pages.
3. Under Build and deployment:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Save and wait for the first deployment.

## Custom domain setup

1. In Settings -> Pages, set your custom domain to: frix.tech
2. In this repo root, create a CNAME file containing only:

   frix.tech

3. Configure DNS records at your DNS provider.

If you use a subdomain (recommended):

- Type: CNAME
- Name/Host: www
- Value/Target: <your-github-username>.github.io

Recommended behavior:

- Keep frix.tech as primary in GitHub Pages
- Point www.frix.tech to <your-github-username>.github.io or redirect www -> frix.tech at your DNS provider

For apex/root domain support, GitHub currently documents these A records:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Optional AAAA records:

- 2606:50c0:8000::153
- 2606:50c0:8001::153
- 2606:50c0:8002::153
- 2606:50c0:8003::153

4. Enable Enforce HTTPS in Pages settings after DNS has propagated.

## Suggested next step

Push the current CNAME file and verify that frix.tech resolves before enabling Enforce HTTPS.
