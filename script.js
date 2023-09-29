

// Example using the Fetch API:
// fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
//     .then(response => response.json())
//     .then(data => {
//         // Process and use the data here
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });



// fetch(' https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')

// .then(res => res.json( ))
// .then(data => console.log(data ))







// fetch(' https://api.acharyaprashant.org/v2/legacy/courses/tags')

// .then(res => res.json( ))
// .then(data => console.log(data ))


// fetch(' https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')

// .then(res => res.json( ))
// .then(data => console.log(data ))



fetch(' https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3').then((data) => {
  return data.json();
}).then(( completedata) => {
  let data = " ";
  completedata.map((values) => {
    data  = `<div class = "card">
   

    <div class="sant">${values.title}</div>



    <section class="section1">
    <img src="${values.thumbnail}" alt="Image">
    <div class="rotate">
        <h4 style="align-items: self-start;">${values.subtitle}</h4>
        <p style="font-weight: 100;">${values.description}</p>
        <h2> ${values.language} </h2>
    </div>
</section>



</div>`
});

document.getElementById("cards").innerHTML = data1;
  }).catch((err) =>{
    console.log(err);
  })