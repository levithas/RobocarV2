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
