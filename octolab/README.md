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

####  Using XMLHttpRequest()

> Create a request object

``` 
const request = new XMLHttpRequest(); 
```

>  XMLHttpRequest is used to receive data of any type

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
  request.open('GET,`https://api.github.com/users`);
  request.send();
  request.addEventListener('readystatechange',() => {
  if(request.readyState === 4 && request.status === 200){ 
    //if the operation of sending and receiving the data is complete, the readyState = 4
    //if data is found the request.status = 200
    callback(undefined, request.responseText);
  }
  else if(request.readyState === 4){
    callback("Could not fetch data",undefined);
  }
})
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
