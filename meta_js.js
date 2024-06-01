/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , eyecolor, shirtcolor, bodytype) {
    const NFT = {
        "name" : name,
        "eyecolor" : eyecolor,
        "shirtcolor" : shirtcolor,
        "bodytype" : bodytype
    }
   myNFTs.push(NFT);
   console.log("Minted : " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i = 0; i <myNFTs.length; i++){

        console.log("\nID:  \t\t\t" + (i+1));
        console.log("Name:\t\t    "+myNFTs[i].name);
        console.log("EyeColor:\t\t"+myNFTs[i].eyecolor);
        console.log("Shirtcolor:\t\t"+myNFTs[i].shirtcolor);
        console.log("BodyType: \t \t"+myNFTs[i].bodytype);

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+myNFTs.length);

}

// call your functions below this line
mintNFT("Joy","Green","Black","Female");
mintNFT("Sam","Green","Blue","Male");
mintNFT("Roy","lue","White","Female");
mintNFT("Monty","Green","Black","Male");
mintNFT("Jim","Blue","Yellow","Female");
listNFTs();
getTotalSupply();
