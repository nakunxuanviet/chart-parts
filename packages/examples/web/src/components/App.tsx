import React from 'react'
import { VirtualSvgPipeline } from '@gog/core'
import { Renderer } from '@gog/react-svg-renderer'

const pipeline = new VirtualSvgPipeline(new Renderer())
const scenegraph = {
	marktype: 'rect',
	items: [
		{ x: 0, y: 0, width: 50, height: 50, cornerRadius: 3, fill: 'steelblue' },
		{
			x: 25,
			y: 25,
			width: 50,
			height: 50,
			cornerRadius: 5,
			fill: 'firebrick',
			fillOpacity: 0.5,
			stroke: 'papayawhip',
			strokeWidth: 4,
			strokeOpacity: 0.8,
			strokeJoin: 'miter',
			strokeCap: 'round',
			strokeDash: [1, 1],
			strokeDashOffset: 2,
		},
		{ x: 50, y: 50, width: 50, height: 50, fill: 'forestgreen' },
	],
}

export default () => <div>{pipeline.handle(scenegraph)}</div>
