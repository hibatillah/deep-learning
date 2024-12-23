## Deep Learning Project

Deep Learning project for text sentiment analysis and audio classifications.

### Tech Stack
- Deep learning project using Flask `v3.1.0`
- Web project using Next.js `v14.2.17`

## Project Structure

- Python API is located at [`/deep_learning/app.py`](./deep_learning/app.py)
- Python models for prediction are located at [`/deep_learning/model`](./deep_learning/model)
- API interaction for predictions and their forms are located at [`/web/app/_components`](./web/app/_components)

## Development

1. Clone this repository

```bash
git clone https://github.com/hibatillah/deep-learning
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

> Use all commands to run in the project `root`. <br>
> Next command will run `web` and `deep_learning` project concurrently.

```bash
npm run dev
```

> You can run project separately using next command.

```bash
# for web
npm run dev:next

# for deep_learning
npm run dev:py
```

> [!IMPORTANT]
> Make sure to activate `venv` before running the project, specifically for `deep_learning` project.

6. Open `web` project at [localhost:3000](http://localhost:3000) and `deep_learning` project at [localhost:8000](http://localhost:8000)
