
import { default as React } from 'react'

const _ = require('lodash')
const { compose, withProps, lifecycle } = require('recompose')
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require('react-google-maps')
const { SearchBox } = require('react-google-maps/lib/components/places/SearchBox')
const google = window.google

const MapWithASearchBox = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBwoQbidFxxgJq48d6-02ZX4qAljBs03nc&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`, margin: `20px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 29.7388418, lng: -95.7580048
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          const bounds = new google.maps.LatLngBounds()

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }))
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center)

          this.setState({
            center: nextCenter,
            markers: nextMarkers
          })
          // refs.map.fitBounds(bounds)
        }
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  (<GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.BOTTOM}
      onPlacesChanged={props.onPlacesChanged}
    >
    <input
        type='text'
        placeholder='Address Search'
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginBottom: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
      />
    </SearchBox> 
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
  </GoogleMap>) 
)

export default MapWithASearchBox

// AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp

