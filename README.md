# HNG Task Stage 0 — Dynamic Profile Endpoint

A simple Node.js/Express API that returns my profile info and a random cat fact.

---

##  Endpoint
**GET** `/me` → Returns:
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Queen Samuel",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T17:34:29.789Z",
  "fact": "Cats sleep for 70% of their lives."
}
If the cat fact API fails:

"fact": "The cat fact API call was not successful this time. Please try again later."
 Setup
Clone & Install
git clone https://github.com/queentifee/Hng.git
cd Hng
npm install

Create .env
EMAIL=youremail@example.com
NAME=Queen Samuel
STACK=Node.js/Express
PORT=4000

Run Locally
node index.js
Visit:
http://localhost:4000/me\

Dependencies
express
axios
cors
dotenv
express-rate-limit

Install all with:
npm install express axios cors dotenv express-rate-limit
✅ Test
Refresh /me — cat fact changes each time.

Turn off internet — fallback message appears.
