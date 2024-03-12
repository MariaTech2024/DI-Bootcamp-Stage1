#Exercise1

from func import add_numbers

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
        
    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __int__(self):
        return self.amount

    def __repr__(self):
        return str(self)

    def __add__(self, other):
        if isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        elif isinstance(other, self.__class__):
             if self.currency != other.currency:
                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
             return Currency(self.currency, self.amount + other.amount)
        else:
            raise TypeError("Unsupported operand type for +")

    def __radd__(self, other):
        return self.__add__(other)

    def __iadd__(self, other):
        result = self.__add__(other)
        self.amount = result.amount
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
#print(c1+c3)

add_numbers(10, 5)