const mainDiv = document.getElementById('coffee')

function fetchData ()
{
    fetch("https://api.sampleapis.com/coffee/hot")
			.then(function (res) {
				console.log(res)
				return res.json()
			})
			.then(function (data) {
				console.log(data)
				displayData(data)
			})
			.catch(function (err) {
				console.log("my error is" + err)
			})
    

}
fetchData();
function displayData (data)
{
    data.forEach(function (c)
    {
        const coffee = document.createElement('div')
        coffee.classList.add('coffee')
        const title = document.createElement('h2')
        title.textContent = c.title;
        const desc = document.createElement('p');
        desc.textContent =c.description
        const image = document.createElement('img');
        image.src = c.image
        image.alt = c.title;
        coffee.append(image,title)
        mainDiv.appendChild(coffee)
})
}