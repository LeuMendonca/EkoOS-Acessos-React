from ninja import NinjaAPI
from django.db import connection
import json

api = NinjaAPI()

@api.get('/getAcessos')
def getAcessos(request):
    cursor = connection.cursor()

    objAllAcessos = []

    cursor.execute("""
       select id::integer , maquina, empresa from acessos            
    """)
    resAcessos = cursor.fetchall()

    for acesso in resAcessos:
        objAllAcessos.append({
            'id' : acesso[0],
            'empresa' : acesso[1],
            'maquina' : acesso[2],
        })

    objReturn = objAllAcessos
    
    return objReturn

@api.get('/getTools')
def getTools(request):
    cursor = connection.cursor()

    objAllTools = []

    cursor.execute('select * from tools order by id')
    resTools = cursor.fetchall()

    for tool in resTools:
        objAllTools.append({
            'id' : tool[0],
            'titulo' : tool[1],
            'descricao' : tool[2],
        })

    objReturn = objAllTools

    print(objReturn)
    
    return objReturn    
