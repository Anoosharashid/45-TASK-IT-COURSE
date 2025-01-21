function make_shirt (size: string = "large",private  printmessage: string = "i love typescript"):{
    console.log(`creating a ${size} shirt with the ${printmessage} prints on shirt`)
}

make_shirt();



make_shirt("medium")

make_shirt("small", "i love javascript")