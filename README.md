# website

Repo for the documentation website.

[Reference](https://squidfunk.github.io/mkdocs-material/reference/)

## Local Setup

### PIP

Install with pip via terminal.

```
pip install mkdocs
mkdocs serve
```
If you have trouble using the mkdocs command you can try:
```
python -m mkdocs serve
```

### Docker Compose

Ensure you have docker installed. Run the compose without detatch to get tty (terminal).

```
docker-compose up
```


## Images and Video

Images and video are large in older formats (`jpg/png/gif`). Payload size was raised as an issue, and it was decided that to reduce delays for FCP on older devices: All images submitted as part of PRs must be converted to `webp`. This includes still images and animated `gifs`, `apngs` etc. Video may be added as `webp` or `webm` if audio is required. `avif` was considered but was skipped due to low adoption rate.