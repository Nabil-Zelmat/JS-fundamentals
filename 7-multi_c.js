const count = parseInt(process.argv[2], 10);
let output = "";

if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    if (count > 0) console.log(output.trim());
}


