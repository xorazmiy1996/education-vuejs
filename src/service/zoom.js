import axios from "@/service/axios";
const ZoomService = {
    createZoomLink(id){
        return axios.post(`/educations/cabinet/${id}/create_zoom_link/`)
    },

}
export default ZoomService