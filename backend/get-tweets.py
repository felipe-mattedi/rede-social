import json
import mysql.connector

def lambda_handler(event, context):
    
  

    posts = []
    mydb = mysql.connector.connect(
    host="database-lc-js.c65asbwk5kv5.us-east-1.rds.amazonaws.com",
    user="felipe",
    password="########",
    database="projetojs"
    )
    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM `posts-rede-social`")
    myresult = mycursor.fetchall()
    for dado in myresult:
        post = {
        "id": dado[0],
        "usuario": dado[1],
        "post": dado[2],
        "data": dado[3],
        "curtidas": dado[4]
        }
        posts.insert(0,post)
        
    return posts

    


    
