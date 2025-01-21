
let Guest_list : string[] = ["anoosha", "rabia", "rashid"];

console.log("\nNEW LIST OF INVITATION : \n");

for ( let j=0; j < Guest_list.length; j++){
    console.log(`Dear ${Guest_list[j]} : \n you are invited to dinner! \n`);
}

console.log("good news! we have found a bigger dinner table, so more space is available. so our new guests are :\n")

Guest_list.unshift("amna");
Guest_list.splice(2,0, "ayesha");

Guest_list.push("rimsha");

for ( let i=0; i < Guest_list.length; i++){
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
}


