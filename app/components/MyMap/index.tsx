import React, { useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useLoaderData } from 'remix'

const containerStyle = {
  width: '100%',
  height: '100vh'
}

const center = {
  lat: 40.7561,
  lng: -74.0035
}

type CustomOptionsType = {
  mapTypeControl?: boolean
  zoom?: number
  clickableIcons?: boolean
  panControl?: boolean
  rotateControl?: boolean
  scaleControl?: boolean
  streetViewControl?: boolean
  zoomControl?: boolean
  fullscreenControl?: boolean
  mapId?: string
}

type MyMapProps = {
  customOptions?: CustomOptionsType
}

const MyMap = (props: MyMapProps) => {
  const { customOptions } = props
  const data = useLoaderData()
  const {
    ENV: { GOOGLE_MAP_ID, GOOGLE_MAP_API_KEY }
  } = data
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback (map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback (map) {
    setMap(null)
  }, [])

  const mapOptions = {
    mapTypeControl: false,
    zoom: 15,
    clickableIcons: false,
    panControl: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
    mapId: GOOGLE_MAP_ID
  }

  const modifiedCustomOptions = { ...customOptions, mapId: GOOGLE_MAP_ID }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      options={modifiedCustomOptions || mapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker animation={google.maps.Animation.DROP} position={center} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MyMap
