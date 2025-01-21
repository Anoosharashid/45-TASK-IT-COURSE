let usernames = ["anoosha","rashid","rabia","mahnoor","muskan"];

usernames.forEach(oneuser =>{
    if(oneuser === "admin"){
        console.log(`hello ${oneuser}, would you like to see a stutus reports?`)
    }else{
        console.log(`hello ${oneuser}, thankyou for logging in again.`)
}
})