from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/transcribe/")
async def transcribe():
    return {"message": "Transcription"}