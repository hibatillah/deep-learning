## Text Sentiment Analysis

Team 1 Deep Learning project using text sentiment analysis.

### Tech Stack
- Deep learning project using Flask `v3.1.0`
- Web project using Next.js `v14.2.17`

## Development

1. Clone this repository

```bash
git clone https://github.com/hibatillah/deeplearning_team1
```

2. Create virtual environment for python

```bash
# ./deep_learning
python -m venv venv
```

3. Activate virtual environment (venv)

```bash
# ./deep_learning
venv\Scripts\activate
```

> venv active based on session.

4. Install Depedencies

```bash
# ./deep_learning
pip install -r requirements.txt
```

```bash
# ./
# ./web
npm install
```

5. Run project

```bash
npm run dev
```

> This command will run `web` and `deep_learning` project concurrently. <br>
> Run project separately using next command.

```bash
# for web
npm run dev:next

# for deep_learning
npm run dev:py
```

> [!IMPORTANT]
> Use all commands to run in the project root. <br>
> Make sure to activate `venv` before running the project, specifically for `deep_learning` project.

6. Open `web` project at [localhost:3000](http://localhost:3000) and `deep_learning` project at [localhost:8000](http://localhost:8000)
