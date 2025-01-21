var current_users = ["anoosha", "mahnoor", "rabia", "moiz", "ali"];
var new_users = ["ahmed", "ali", "riaz", "anoosha", "fizza"];
new_users.forEach(function (new_one_users) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_users, " is available"));
    }
});
