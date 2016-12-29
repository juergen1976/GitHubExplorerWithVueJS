export const mutations = {
    clearUsers: (state) => {
        state.users = [];
    },
    addUser: (state, user) => {
        state.users.push(user);
    }
};