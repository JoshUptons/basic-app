import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        floors: [
            {
                floor: 1,
                sequences: [
                    {
                        sequence: 'W1005',
                        components: [
                            {
                                type: 'Frame',
                                id: 'FRM1001',
                                link: 'http:localhost:8080/frames/FRM1001'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})

export default store