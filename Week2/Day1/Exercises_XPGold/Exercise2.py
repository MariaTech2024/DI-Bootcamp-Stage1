month=int(input("Enter a month from 1 to 12: "))
if month==3 or month==4 or month==5:
    print("Spring runs from March (3) to May (5)")
elif month==6 or month==7 or month==8:
    print("Summer runs from June (6) to August (8)")
elif month==9 or month==10 or month==11:
    print("Autumn runs from September (9) to November (11)")
else:
    print("Winter runs from December (12) to February (2)")