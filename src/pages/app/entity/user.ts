enum UserRole {
    ADMIN,
    USER
}

class User {
    username: string
    password: string
    email: string
    role: UserRole

    constructor(username: string, password: string, email: string, role: UserRole) {
        this.username = username
        this.password = password
        this.email = email
        this.role = role
    }
}