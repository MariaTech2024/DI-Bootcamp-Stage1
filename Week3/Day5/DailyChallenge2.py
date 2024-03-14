import requests
import time

def get_load_time(url):
     start_time = time.time()
     response = requests.get(url)
     end_time = time.time()

     if response.status_code == 200:
         return end_time - start_time
     else:
         return None

websites = ['https://www.google.com', 'https://www.ynet.co.il', 'https://ru.wikipedia.org']
for site in websites:
     load_time = get_load_time(site)
     if load_time is not None:
         print(f'Load time for {site} is {load_time} seconds.')
     else:
         print(f'Failed to load {site}.')