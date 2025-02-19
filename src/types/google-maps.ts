interface GoogleMapType {
  Map: {
    new (element: HTMLElement, options: {
      zoom: number;
      center: { lat: number; lng: number };
      mapId?: string;
      styles?: Array<{
        featureType: string;
        elementType: string;
        stylers: Array<{ [key: string]: string }>;
      }>;
    }): unknown;
  };
  maps: {
    Map: GoogleMapType['Map'];
    Marker: {
      new (options: {
        position: { lat: number; lng: number };
        map: unknown;
        title?: string;
      }): unknown;
    };
  };
}

declare global {
  interface Window {
    google: GoogleMapType;
    initMap: () => void;
  }
}

export {};
