
user_credentials = {}

def register():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    user_credentials[username] = password
    print("Registration successful!")

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")
    
    stored_password = user_credentials.get(username)
    if stored_password and stored_password == password:
        print("Login successful!")
        return True
    else:
        print("Login failed. Invalid credentials.")
        return False

def secured_page():
    print("Welcome to the secured page!")
    print("This is sensitive information only accessible to logged-in users.")

def main():
    while True:
        print("\nMenu:")
        print("1. Register")
        print("2. Login")
        print("3. Access Secured Page")
        print("4. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == '1':
            register()
        elif choice == '2':
            if login():
                secured_page()
        elif choice == '3':
            secured_page()
        elif choice == '4':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
