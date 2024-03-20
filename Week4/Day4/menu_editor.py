from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n")
        print("Please select an option:")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (E)")

        selection = input("> ").upper()

        if selection == 'V':
            view_item()
        elif selection == 'A':
            add_item_to_menu()
        elif selection == 'D':
            remove_item_from_menu()
        elif selection == 'U':
            update_item_from_menu()
        elif selection == 'S':
            show_restaurant_menu()
        elif selection == 'E':
            show_restaurant_menu()
            break
        else:
            print("Invalid selection. Please choose a valid option.")

def view_item():
    name = input("Enter the name of the item: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item: {item.name}, Price: {item.price}")
    else:
        print("Item not found.")

def add_item_to_menu():
    name = input("Enter the name of the item: ")
    price = float(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item was deleted successfully.")
    else:
        print("Item not found.")

def update_item_from_menu():
    name = input("Enter the name of the item to update: ")
    price = float(input("Enter the new price of the item: "))
    item = MenuManager.get_by_name(name)
    if item:
        item.name = name
        item.price = price
        item.save()
        print("Item was updated successfully.")
    else:
        print("Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\nRestaurant Menu:")
    for item in items:
        print(f"Item: {item.name}, Price: {item.price}")

if __name__ == "__main__":
    show_user_menu()