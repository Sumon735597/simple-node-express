const express =require('express');
const cors=require('cors')
const app=express();
const port =5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW. I am Excited to learn Node and express with nodemon. automatic restart');
});

const user=[
    {
        name:"Sumon Hussain",
        Salary:20000,
        City:"Dhaka",
        Id:12,
    },
    {
        name:"Sakib AL Hasan",
        Salary:20000,
        City:"Khulna",
        Id:13,
    },
    {
        name:"Musfiqur Rahim",
        Salary:20000,
        City:"Barishal",
        Id:14,
    },
    {
        name:"Tamim Qibal",
        Salary:20000,
        City:"Dhaka",
        Id:15,
    },
    {
        name:"Sojib Tamider",
        Salary:20000,
        City:"Dhaka",
        Id:16,
    },
    {
        name:"Afif Hossain",
        Salary:20000,
        City:"Dhaka",
        Id:17,
    },
]


app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = user.length;
    user.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})





app.get('/user',(req,res)=>{
    const search=(req.query.search)
    if(search){
        const result =user.filter(item =>item.name.toLocaleLowerCase().includes(search));
        res.send(result)
    }
    else{
        res.send(user)
    }
    
})



app.listen(port, () => {
    console.log('Listening to port ', port);
})

