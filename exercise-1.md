# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

firstly, keep track of stock. we will need a get endpoint. We will put all the stock in data object and use a function to display the stock of our produce.
GET base-url/stock
POST /stock
PUT /stock/:id
create an endpoint for seating. will be a a get endpoint.
GET /seating/
everytime a customer signs in. we will have to create a post to the server
GET /seating/customer
POST /seating/customer
PUT /seating/customer/:id
make an endpoint for the menu. similarly to the stock. we will store the menu in an object
Also, and enpoint for the sales we make. so everytime a sale goes through we post. PUT so the manager can access the specific sale.
GET /menu
GET /sales
POST /sales
PUT /sales/:id
DELETE /sales/:id
GET /sales/:id
