import time
import pinyin
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By
import os
import json
import requests


options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
driver = webdriver.Chrome(options=options)

def remove(string, removestr):
    return string.replace(removestr, "")

def Login():
    with open("data/data.json") as f:
        data = json.load(f)

        username = data["username"]
        pw = data["password"]
    driver.get("https://www.zbschools.sg/cos/o.x?c=/ca7_zbs/user&func=login")
    wait = WebDriverWait(driver, 10)
    # wait.until(EC.presence_of_element_located((By.TAG_NAME, "body")))
    wait.until(EC.presence_of_element_located(("tag name", "body")))
    Login = driver.find_element('xpath', "//a[@id='login']")
    Login.click()
    user = driver.find_element('id', "inputLoginId")
    user.send_keys(username)
    password = driver.find_element('id', "inputPassword")
    password.send_keys(pw)
    button = driver.find_element('id', "btn_submit")
    button.click()

def DoQuiz(startpost=1):
    storylink = "https://www.zbschools.sg/stories-"

    driver.get(storylink + str(startpost))

    if (str(driver.current_url) != storylink + str(startpost)):
        startpost += 1
        return
    
    try:
        passage = driver.find_element('xpath', "html/body/div/div/div/div/div/div[3]/div/div[1]/div[1]/div[6]").text
        passage = remove(passage, '"')
        startquiz = driver.find_element('xpath', "//a[@class='btn btn-assign']")
        startquiz.click()
        time.sleep(1.5)
        driver.switch_to.frame('litebox_iframe')
        count = len(driver.find_elements('xpath', "/html/body/div/div/form/div"))
        for q in range(1, count):
            answer = ''
            try:
                text = driver.find_element('xpath', f"/html/body/div/div/form/div[{q}]/div[1]/div[1]/h3/span").text
            except:
                pass
            # Answer is from passage
            if '_' not in text:
                pinyin_text = driver.find_element('xpath', f"/html/body/div/div/form/div[{q}]/div[1]/div[1]/h3/span/b").text
                answer = pinyin.get(pinyin_text)
            elif "_" in text:
                Output = text.split('_')
                first = passage.find(Output[0])
                last = passage.find((Output[len(Output) - 1]))
                r = range((last - first) - len(Output[0]))

                for n in r:
                    answer = passage[n + first + len(Output[0])]

            # Find correct option
            for a in range(1, count):
                option_text = driver.find_element('xpath', f"/html/body/div/div/form/div[{q}]/div[2]/table/tbody/tr[{a}]/td[2]").text
                option = driver.find_element('xpath', f"/html/body/div/div/form/div[{q}]/div[2]/table/tbody/tr[{a}]/td[1]/input")

                if answer == option_text:
                    option.click()

        submit = driver.find_element('xpath', f"/html/body/div/div/form/div[{count}]/input")
        submit.click()
    except:
        pass
    
    startpost += 1

    with open("data/start_id.txt", "w") as f:
        f.write(str(startpost))

def main(start_id=False):
    if not start_id:
        with open("data/bot.json") as f:
            CURRENT_VERSION = json.load(f)["version"]

        print("\nWelcome to ZB Bot!")

        # Check for updates
        with open("data/bot.json") as f:
            CURRENT_VERSION = json.load(f)["version"]
            
        res = requests.get("https://zb-bot.vercel.app/api/get-version")
        res_json = res.json()

        if res_json["version"] != CURRENT_VERSION:
            print("\nALERT: UPDATE AVAILABLE! Download the newest version at https://zb-bot.vercel.app. Remember to save your start id!\n")

        if not os.path.exists("data/data.json"):
            print("\nPlease enter your ZaoBao username and password (this is a one time process)")
            inp_username = input("\nEnter your username: ")
            inp_password = input("Enter your password: ")

            with open("data/data.json", "w") as f:
                json.dump({"username": inp_username, "password": inp_password}, f)
            with open("data/start_id.txt", "w") as f:
                f.write("1")
                

        with open("data/start_id.txt") as f:
            start_id = f.read()

        if start_id != "1":
            choice = input(f"\nWould you start from where you last stopped, ID {start_id}? (y/n): ")
            if choice.lower() == "y":
                startpost = int(start_id)
            else:
                startpost = int(input('\nEnter Start ID: '))
        else:
            startpost = int(input('\nEnter Start ID (Recommended: Start from id 1 all the way to 27000, continue from where you last stopped): '))
        
        Login()
        while(1):
            try:
                DoQuiz()
            except Exception as e:
                print(e)
                while 1:
                    pass

    else:
        startpost = int(start_id)
        print(startpost)
        Login()
        while(1):
            try:
                DoQuiz(startpost)
                startpost += 1
            except Exception as e:
                print(e)
                while 1:
                    pass