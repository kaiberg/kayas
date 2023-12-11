import argon2
from datetime import datetime
from fastapi import HTTPException
import secrets
from argon2 import PasswordHasher

def CreateSecret(SecretClass):
    db_ID = maxReads = message = expire = createOn = password = ""

    sql = "INSERT INTO messages (ID, maxReads, message, expire, createOn, password) VALUES (%s, %s,%s, %s,%s, %s)"

    try:
        #maxReads
        if SecretClass.maxReads > 0: 
            maxReads = SecretClass.maxReads
        
        #expire
        if SecretClass.expire != "":
            try:
                current_date = datetime.now()
                if datetime.strptime(SecretClass.expire, "%Y-%m-%dT%H:%M:%S.%f") > current_date: 
                    expire = SecretClass.expire
                    print('expire set')
                else: 
                    raise HTTPException(status_code=400, detail="Expire time is in the past")
            except:
                raise HTTPException(status_code=400, detail="Invalid expire time")
        
        #createOn
        if SecretClass.createOn != "":
            try:
                current_date = datetime.now()
                if datetime.strptime(SecretClass.createOn, "%Y-%m-%dT%H:%M:%S.%f") > current_date: 
                    createOn = SecretClass.createOn
            except:
                raise HTTPException(status_code=400, detail="Invalid create time")

        #password
        if SecretClass.password != "":
            try:
                ph = PasswordHasher()
                hash = ph.hash(SecretClass.password)
                password = hash
            except:
                raise HTTPException(status_code=1011, detail="Hashing error")

        #db_ID
        db_id1 = secrets.token_urlsafe(15)
        db_id2 = secrets.token_urlsafe(15)
        db_ID = db_id1

        #message

        if SecretClass.message == "":
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        else:
            message = SecretClass.message
            
        val = (db_ID, maxReads, message, expire, createOn, password)
        print(val)
        

    except:
        raise HTTPException(status_code=1011, detail="Error creating the secret.")