# e-plantShopping: Paradise Nursery

Welcome to **Paradise Nursery**, a high-performance React application designed for plant enthusiasts. This project serves as a comprehensive e-commerce platform that allows users to explore, select, and manage a diverse collection of indoor and outdoor plants.

##  Project Mission
At Paradise Nursery, we believe that "Green Meets Serenity." Our mission is to provide high-quality, air-purifying, and aromatic plants to help our customers create their own indoor oasis.

---

##  Live Application
**Check out the live store here:** [https://Nkinyampraises.github.io/e-plantShopping/](https://Nkinyampraises.github.io/e-plantShopping/)

---

## Features & Functionalities

### 1. Landing Page (App.jsx & App.css)
* **Immersive Experience:** Features a lush, full-screen background image defined in `App.css`.
* **Welcome Message:** Provides a brief, engaging paragraph about the company's heritage.
* **Interactive Navigation:** Includes a "Get Started" button that seamlessly transitions users to the Product Listing page.

### 2. Product Listing (ProductList.jsx)
* **Extensive Catalog:** Displays **six unique houseplants** across **three major categories**:
    * *Air Purifying Plants* (Snake Plant, Spider Plant, etc.)
    * *Aromatic Fragrant Plants* (Lavender, Jasmine, etc.)
    * *Insect Repellent Plants* (Marigold, Catnip, etc.)
* **Smart Shopping:** Each plant includes a thumbnail image, description, and price.
* **Dynamic Buttons:** "Add to Cart" buttons update the global state and automatically **disable** (gray out) once an item is added to prevent duplicates.
* **Persistent Header:** A responsive Navbar allows navigation between "Home," "Plants," and "Cart," featuring a dynamic cart icon that updates the total item count in real-time.

### 3. Shopping Cart (CartItem.jsx & CartSlice.jsx)
* **Global State Management:** Powered by **Redux Toolkit** to ensure data consistency across the app.
* **Total Amount Calculation:** Automatically sums the cost of all items in the cart.
* **Granular Control:**
    * Increment or decrement item quantities directly from the cart view.
    * Automatic removal of items if the quantity reaches zero.
    * Subtotal calculation per plant type based on unit price and quantity.
* **Delete Functionality:** A dedicated "Delete" button for each item to remove it from the cart entirely.
* **Navigation:** A "Continue Shopping" button that redirects users back to the plant gallery.
* **Checkout Integration:** A "Checkout" button that alerts the user with a "Coming Soon" message.

---

## Technical Implementation

### Redux Slice (`CartSlice.jsx`)
The core logic for the shopping cart is handled through a Redux slice with three main reducers:
1.  `addItem`: Adds a new plant object to the state array.
2.  `removeItem`: Filters the state to remove a specific plant by name.
3.  `updateQuantity`: Modifies the quantity of an existing item in the cart.

### Deployment
This project is deployed using **GitHub Pages**. 
* **Base URL:** `/e-plantShopping`
* **Build Tool:** Vite

---

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Nkinyampraises/e-plantShopping.git](https://github.com/Nkinyampraises/e-plantShopping.git)

   cd e-plantShopping
   npm install
   npm run dev
   ### **Final Submission Step:**

1.  **Open `README.md`** in your project.

2.  **Paste** the code above and **Save**.

3.  **Run the final sync:**

    ```bash

    git add .

    git commit -m "Complete README with all rubric requirements"

    git push origin main

    ```
