var url = new URLSearchParams(window.location.search);
console.log(url.get('user'));

username = url.get('user');

const getData = async () => {

  const userResponse = await fetch(`https://api.github.com/users/${username}`);

  if(userResponse.status !== 200){
    window.open("404.html","_self");
    throw new Error('Not Found');
  }

  const userData = await userResponse.json();

  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

  const reposData = await reposResponse.json();

  if(reposData.length === 0){
    var repos = document.querySelector(".overflow");
    repos.innerHTML = "";
  }

  return [userData, reposData];
}


function getDate(element) {
  date = new Date(element);
  return date.toDateString();
}


function getDateTime(element) {
  date = new Date(element);
  return getDate(date)+" "+
    date.getHours()+
    ":"+(date.getMinutes()<10?'0':'') + date.getMinutes();
}


function getRows(data){
  var table = document.querySelector(".trows");

	var rowCount = table.rows.length;
	
  for(let i = 0; i < data.length; i++){

    var row = table.insertRow(rowCount);
    var cell0 = row.insertCell(0);

    var folder = document.createElement('img');
    folder.setAttribute('src','folder.png');
    cell0.style.textAlign = "right";
    cell0.appendChild(folder);
    
    var cell1 = row.insertCell(1);
    var link = document.createElement('a');
    link.setAttribute('href',data[i].html_url);
    link.innerHTML = data[i].name;
    cell1.appendChild(link);
    var cell2 = row.insertCell(2);
    cell2.innerHTML = getDateTime(data[i].pushed_at);
    var cell3 = row.insertCell(3);
    cell3.innerHTML = data[i].language;
    var cell4 = row.insertCell(4);
    cell4.innerHTML = data[i].stargazers_count;
    cell4.style.textAlign = "center";
    var cell5 = row.insertCell(5);
    cell5.innerHTML = data[i].forks_count;
    cell5.style.textAlign = "center";
    var cell6 = row.insertCell(6);
    cell6.innerHTML = data[i].size+" KB";
    cell6.style.textAlign = "right";
    rowCount += 1;
  }
}

function reposCount(data){

  var languages = {};
  var temp = 0;

  for(let i=0; i<data.length; i++){
    if (data[i].language in languages){
      languages[data[i].language] += 1;
    }
    else{
      languages[data[i].language] = 1;
    }
  }
  languages["Others"] = languages[null];
  delete languages[null];
  var lang = Object.keys(languages);
  var count = Object.values(languages);
  var options = {
          series: [{
          name: "Repos",
          data: count
        }],
        chart: {
          type: 'bar',
          height: 150,
          width: 200,
          sparkline: {
            enabled: true
          },
        },
        title: {
          text: "Top Languages",
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  'Fira Code, monospace',
            color: ['rgba(255, 255, 255, 0.5)']
          },
        },
        subtitle: {
          text: "Hover over for details",
          align: 'center',
          margin: 10,
          style: {
            fontSize:  '12px',
            fontWeight:  'normal',
            fontFamily:  'Fira Code, monospace',
            color:  ['rgba(255, 255, 255, 0.5)']
          },
        },
        stroke: {
          show: true,
          colors: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(205, 145, 210, 1)'
          ],
          width: 2,
          dashArray: 0,      
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            distributed: true
          }
        },
        fill: {
         colors: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(205, 145, 210, 0.2)'
          ],
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: lang,
        }
      };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

}

getData()
  .then(data => {
    // console.log(data[0]);
    document.querySelector('.dp').src = data[0].avatar_url;
    document.querySelector('.login').innerHTML = "@"+data[0].login;
    document.querySelector('.repos').innerHTML = data[0].public_repos;
    document.querySelector('.followers').innerHTML = data[0].followers;
    document.querySelector('.following').innerHTML = data[0].following;
    document.querySelector('.joined').innerHTML += getDateTime(data[0].created_at);
    document.querySelector('.updated').innerHTML += getDateTime(data[0].updated_at);
    getRows(data[1]);
    reposCount(data[1]);
  })
  .catch(error => {
      // window.open("404.html","_self");
      console.log(error.message);
    }
  );