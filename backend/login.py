import mysql.connector
import json

def lambda_handler(event, context):
    
    mensagem = json.loads(event["body"])
    usuario = mensagem["usuario"]
    senha = mensagem["senha"]
    
    
    mydb = mysql.connector.connect(
    host="database-lc-js.c65asbwk5kv5.us-east-1.rds.amazonaws.com",
    user="felipe",
    password="########",
    database="projetojs"
    )
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT * FROM `usuarios-rede-social` WHERE USUARIO = \"{usuario}\" AND SENHA = \"{senha}\"")
    myresult = mycursor.fetchall()
    if(len(myresult) == 1):
        return {'statusCode' : 200}
    else:
        return {'statusCode' : 403}

    
