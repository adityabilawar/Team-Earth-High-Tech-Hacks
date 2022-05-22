


# Team EARTH Learning NFTs High Tech Hacks

Learning NFTs is a web application that assists and educates students to create their very own non-fungible token!
"Helping students learn how to create and sell NFTs with an easy to use and create minting software that deploys NFTs onto DeSo Diamond." - Derek, Aditya, and Nithin 

# Technologies used:
vite vanilla js
hardhat
Twilio Sendgrid(to send a conformation code for when the user is logging in)
CockroachDB(yo store user data onto our database)
OpenZepplin(to make an ethereum contract in ERC721)
DeSo protocol API
python 
sol

## Installation & Dependencies 
- Download node on website 
- Install hardhat
```
npx i hardhat

```
- Install Sendgrid
```
echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env

npm install --save sendgrid
```
- Install cockroachDB
- Install DeSo
## Usage
- Update the cockroachDB connectionString 
- Update the Sendgrid Twilio Single Sender ID and API Key in the env file
- update the DeSo credentials 
```
git clone <this-repo>
npm install

npm run dev
```

## Authors
- Aditya Bilawar
- Derek Sheen
- Nithin Pillai
