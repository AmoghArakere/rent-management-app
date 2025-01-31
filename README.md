# **SPRING BOOT CRUD APP**

This is a Spring Boot CRUD application for managing rent data. It provides APIs to create, read, update, and delete rent records, with a MySQL database configured using XAMPP.

**Features** :
Add new rent records.
View all rent records.
Update existing rent records.
Delete rent records.

**Tech Stack** : <br>
**Backend**: Spring Boot  <br>
**Database**: MySQL (via XAMPP) <br>
**Frontend**: React (Optional)

**How to Run** :
1. Clone the Repository
```
git clone https://github.com/AmoghArakere/rent-management-app.git
cd rent-management-app
```

2. Configure application.properties : <br><br>Update the database connection details in src/main/resources/application.properties:
```
spring.application.name=rent
spring.datasource.url=jdbc:mysql://localhost:3306/renting_module
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
```

3. Build and Run
Use Maven to build and start the application:
```
mvn spring-boot:run
```

**API Endpoints**

![image](https://github.com/user-attachments/assets/ba869af8-82a0-48fb-9801-17c268594efa)

Frontend (Optional)
A simple React frontend can be added for managing rent data. Refer to the rent-app Vite-based frontend for integration.

