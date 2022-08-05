const axios = require ('axios')

async function test() {
    const response = await axios.patch(
        "http://localhost:3100/api/chargeDevices/{insert test chargeDeviceId here}/charge"
    );
    console.log(response.data)
}
test();