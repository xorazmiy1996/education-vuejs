<template>
  <div style="height: 220px; width: 450px;">
    <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[41.54909833358724, 60.617210423925876]"
        @move="log('move')"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <l-marker :lat-lng="[41.54909833358724, 60.617210423925876]" draggable @moveend="log('moveend')">
        <l-tooltip>
          SpeakU
        </l-tooltip>
      </l-marker>

<!--      <l-marker :lat-lng="[41.54909833358724, 60.617210423925876]">-->
<!--        <l-icon :icon-url="iconUrl" :icon-size="iconSize" />-->
<!--      </l-marker>-->

<!--      <l-marker :lat-lng="[41.54909833358724, 60.617210423925876]" draggable @moveend="log('moveend')">-->
<!--        <l-popup>-->
<!--          SpeakUp-->
<!--        </l-popup>-->
<!--      </l-marker>-->

    </l-map>
<!--    <button @click="changeIcon">New kitten icon</button>-->
  </div>
</template>
<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 20,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>