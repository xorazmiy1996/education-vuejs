import axios from "@/service/axios";
const CabinetService={
    getAllCabinets(){
        return axios.get('/educations/cabinet/')
    },
    createCabinet(data){
        return axios.post('/educations/cabinet/', data)
    }
}

export default CabinetService
