# OctoLab - A developer's approach to GitHub API

[OctoLab](https://ajaykrupalk.github.io/octolab/) Designed and Developed by Ajay Krupal K. <br>

Huge shoutout to **@iamshaunjp** for the [Async JavaScript Tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu) on YouTube. <br>

Special thanks to **@nikhilkutinha** for all the inputs and suggestions. <br>

<img src="Profile.JPG"> <br>

## Introduction 

GitHub API can be accessed at:
> https://api.github.com/users

> Asynchronous code is basically one which starts now and finishes later

There are two approaches we can use to accessing the GitHub API using JavaScript:
- Using XMLHttpRequest()
- Using Fetch API

### Using XMLHttpRequest()

> Create a request object

``` 
const request = new XMLHttpRequest(); 
```

>  XMLHttpRequest() is used to receive data of any type

>  We make a request to the API using the API's endpoint
```
request.open('GET,`https://api.github.com/users`);
```
> Make sure to mention the endpoint [https://api.github.com/users] within backticks

> We then send the request to the API
```
request.send();
```

> With the above code, we can't find out the status of our request

> Therefore, we add an event listener
```
request.addEventListener('readystatechange',() => {
  if(request.readyState === 4 && request.status === 200){ 
    //if the operation of sending and receiving the data is complete, the readyState = 4
    //if data is found the request.status = 200
    console.log(request.responseText);
  }
  else if(request.readyState === 4){
    console.log('Could Not Fetch Data');
  }
})
```
> There are [five types](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) of readyState

> Now let's wrap all the code in a function, so that we can call it each time

> And specify a paramater called callback which is a function which will be called according to the response

```
const getData = (callback) => {
  const request = new XMLHttpRequest(); 
  
  request.addEventListener('readystatechange',() => {
    if(request.readyState === 4 && request.status === 200){ 
      //if the operation of sending and receiving the data is complete, the readyState = 4
      //if data is found the request.status = 200
      callback(undefined, request.responseText);
    }
    else if(request.readyState === 4){
      callback("Could not fetch data",undefined);
    }
  });
  
  request.open('GET',`https://api.github.com/users`);
  request.send();
};
```

> Now we can specify a callback function, to react to the response of the website

```
getTodos((error,data) => {
  if(error){
    console.log(error);
  }
  else {
    console.log(data);
  }
});
```

> We have to convert the JSON data into JavaScript Objects

> Make few changes to the code as follows:

```
if(request.readyState === 4 && request.status === 200){ 
  const data = JSON.parse(request.responseText);//converting JSON data into JavaScript Objects
  callback(undefined, data);
}
```

> In order to make multiple requests to the same API we do the following changes
- We pass a parameter called resource to getData()

```
const getData = (resource, callback) 
```

- add resource as the argument to request.open()

```
request.open('GET',resource);
```

- Changing the parameter in the main function
```
getTodos('https://api.github.com/users',(error,data) => {
  console.log(data);
  getTodos('https://api.github.com/users/octocat',(error,data) => {
    //octocat is a sample username
    console.log(data);
    getTodos('https://api.github.com/users/octocat/repos',(error,data) => {
      //octocat is a sample username
      console.log(data);
    });
  });
});
```

> The above code will get complicated if we ever want to make multiple requests. Therefore, we implement something called promises.
> A promise is going to lead to one of two outcomes
  - Resolved i.e. the data we requested is received
  - Rejected i.e. there is an error in the request

> Making a few changes to the code
  - Adding a function called Promise
  - Taking in resolve and reject as parameters

```
const getData = (resource, callback) => {

return new Promise(() => {
    const request = new XMLHttpRequest(); 
  
    request.addEventListener('readystatechange',() => {
      if(request.readyState === 4 && request.status === 200){ 
        const data = JSON.parse(request.responseText);
        resolve(data);
      }
      else if(request.readyState === 4){
        reject('Could not find data');
      }
    });

    request.open('GET',`https://api.github.com/users`);
    request.send();
  });
};

//remove the callback function and add then and catch clause
getTodos('https://api.github.com/users').then(data = > {
  console.log(data);
}).catch(error => {
  console.log(error);
});
```

> Making multiple requests using promises a.k.a Chaining Promises

```
getData(`https://api.github.com/users`).then(data=>{
    console.log(data);
    return getData(`https://api.github.com/users/octocat`)
  }).then(data => {
    console.log(data);
    return getData(`https://api.github.com/users/octocat/repos`)
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
});
```

### Using Fetch API
> It is a newer and quicker way for Asynchronous Javascript which is inbuilt into the language

> We can achieve this with fetch() which will return  a promise

```
fetch(`https://api.github.com/users`).then(response => {
  return response.json();//use to parse json text to javascript objects and returns a promise
}).then(data => {
  console.log(data);
}).catch(error => {
  //fetch() will output an error only if there is a servor error
  console.log(error);
});
```

> There are two important topics: Async and Await, which will help us with promises and chaining promises
> The keyword **async** is mentioned before the function

```
const getData = async () =>{

  const response = await fetch(`https://api.github.com/users`);
  //The await keyword stalls the javascript till the data is resolved
   
  if(response.status !== 200){
    throw new Error('Not Found');
  }
  
  const data = await response.json();
  return data;
  //for chaining promises use the above code but with different variables
};

getData()
  .then(data => console.log(data));
  .catch(error => console.log(error.message));
```
