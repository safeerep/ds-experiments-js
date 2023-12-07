const recursion = (val) => {
    if (val < 20) {
        recursion(val+2)
        console.log(val);
    }
}

recursion(2)
