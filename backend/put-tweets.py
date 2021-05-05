import mysql.connector
import json

def lambda_handler(event, context):
    
    
    mensagem = json.loads(event["body"])
    usuario = mensagem["usuario"]
    post = mensagem["post"]
    data = mensagem["data"]
    
    mydb = mysql.connector.connect(
    host="database-lc-js.c65asbwk5kv5.us-east-1.rds.amazonaws.com",
    user="felipe",
    password="########",
    database="projetojs"
    )
    mycursor = mydb.cursor()
    mycursor.execute(f"INSERT INTO `projetojs`.`posts-rede-social` (`USUARIO`, `POST`, `DATE`) VALUES (\"{usuario}\", \"{post}\", \"{data}\")")
    mydb.commit()
    
    return

    
