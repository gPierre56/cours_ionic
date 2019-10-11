
document.addEventListener('deviceready', () => {

    let cordovaVersion = device.cordova;
    let model = device.model;
    let uuid = device.uuid;

    document.getElementById('details').innerHTML = `<li>Cordova : ${cordovaVersion}</li>
<li>Model : ${model}</li>
<li>UUID : ${uuid}</li>`;
    console.log()
});

document.addEventListener('online', () => {
    let connexion = navigator.connection.type;
    console.log(navigator.connection);
    document.getElementById('network').innerText = `${connexion}`;
});



