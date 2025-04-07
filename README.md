# Travel Agency

## Content

* [Overview](#overview)
* [Features](#features)
* [Some UI Previews](#some-ui-previews)
* [Technologies Used](#technologies-used)
  * [Frontend](#frontend)
  * [Backend](#backend)
* [License](#license)

## Overview

This is a full-stack web application that helps users explore and book travel tours with ease. The application includes functionalities such as user registration, voucher management, order processing, and payment handling. It supports authentication via JWT as well as OAuth2 integration with Google for a seamless login experience. The system is designed following REST API principles to ensure efficient communication between the frontend and backend services. The 
[backend](https://github.com/artsol0/TravelAgency-SpringBoot-Backend) is built using Spring Boot 3, while the [frontend](https://github.com/artsol0/travel-agency-ui) is implemented using Angular 17.

## Features
  
- **`User Registration and Authentication`**: Users can register accounts and log in to them with JWT or Google OAuth2.
- **`Email Confirmation`**: Accounts are activated after confirming email via a received link.
- **`Password Recovery`**: Users can reset their password if forgotten via a link received in their email.
- **`Voucher Searching`**: Users can search for voucherss by various attributes and keywords.
- **`Order Management`**: Users can create, pay for orders, and receive ordered vouchers in PDF format.
- **`Integration with Stripe payment service`**: Users can increase their balance via Stripe.
- **`Brute force protection`**: System limit failed login attempts.

## Some UI Previews

### Login page

![Login-Page](https://github.com/user-attachments/assets/eb6e0e0c-aeb5-4212-8f73-73295be984da)

### Main page (User POV)

![Main-Page](https://github.com/user-attachments/assets/c82d4072-d6b4-4964-85e0-76295c6ac3a7)

### Orders page (Admin POV)

![Order-Page](https://github.com/user-attachments/assets/ae9d00f8-d40d-4d95-9680-22d01b9d157c)

## Technologies Used

### Frontend

* Angular 17
* Bootstrap 5

### Backend
* Spring Boot 3
* Spring Security 6 with JWT Authentication & Google OAuth2
* Spring Data JPA
* Spring Validation
* PostgreSQL Driver
* H2 Database
* Thymeleaf
* Java Mail Sender
* Mockito with JUnit 5
* Lombok
* Swagger
* html2pdf
* Mapstruct
* Stripe payment
* Google zxing
* AOP Logging

## License

This project is licensed under MIT License. See the [LICENSE](https://github.com/artsol0/travel-agency-ui/blob/master/LICENSE) file for details.

