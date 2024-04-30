var resume = 
{
    "name" : "Anugraha",
    "age" : 27,
    "address" : {
        "city" : "Chennai",
        "State" : "Tamilnadu"
    },
    "Number" : 1234567
};
for (key in resume) {
    console.log(key + ":" + resume[key]);
}
for (let key of Object.keys(resume)) {
    console.log(key + ":" + resume[key]);
}
/*resume.forEach(function(resume,index) {
console.log((index +1) + ":" + resume.name + ":" + resume.age + ":" + resume.Number);
}) */
let keys = Object.keys(resume);
keys.forEach((key) => {
    console.log(key + ":" + resume[key]);
    });
