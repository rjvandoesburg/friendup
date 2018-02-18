<template>
    <gmap-map :center="center" :zoom="zoom" :style="styling">
        <gmap-cluster>
            <gmap-marker
                    v-if="showUserMarker"
                    :position="userMarker.position"
                    :text="userMarker.infoText"
                    :clickable="true"
                    :draggable="false"
            ></gmap-marker>
            <gmap-marker
                    :key="index"
                    v-for="(marker, index) in markers"
                    :position="marker.position"
                    :clickable="true"
                    :draggable="false"
            ></gmap-marker>
        </gmap-cluster>
    </gmap-map>
</template>

<script>
    // @see https://www.npmjs.com/package/vue2-google-maps
    import * as VueGoogleMaps from 'vue2-google-maps';
    import { mapGetters } from 'vuex';

    window.Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyD1pIF7eioP-uvAiRYLt7IlAg_zkJC3jXg',
        }
    });

    export default {
        props: {
            height: {
                default: 400
            }
        },
        data() {
            return {
                markers: []
            }
        },
        mounted() {

        },
        computed: {
            center() {
                return {
                    lat: this.$store.state.coordinates.lat,
                    lng: this.$store.state.coordinates.lng,
                }
            },
            styling() {
                return `height: ${this.height}px;`;
            },
            zoom() {
                return this.showingCurrentLocation ? 13 : 8;
            },
            showingCurrentLocation() {
                return this.$store.state.coordinates.isCurrentLocation;
            },
            showUserMarker() {
                return this.userMarker !== false;
            },
            ...mapGetters([
                'userMarker',
            ])
        }
    }
</script>