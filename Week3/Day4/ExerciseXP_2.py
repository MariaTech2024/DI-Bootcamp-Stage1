import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary is:", salary)

data["company"]["employee"]["birth_date"] = "1989-12-11"
print(data)

updatedJson = json.dumps(data)

with open('updated_data.json', 'w') as f:
    f.write(updatedJson)