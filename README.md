## Deep Learning Project

Deep Learning project for **text sentiment analysis**, **audio and image classifications**

### Tech Stack
- Deep learning project using Flask `v3.1.0`
- Web project using Next.js `v14.2.17`
- Python `v3.12`

## Project Structure

- Python API is located at [`/deep_learning/app.py`](./deep_learning/app.py)
- Python models for prediction are located at [`/deep_learning/model`](./deep_learning/model)
- API interaction for predictions and their forms are located at [`/web/app/_components`](./web/app/_components)

## Installation

### Create python venv

1. Create venv

```bash
cd deep_learning
python -m venv venv
```

2. Activate venv

```bash
venv/Scripts/activate
```
> Make sure to activate venv inside `deep_learning` directory

### Install Depedencies

1. Install web depedencies

```bash
cd web
npm install
```

2. Install deep_learning depedencies

```bash
cd deep_learning
venv/Scripts/activate  # activate venv
pip install -r requirements.txt
```

### Running Project

1. Run deep_learning project

```bash
npm run dev:py
```

2. Run web project

```bash
npm run dev:next
```

3. Run project concurrently

```bash
npm run dev
```
> Make sure to activate venv before running `deep_learning` project