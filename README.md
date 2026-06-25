# Zhao Yuen Wong — GitHub Portfolio Website

A static, responsive GitHub Pages portfolio website inspired by the structure of the Majd Framer portfolio template, customised with a purple/pink visual system and content from Zhao Yuen Wong's resume.

## Files

```text
index.html          Main portfolio page
styles.css          Full responsive styling and animations
script.js           Mobile menu, cursor glow, reveal animations
assets/             Resume PDF, favicon, texture asset
```

## How to use on GitHub Pages

1. Create a new GitHub repository, for example `zhaoyuenw.github.io` or `portfolio`.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/root`, then save.
6. Your portfolio will be available from the GitHub Pages URL once deployed.

## Customisation checklist

- Replace the GitHub link if your username is different from `zhaoyuenw`.
- Add real project repository/demo links when ready.
- Replace the gradient project thumbnails with screenshots if you want more visual proof of work.
- Update the availability line in the hero section depending on the role you are applying for.
- Keep the resume PDF in `assets/zhaoyuenwong_resume.pdf` or update the link in `index.html`.

## Design notes

- Main colours: purple, pink, rose, and dark plum.
- Layout style: large editorial hero, sticky pill navigation, marquee/ticker, rounded cards, featured project cards, experience timeline, skill cards, and bold footer.
- No build step needed; this is plain HTML/CSS/JS.


## Updating photos

Profile and project images live in `assets/images/`. To replace them, keep the same file names and upload new versions:

- `profile.jpg`
- `strive.jpg`
- `ami.jpg`
- `gridbug.jpg`
- `storyweaver.jpg`

If you use different file names, update the matching `src="assets/images/..."` paths in `index.html`.
