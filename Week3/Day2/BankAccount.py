class BankAccount:
    def __init__(self, username, password, initial_balance=0):
        self.username = username
        self.password = password
        self.authenticated = False
        self.balance = initial_balance

    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
        else:
            self.authenticated = False

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        if not self.authenticated:
            raise ValueError("User not authenticated")
        self.balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if not self.authenticated:
            raise ValueError("User not authenticated")
        if amount > self.balance:
            raise ValueError("Insufficient balance")
        self.balance -= amount


class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, minimum_balance=0, initial_balance=0):
        super().__init__(username, password, initial_balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        if not self.authenticated:
            raise ValueError("User not authenticated")
        if self.balance - amount < self.minimum_balance:
            raise ValueError("Withdrawal will result in balance below minimum")
        self.balance -= amount


# Example usage:
bank_account = BankAccount("user123", "password123", initial_balance=100)
bank_account.authenticate("user123", "password123")
bank_account.deposit(50)
print("Balance after deposit:", bank_account.balance)
bank_account.withdraw(30)
print("Balance after withdrawal:", bank_account.balance)

# Creating a MinimumBalanceAccount
min_balance_account = MinimumBalanceAccount("user456", "password456", minimum_balance=50, initial_balance=100)
min_balance_account.authenticate("user456", "password456")
min_balance_account.deposit(100)
print("Minimum Balance Account balance after deposit:", min_balance_account.balance)
min_balance_account.withdraw(30)
print("Minimum Balance Account balance after withdrawal:", min_balance_account.balance)