# simulacao-whisper

    sudo apt update && sudo apt upgrade -y
    
    sudo apt install git

    git clone https://github.com/renatex333/simulacao-whisper.git

    cd simulacao-whisper/

    sudo apt install python3-pip -y

    sudo apt install uvicorn -y

    pip install -r requirements.txt

    uvicorn app.main:app --reload

    uvicorn app.main:app --host 0.0.0.0 --port 8000
    