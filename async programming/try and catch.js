async function JSONConversion(parsestring) {
    try {
        let d=JSON.parse(parsestring);
        return d;
    } catch (error) {
        console.log("The operation has generated an error.....");
        return null;
        
    }
}
const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}';
const s=JSONConversion(validJSON);
console.log(s);
console.log(JSONConversion(invalidJSON));

