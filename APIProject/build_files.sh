pip install -r requirements.txt
pushd ../frontend
npm install
npm run build
popd
python3.9 manage.py collectstatic
python3.9 manage.py makemigrations
