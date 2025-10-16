const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config();

exports.getFact = async (req, res) => {
    try {
        const response = await axios.get('https://catfact.ninja/fact', {
        timeout: 5000,
        headers: {
                  "Content-Type": "application/json",
       }
        });
        const catFact = response.data?.fact || "Cats are beautiful creatures"

        const data = {
            status: 'success',
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK
            },
            timestamp: new Date().toISOString(),
            fact: catFact
        }

        res.status(200).json (data)
    } catch (error) {
        console.error ("Error fetching fact:", error);

        return res.status(200).json ({
            status: 'success',
            user: {
                email: process.env.EMAIL,
                name: process.env.NAME,
                stack: process.env.STACK
            },
            timestamp: new Date().toISOString(),
            fact: "The cat fact API call was not successfull this time. Please try again later"
        })
        
    }
}