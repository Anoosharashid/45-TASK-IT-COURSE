var usernames = ["anoosha", "rashid", "rabia", "mahnoor", "muskan"];
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a stutus reports?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thankyou for logging in again."));
    }
});
