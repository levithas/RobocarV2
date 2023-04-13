import re
import subprocess


def getCPUTemp() -> float:
    temp = None
    err, msg = subprocess.getstatusoutput('sensors')
    if not err:
        m = re.findall(r'([0-9]*\.[0-9])(°C)', msg)
        if len(m) != 0:
            temp = float(m[0][0])
    return temp


def getSignalStrength() -> float:
    sgn = None
    err, msg = subprocess.getstatusoutput('iwconfig wlan0')
    if not err:
        m = re.findall(r'(Link Quality=)(..)\/(..)', msg)
        if len(m) != 0:
            sgn = float(m[0][1]) / float(m[0][2])
    return sgn
