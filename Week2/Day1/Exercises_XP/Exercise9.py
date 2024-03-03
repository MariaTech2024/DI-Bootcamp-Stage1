h_inch=int(input("What is your height in inches?: "))
inch_cm=round(h_inch*2.54,1)
if inch_cm > 145:
    print("You are tall enough to ride.")
else:
    print("You need to grow some more to ride.")