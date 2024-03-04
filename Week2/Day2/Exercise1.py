my_fav_numbers={"3", "5", "7", "11", "12"}
my_fav_numbers.update(["25", "15"])
my_fav_numbers=set(list(my_fav_numbers) [:-1])
friend_fav_numbers={"24", "35"}
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)