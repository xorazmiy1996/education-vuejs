import AuthService from "@/service/auth";

const  state = {
     result_test: 0,
}
const  mutations = {
    setResulTest(state, new_result){
        state.result_test = new_result;
    },
}

const action = {
    register(context, student){
        return new Promise(()=>{
            AuthService.register(student).then(response =>{
            }).catch(error =>{
                console.log("Error", error)
            })


        })

    },
}


export default {
    state,
    mutations,
    action
}

