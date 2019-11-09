const axios = require('axios');

exports.process_token = (data) => {
    var access_token = data.access_token;
    var client = data.client;
    
    if(client == 'google'){
        axios.get('https://openidconnect.googleapis.com/v1/userinfo',{
            params:{
                scope:'openid email profile'
            },
            headers: { Authorization: "Bearer " + access_token }
        }).then(res => {
            var data = res.data;
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    } else if(client == 'github') {
        axios.get('https://api.github.com/user',{
            params:{},
            headers: { Authorization: "Bearer " + access_token }
        }).then(res => {
            var data = res.data;
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    } else {
        throw error('Client not supported');
    }
};