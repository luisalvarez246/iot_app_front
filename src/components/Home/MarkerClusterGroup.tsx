import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { useMap } from 'react-leaflet';
import { MarkerClusterGroupProps } from '../../interfaces/DeviceInterfaces';
import './MarkerClusterGroup.css';

const MarkerClusterGroup = ({ children }: MarkerClusterGroupProps) => 
{
  const map = useMap();

  useEffect(() => {
    const markerClusterGroup = L.markerClusterGroup({
		iconCreateFunction: (cluster) =>
		{
        	const childCount = cluster.getChildCount();
        	let c = ' marker-cluster-';
        	if (childCount < 10) {
        	  c += 'small';
        	} else if (childCount < 100) {
        	  c += 'medium';
        	} else {
        	  c += 'large';
        	}

        	return new L.DivIcon({
        	  html: `<div class="cluster-circle${c}">${childCount}</div>`,
        	  className: 'marker-cluster',
        	  iconSize: new L.Point(40, 40),
        	});
    	},
	});
    
    React.Children.forEach(children, (child) => 
	{
      if (React.isValidElement(child)) 
	  {
		const { position, eventHandlers, alt, title } = child.props;
		
		const marker = L.marker(position);
		if (eventHandlers && eventHandlers.click) 
		{
			marker.on('click', eventHandlers.click);
		}
		marker.bindTooltip(`${alt} <br> ${title}`, { permanent: false, opacity: 0.9 });
		markerClusterGroup.addLayer(marker);
      }
    });

    map.addLayer(markerClusterGroup);

    return () => {
      if (map) {
        map.removeLayer(markerClusterGroup);
      }
    };
  }, [children, map]);

  return (null);
};

export default MarkerClusterGroup;
