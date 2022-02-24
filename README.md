## PALECLICK V1.2 [![MIT License](https://img.shields.io/badge/LICENSE-MIT-brightgreen?style=for-the-badge)]

An AutoClicker designed for those who are terrible at clicking and Minecraft PvP.
## Built with ❤️ by Nitlix

* [Nitlix](https://github.com/nitlix) - The creator of this project
* This app is still being developed. It may have some bugs.

## Content:
* About Paleclick
* Documentation
* How? Is this safe?
* Community
* Support


# 1. 🎨 About PALECLICK

In short terms, Paleclick is trying to achieve a true simulation of regular clicking by generating human-like delay times.

### You can see this in our Click (Speed & Delay) Comparison below.

* OP Auto Clicker 3.0 (Regular)
<img src="https://user-images.githubusercontent.com/66027553/155401193-403e7938-def9-44f0-b93a-d43aec27a29a.png" width="433" height="133">

* Paleclick (Advanced clicking engine)
<img src="https://user-images.githubusercontent.com/66027553/155401334-93931cf9-9638-4b29-b8b4-36fbdfa6f8d7.png" width="433" height="133">

**❗ I would like to quickly point out that your usage of this script will be tracked. But it is only for statistics, you are not going to be sending us any other info than just the fact that your script is open and what type of clicking you are using.**

# 2. 📚 Documentation

The Paleclick program reads all of its configuration data. Please keep in mind that if you manually open that file and start playing around with some of the properties, it will become unusable and unreadable.

**❗ Your configuration might be reset because of this.**

**Files included in the package:**
* PaleClick.exe

**❗ config.json will be downloaded and installed. This is why this .exe file might be flagged as a virus.**
* It is installed everytime the script notices that it is corrupt or does not exist.


### ✨After researching and looking into different clicking methods, we have come up with several of the most popular ones:
* Jitter Clicking
* Butterfly Clicking
* Delayed Drag Clicking (Normal Drag Clicking)
* Continuous Drag Clicking
* Regular Clicking

### ✅ You are able to choose them in the config. 
However, you can also create your own clicking methods! (And edit the default ones as well of course)

## ➡ To do that, open the _config.json_ file
I will breafly explain what the variables mean.

The clicking methods are stored inside **mconfig**
You can add and copy clicking methods to add one of your own!







**🎀Clicking groups:** The times when you click the mouse several times that are different to the overall clicking delays. 
A great example might be ButterFly Clicking, where you click on the button twice with your two fingers (Low Delay) and then do that again (High Delay)
They are stored under **groups** in the clicking method.

❗ If there isn't a specific clicking group, set **repeat** to 1 and all the other variables inside to **0**

**🎀All cooldowns:** These are the cooldowns between the clicking groups (Or individual clicks as above)
The range means the amount of randomness (+-) of ms of delay.

**🎀Overdrive:** Probably the most confusing one. To simulate human behaviour, we have to include sudden spikes and drops in the delay.
Those are some of the reasons for this kind of human behaviour:
* Hands getting tired
* Sudden Jitters
* Accidental Double Clicks (Mechanical)
* Literal Lag (Mechanical)
* And more.

You can configure the overdrive chances inside the **chance** variable.
You can also configure the overdrive amounts inside the **amount** variable.


**🎀Drive:** This is a slow change of overall cps. The cps usually changes according to how long you click (Going back to the point of getting tired).

This variable will change the overall delay between the groups.
The configuration of this file is similar to the configuration of **overdrive**.



