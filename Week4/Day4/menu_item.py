import psycopg2

class MenuItem:
    def __init__(self, name, price, item_id=None):
        self.name = name
        self.price = price
        self.item_id = item_id

    def save(self):
        with psycopg2.connect(database='Restaurant', user='postgres', password='01813', host='localhost', port = '5432') as conn:
            with conn.cursor() as cur:
                if self.item_id is None:
                    cur.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s) RETURNING item_id;", (self.name, self.price))
                    self.item_id = cur.fetchone()[0]
                else:
                    cur.execute("UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_id = %s;", (self.name, self.price, self.item_id))
                conn.commit()

    def delete(self):
        with psycopg2.connect(database='Restaurant', user='postgres', password='01813', host='localhost', port = '5432') as conn:
            with conn.cursor() as cur:
                if self.item_id is not None:
                    cur.execute("DELETE FROM menu_items WHERE item_id = %s;", (self.item_id,))
                    conn.commit()