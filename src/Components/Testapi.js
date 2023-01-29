import axios from "axios";
function Testapi() {
    axios.get('https://mybackend630112418079.000webhostapp.com/').then(resp => {
    console.log(resp.data);
});
}
export default Testapi