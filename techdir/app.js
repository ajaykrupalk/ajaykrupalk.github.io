const Joi = require('joi');
const express =  require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

const users = [
    { id:1, name: 'Ajay'},
    { id:2, name: 'Krupal'},
    { id:3, name: 'Kannan'},
];

app.get('/',(req, res)=>{
    res.send('Welcome to TechDir API');
});

app.get('/users',(req, res)=>{
    res.send(users);
});

app.get('/users/:id',(req, res)=>{
    const user = users.find(u=>u.id == parseInt(req.params.id));
    if(!user) return res.status(404).send('User does not exist');
    res.send(user);
});

app.post('/api/users',(req,res)=>{
    const { error} = validateCourse(req.body); //equivalent to getting result.error
    if(error) return res.status(400).send(error.details[0].message);

    const user = {
        id: users.length+1,
        name: req.body.name
    };

    users.push(user);
    res.send(user);
});

app.put('/api/users/:id',(req,res)=>{
    //check if user exists or not
    const user = users.find(u=>u.id == parseInt(req.params.id));
    if(!user) return res.status(404).send('User does not exist');
    
    //validate input
   const { error} = validateCourse(req.body); //equivalent to getting result.error
   if(error) return res.status(400).send(error.details[0].message);

    //update the user
    user.name = req.body.name;
    res.send(user);
});

app.delete('/api/users/:id',(req,res)=>{
    //check if user exists or not
    const user = users.find(u=>u.id == parseInt(req.params.id));
    if(!user) return res.status(404).send('User does not exist');
    
    //validate input
   const { error} = validateCourse(req.body); //equivalent to getting result.error
   if(error) return res.status(400).send(error.details[0].message);

    //Delete the user
    const index = users.indexOf(user);
    users.splice(index,1);

    res.send(user);
});

function validateCourse(user){
    const schema = Joi.object({
        name: Joi.string().min(1).required()
    });

    return schema.validate(user);
}
//PORT - an environment able which decides which PORT your API runs
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}..`);
});