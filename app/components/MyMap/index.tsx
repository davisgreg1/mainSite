// import React, { useCallback, useState } from 'react'
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// }

// const center = {
//   lat: 40.712776,
//   lng: -74.005974
// }

// const MyMap = props => {
//   const { customOptions } = props
//   const GOOGLE_MAP_ID = process.env.GOOGLE_MAP_ID
//   const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY
//   console.log('GREG LOOK!  ~ file: index.tsx ~ line 18 ~ GOOGLE_MAP_API_KEY', GOOGLE_MAP_API_KEY);
//   console.log(
//     'GREG LOOK!  ~ file: index.tsx ~ line 22 ~ GOOGLE_MAP_ID',
//     GOOGLE_MAP_ID
//   )
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: GOOGLE_MAP_API_KEY
//   })

//   const [map, setMap] = useState(null)

//   const onLoad = useCallback(function callback (map) {
//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback (map) {
//     setMap(null)
//   }, [])

//   const mapOptions = {
//     mapTypeControl: false,
//     zoom: 15,
//     clickableIcons: false,
//     panControl: false,
//     rotateControl: false,
//     scaleControl: false,
//     streetViewControl: false,
//     zoomControl: false,
//     fullscreenControl: false,
//     mapId: GOOGLE_MAP_ID // ENV THIS
//   }

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       options={customOptions || mapOptions}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//       <Marker animation={google.maps.Animation.DROP} position={center} />
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }

// export default MyMap
