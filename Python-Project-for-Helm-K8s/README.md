# Python Flask Project for Helm K8s

To Build and run the docker image
```sh
docker build --tag flask-mine .
docker run -p 9001:9001 flask-mine
```

To push and pull the docker image
```sh
docker login
docker tag flask-mine avian19/python-flask-application:latest
docker push avian19/python-flask-application:latest
docker pull avian19/python-flask-application:latest
```