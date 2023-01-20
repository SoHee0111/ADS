fetch('http://openapi.seoul.go.kr:8088/6b554e5961776a643131326e7a424774/json/WPOSInformationTime/1/5/')
    .then(res => res.json())
    .then(myJson => {
        console.log(document.getElementById('hangang_temp').innerText = '한강' + '       ' + myJson.WPOSInformationTime.row[4].W_TEMP + " °C")
    });