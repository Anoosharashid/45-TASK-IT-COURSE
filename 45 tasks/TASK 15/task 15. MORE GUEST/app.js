var Guest_list = ["anoosha", "mahnoor", "rashid"];
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Dear ".concat(Guest_list[i], " : \n you are invited to dinner! \n"));
}
console.log("\"unfortunately ".concat(Guest_list[1], ", cant come to dinner.\""));
Guest_list[1] = "rabia";
console.log("\nNEW LIST OF INVITATION : \n");
for (var j = 0; j < Guest_list.length; j++) {
    console.log("Dear ".concat(Guest_list[j], " : \n you are invited to dinner! \n"));
}
