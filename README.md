# Mini Shop

This project shows you how to build a simple e-commerce application using React and Django, and also Next.js and Django. You see in this application how to integrate payments using the Braintree API, and do things like create customers, addresses, payment methods, and transactions.

In order to test out this project, first follow these steps to get the backend API running:

-   clone the repository

Then you'll want to setup Braintree:

-   navigate to the Braintree website and create a Braintree sandbox account
-   open up your backend/settings.py file
-   place your merchant ID in the BT_MERCHANT_ID setting
-   place your public key in the BT_PUBLIC_KEY setting
-   place your private key in the BT_PRIVATE_KEY setting

After that you'll have Braintree properly hooked up and can continue to the next steps:

-   navigate into your backend folder
-   create a virtual environment by running: python3 -m venv venv
-   activate the virtual environment by running: source venv/bin/activate (MacOS or Linux) or .\venv\Scripts\activate (Windows)
-   then install the needed packages by running: pip install -r requirements.txt
-   then create a PostgreSQL database called mini_shop, you can do this by running in a postgres shell: CREATE DATABASE mini_shop OWNER postgres; 
-   then you'll go into your backend/settings, and in the PASSWORD fields place your postgres password which you can create by running in a postgres shell: \password
-   then just make migrations by running: python manage.py makemigrations
-   then migrate to your PostgreSQL database by running: python manage.py migrate
-   then finally you can run your server by running: python manage.py runserver

Then after that you can run your frontend.

In this project the React frontend is located in the frontend_reference folder and the Next.js frontend is located in the frontend folder.

For running the frontend using React, follow these steps:

-   navigate into the frontend_reference folder
-   install necessary packages by running: npm install
-   then run your frontend by running: npm run start

For running the frontend using Next.js, follow these steps:

-   navigate into the frontend folder
-   install necessary packages by running: npm install
-   then run your frontend by running: npm run dev

From here you should be able to navigate into localhost:3000 and use the application.
