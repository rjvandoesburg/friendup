// initial state
const state = {
    lng: 4.1584606,
    lat: 52.2093656,
    isCurrentLocation: false
};

const getters = {
    userMarker: state => {
        if (!state.isCurrentLocation) {
            return false;
        }

        return {
            position: {
                lat: state.lat,
                lng: state.lng
            },
            infoText: 'You are here'
        }
    }
};

// mutations
const mutations = {
    setCurrentLocation (state, coordinates) {
        state.lng = coordinates.lng;
        state.lat = coordinates.lat;
        state.isCurrentLocation = true;
    },
};

export default {
    state,
    getters,
    mutations
}