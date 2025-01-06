## Deep Learning Project

Deep Learning project for **text sentiment analysis**, **audio and image classifications**.

### Tech Stack
- Deep learning project using Flask `v3.1.0`
- Web project using Next.js `v14.2.17`
- Python `v3.12`

### Project Structure

- Python API is located at [`app.py`](./deep_learning/app.py)
- Python models for prediction are located at [`/model`](./deep_learning/model) directory
- API interaction for predictions and their forms are located at [`/app/_components`](./web/app/_components) directory

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

1. Install root depedencies

```bash
npm install
```

2. Install `web` depedencies

```bash
cd web
npm install
```

3. Install `deep_learning` depedencies

```bash
cd deep_learning
venv/Scripts/activate  # activate venv
pip install -r requirements.txt
```
> Make sure to activate venv before install the depedencies

### Running Project

1. Run `web` project

```bash
npm run dev:next
```

2. Run `deep_learning` project

```bash
npm run dev:py
```

3. Run project concurrently

```bash
npm run dev
```
> Make sure to activate venv before running `deep_learning` project