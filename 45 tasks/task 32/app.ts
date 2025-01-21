let current_users = ["anoosha","mahnoor","rabia","moiz","ali"]

let new_users = ["ahmed","ali","riaz","anoosha","fizza"]

new_users.forEach(new_one_users => {



    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())

    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`this username ${new_one_users} is available`)
    }
    
})