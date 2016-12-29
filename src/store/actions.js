export const actions = {
    addUser: ({commit}, user) => {
        commit('addUser', user)
    },
    clearUsers: ({commit}) => {
        commit('clearUsers')
    },
}
