console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template =
    <div>
        <h1>{app.title}</h1>
        {/*  ถ้า app.subtitle มีค่าให้แสดง <p> ที่มีค่า subtitle ภายใน */}
        {app.subtitle && <p>{app.subtitle}</p>}
        {/*  ถ้า app.options มีค่าและมีจำนวน options มากกว่า 0 ให้แสดงข้อความ 'Here are your options' แต่ถ้าไม่มีให้แสดงข้อความ 'No options' */}
        <p>{app.options && app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div >;

const user = {
    name: 'Chadapohn',
    age: 26,
    location: 'Thailand'
}

function getLocation(location) {
    console.log('location ->', location);
    if (location) {
        return <p>Location:{location}</p>;
    } else {
        return 'Unknown';
    }
}

const templateTwo =
    <div>
        {/* ถ้า user.name มีค่า จะนำชื่อของ user มาแสดง; หากไม่มี, แสดงว่า 'Anonymous' */}
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {/* ถ้า user.age มีค่า และค่า age >= 18, แสดงข้อความ "Age: {user.age}" */}
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>;

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);