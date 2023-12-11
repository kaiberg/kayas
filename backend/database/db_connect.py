import mysql.connector
from dotenv import load_dotenv 
import os

db_cursor = ""

def connect_db():
    load_dotenv()

    username = os.environ.get('DBUSER')
    password = os.environ.get('DBPASSWORD')

    print(username, password)

    mydb = mysql.connector.connect(
      host="localhost",
      user=username,
      password=password,
      database="secrets"
    )

    return mydb.cursor()