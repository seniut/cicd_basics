# Jenkins Docker Container

0.Install Docker on your machine.

1.Create a bridge network in Docker:
```
docker network create jenkins
```
2.Run a docker:dind Docker image:
```
docker run --name jenkins-docker --rm --detach ^
  --privileged --network jenkins --network-alias docker ^
  --env DOCKER_TLS_CERTDIR=/certs ^
  --volume jenkins-docker-certs:/certs/client ^
  --volume jenkins-data:/var/jenkins_home ^
  --volume /var/run/docker.sock:/var/run/docker.sock ^
  --publish 2376:2376 ^
  docker:dind
```
3.Build a new docker image from customise Dockerfile and assign the image a meaningful name, e.g. "myjenkins-blueocean:2.332.3-1":
```
docker build -t myjenkins-blueocean:2.332.3-1 .
```

4.Run your own myjenkins-blueocean:2.332.3-1 image as a container in Docker using the following docker run command:
```
docker run --name jenkins-blueocean --restart=on-failure --detach ^
  --network jenkins --env DOCKER_HOST=tcp://docker:2376 ^
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^
  --volume jenkins-data:/var/jenkins_home ^
  --volume jenkins-docker-certs:/certs/client:ro ^
  --volume /var/run/docker.sock:/var/run/docker.sock ^
  --privileged -v /var/run/docker.sock:/var/run/docker.sock ^
  --publish 8080:8080 --publish 50000:50000 myjenkins-blueocean:2.332.3-1
```

5.Browse to http://localhost:8080 (or whichever port you configured for Jenkins when installing it) and wait until the Unlock Jenkins page appears. 

6.Go to Docker log and take a password:
```
docker logs jenkins-blueocean
``` 
7.Customize Jenkins with plugins.

8.Creating the first administrator user.
