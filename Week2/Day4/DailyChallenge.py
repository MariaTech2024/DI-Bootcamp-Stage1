matrix = '''7ii
Tsx
h%?
i #
sM
$a
#t%
^r!'''

rows = matrix.split('\n')
num_columns = len(rows[0])
columns = ['']*num_columns
for row in rows:
    for i in range(num_columns):
        if i < len(row):
            columns[i] += row[i]
            
secret_message = ' '
for column in columns:
    for char in column:
        if char.isalpha():
            secret_message += char
        else:
            secret_message += ' '
print(secret_message)