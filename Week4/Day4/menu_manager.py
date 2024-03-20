import psycopg2
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        with psycopg2.connect(database='Restaurant', user='postgres', password='01813', host='localhost', port = '5432') as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM menu_items WHERE item_name = %s;", (name,))
                result = cur.fetchone()
                if result is None:
                    return None
                return MenuItem(result[1], result[2], result[0])

    @classmethod
    def all_items(cls):
        with psycopg2.connect(database='Restaurant', user='postgres', password='01813', host='localhost', port = '5432') as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT * FROM menu_items;")
                results = cur.fetchall()
                return [MenuItem(result[1], result[2], result[0]) for result in results]

item = MenuItem('Burger', 35)
item.save()

item.delete()

item = MenuItem('Veggie Burger', 37)
item.save()

item2 = MenuManager.get_by_name('Beef Stew')

items = MenuManager.all_items()

item.name = 'Vegan Burger'
item.price = 40
item.save()