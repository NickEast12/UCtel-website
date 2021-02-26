import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';
import Icon from '../../assets/images/favicon-32x32.png';

const googleKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;
const MyMapStyles = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#278A9C',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#278A9C',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#278A9C',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#278A9C',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

const MapStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 17rem;
    position: relative;
  }
  @media only screen and (min-width: 375px) {
    height: 20rem;
  }
  @media only screen and (min-width: 414px) {
    height: 25rem;
  }
`;

export class Maps extends Component {
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: MyMapStyles,
    });
  }

  render() {
    return (
      <MapStyles>
        <Map
          google={this.props.google}
          zoom={15}
          disableDefaultUI
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
          initialCenter={{ lat: 51.29632, lng: -0.3444 }}
        >
          <Marker
            position={{ lat: 51.29632, lng: -0.3444 }}
            icon={{
              url: `${Icon}`,
            }}
          />
        </Map>
      </MapStyles>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleKey,
})(Maps);
