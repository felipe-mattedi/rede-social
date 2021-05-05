import mysql.connector
import json

def lambda_handler(event, context):
    


    mensagem = json.loads(event["body"])
    id = mensagem["id"]

    
    mydb = mysql.connector.connect(
    host="database-lc-js.c65asbwk5kv5.us-east-1.rds.amazonaws.com",
    user="felipe",
    password="########",
    database="projetojs"
    )
    
    mycursor = mydb.cursor()
    
    mycursor.execute(f"SELECT * FROM `posts-rede-social` WHERE ID_POST = \"{id}\"")
    myresult = mycursor.fetchall()
    
    print(myresult)
    
    post = myresult[0]
    curtidas = post[4]
    
    curtidas += 1
    

    mycursor = mydb.cursor()
    mycursor.execute(f"UPDATE `projetojs`.`posts-rede-social` SET `CURTIDAS` = \"{curtidas}\" WHERE (`ID_POST` = \"{id}\")")
    mydb.commit()
    
    
    return

    
