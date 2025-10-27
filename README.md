# Warning
 This project is meant to be used in a closed, offline network! 
 The project contains NOT up-to-date packages with possible vulnerabilities!
 Developement build ONLY!!!

(Changes are on the way)
 
 # Copy Data to robocar
```
cd "robocar V2"
scp -r * pi@192.168.0.155:/home/pi/robocar
```
# Work on Raspberry with mounted drive
```
sshfs pi@192.168.0.155:/home/pi /mnt/robocar
```
It is important to mount the pi directory,because else the project
will not load error-free.

 # Ideas to Improve
 ### Seperate Frontend and Backend:
Frontend could be running on a different machine than backend. This would improve performance of backend and frontend.
