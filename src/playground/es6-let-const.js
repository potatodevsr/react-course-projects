var nameVar = 'Chada';
var nameVar = 'Dao';
console.log('nameVar ->', nameVar);

let nameLet = 'Patata';
nameLet = 'Patatototo';
console.log('nameLet ->', nameLet);

const nameConst = 'Miss Chada';
console.log('nameConst ->', nameConst);

function getPetName() {
    const petName = 'Tanoo';
    return petName;
}
const petName = getPetName();
console.log('petName ->', petName);

// block scoping

const fullName = 'Chadapohn Sorakanit';

// กำหนดตัวแปร firstName ด้วยคีย์เวิร์ด let โดยไม่กำหนดค่าเริ่มต้น
let firstName;

if (fullName) {
    // ถ้า fullName มีค่า ให้แยก fullName เป็นอาร์เรย์โดยแบ่งตามช่องว่าง (' ') และนำเฉพาะชื่อแรก (ส่วนแรก) จากอาร์เรย์นี้แล้วเก็บไว้ในตัวแปร firstName
    firstName = fullName.split(' ')[0];
    console.log('firstName ->', firstName);
}
console.log(firstName);